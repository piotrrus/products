import { Injectable } from '@angular/core';
import { StorageService } from '../../shared/services/local-storage.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart = new BehaviorSubject<any>(undefined);

  constructor(
    private storageService: StorageService
  ) { }

  public getCart(): Observable<any> {
    return this._cart.asObservable();
  }

  public addToCart(data) {
    this.storageService.setLocalStorage('new position', data);
  }

  public clearCart(data) {
  }

}
