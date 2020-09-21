import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/shared/services';
import { ProductGenreService } from 'src/app/shared/services';
import { BaseComponent } from '../../base/base.component';
import { ProductForm } from 'src/app/shared/forms/Product.form';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { dbOptions } from '../../../enums/db-options.enum';
import { tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent extends BaseComponent implements OnInit, OnChanges {

  @Input() formData: any;

  productData: any;
  genresList: any;

  public productForm: ProductForm;
  private productId: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private genreService: ProductGenreService,
    public bsModalRef: BsModalRef,
    private toastr: ToastrService
  ) {
    super();
    this.productForm = new ProductForm(fb);
  }

  ngOnInit() {
    this.getData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const formData = changes.formData;
    if (formData.currentValue) {
      this.setValues(formData.currentValue);
    }
  }

  private getProductData(id: number) {
    this.productService.show(id).pipe(
      tap(data => {
        this.productData = data;
      })
    ).
      subscribe();
  }


  private getListData() {
    return forkJoin(
      this.productService.getAll(),
      this.genreService.getAll()
    );
  }

  private getData() {
    this.getListData().subscribe(data => {
      this.genresList = data[1].data.attributes;
    });
  }

  private setValues(productData) {
    this.productForm.name.setValue(productData.name);
    this.productForm.id_genre.setValue(productData.id_genre);
    this.productForm.price.setValue(productData.price);

    if (productData.id) {
      this.productId = productData.id;
    }
  }

  writeData() {
    this.bsModalRef.hide();
    if (this.productForm.form.valid) {
      const formData = this.productForm.form.getRawValue();
      if (this.productId) {
        this.productService.update(this.productId, formData).pipe(
          tap(
            data => {
              this.checkIfSuccess(data, dbOptions.UPDATE);
            })
        ).subscribe();
      } else {
        this.productService.add(formData).pipe(
          tap(
            data => {
              this.checkIfSuccess(data, dbOptions.ADD);
            })
        ).subscribe();
      }
    }
  }

  checkIfSuccess(data, mode) {
    if (mode === dbOptions.ADD) {
      this.toastr.info('New product has been added.');
    } else if (mode === dbOptions.UPDATE) {
      this.toastr.info('The product data has been modified.');
    }
  }
}
