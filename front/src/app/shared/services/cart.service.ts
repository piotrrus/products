import { Injectable } from '@angular/core';
// import { StorageService } from '../../shared/services/local-storage.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProductModel } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: ProductModel[] = [];

  constructor(
  ) { }

  public addToCart(productData: ProductModel) {
    const newProduct = new ProductModel();
    newProduct.id = productData.id;
    newProduct.id_genre = productData.id_genre;
    newProduct.name = productData.name;
    newProduct.price = productData.price;
    this.cart.push(newProduct);
    console.log(this.cart);
  }

  public clearAll() {
    this.cart = [];
  }

  public delete(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
  }

}
