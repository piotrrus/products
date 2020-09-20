import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ProductService } from '../../shared/services/product.service';

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
    private modalService: BsModalService
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

  public addToCart(id: number) {
    console.log(id);
  }

  public delete(id: number) {
    this.productService.delete(id)
      .pipe(
        tap(
          data => {
            // this.checkIfSuccess(data, dbOptions.UPDATE);
          })
      )
      .subscribe();
  }

  checkIfSuccess(data, mode) {
    // if (mode === dbOptions.ADD) {
    //   console.log('added', mode);
    // } else if (mode === dbOptions.UPDATE) {
    //   console.log('updated', mode);
    // }
  }

}
