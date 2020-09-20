import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { dbOptions } from '../../shared/enums/db-options.enum';
import { ProductModel } from '../../shared/models/product.model';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];
  public temp = [];
  private modalRef: BsModalRef;

  constructor(
    private productService: ProductService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getProductsList();
    this.modalListener();
  }

  private getProductsList(): void {
    this.tableData = [];
    this.productService.getAll().pipe(
      tap(
        data => {
          this.tableData = data.data.attributes;
          this.dataLength = this.tableData.length;
          this.temp = this.tableData;
          console.log(this.tableData);
        })
    )
      .subscribe();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.tableData = this.temp.filter(d => (
      (d.name.toLowerCase().indexOf(val) !== -1)
      || (d.price.toLowerCase().indexOf(val) !== -1)
      || (d.genre.toLowerCase().indexOf(val) !== -1)
    ));
  }

  openModal(formData?: any) {
    const initialState = {
      formData: formData ? formData : null,
      title: formData ? 'Edytuj' : 'Dodaj',
      formName: 'products'
    };
    this.modalRef = this.modalService.show(ModalComponent, { initialState });
  }

  private modalListener() {
    this.modalService.onHide
      .pipe()
      .subscribe(() => {
        this.getProductsList();
      });
  }

  public addToCart(productData: ProductModel) {
    this.cartService.addToCart(productData);
    this.toastr.info('New product has been added to cart.');
  }

  public delete(id: number) {
    this.productService.delete(id)
      .pipe(
        tap(
          data => {
            console.log('deleted', data);
            this.checkIfSuccess(data, dbOptions.DELETE);
            this.getProductsList();
          })
      )
      .subscribe();
  }

  checkIfSuccess(data, mode) {
    if (mode === dbOptions.ADD) {
      this.toastr.info('New product has been added.');
    } else if (mode === dbOptions.UPDATE) {
      this.toastr.info('The product data has been modified.');
    } else if (mode === dbOptions.DELETE) {
      this.toastr.info('The product data has been deleted.');
    }
  }

}
