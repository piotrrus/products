import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { dbOptions } from '../../shared/enums/db-options.enum';
import { ProductModel } from '../../shared/models/product.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  public dataLength = 1;
  public tableData: any = [];

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) { }

  private getCartData() {
    this.tableData = this.cartService.cart;
    this.dataLength = this.tableData.length;
  }

  ngOnInit() {
    this.getCartData();
  }

  public clearCart() {
    this.cartService.clearAll();
    this.getCartData();
    this.toastr.info('All Cart content has been removed');
  }

}
