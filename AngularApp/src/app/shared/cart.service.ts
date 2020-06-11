import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedCart: Cart;
  carts: Cart[];
  readonly baseURL = 'http://3.1.83.74:3000/carts';

  constructor(private http: HttpClient) { }

  postCart(cart: Cart) {
    return this.http.post(this.baseURL, cart);
  }

  getCartListBuyerId(buyerId : string) {
    return this.http.get(this.baseURL+ '/buyerId'+`/${buyerId}`);
  }
  
  deleteCart(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  deleteCartBuyerId(buyerId : string) {
    return this.http.delete(this.baseURL + '/deleteCartBuyerId'+`/${buyerId}`);
  }

}
