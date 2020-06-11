import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  selectedOrder: Order;
  orders: Order[];
  readonly baseURL = 'http://3.1.83.74:3000/orders';

  constructor(private http: HttpClient) { }

  addOrder(order: Order) {
    return this.http.post(this.baseURL, order);
  }

  getOrderListBuyerId(buyerId : string) {
    return this.http.get(this.baseURL+ '/buyerId'+`/${buyerId}`);
  }
  // getOrderListSeller(usr : User) {
  //   // return this.http.get(this.baseURL+ '/seller',usr);
  // }
  deleteOrder(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  getOrderById(_id: string){
    return this.http.get(this.baseURL + `/${_id}`);
  }

}
