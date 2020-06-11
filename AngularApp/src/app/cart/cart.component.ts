import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { CartService } from '../shared/cart.service';
import { Router } from '@angular/router';
import { User } from '../_models';
import { Cart } from '../shared/cart.model';

import { Order } from '../shared/order.model';
import { OrderService } from '../shared/order.service';

declare var M: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]

})
export class CartComponent implements OnInit {
  user:User;
  totalPrice: number = 0;
  order: Order;

  constructor(
    public cartService: CartService,
    public orderService: OrderService,
    private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.user = x);
    }

    ngOnInit(): void {
      this.user = this.authenticationService.getLocalStorage();
      this.refreshCartList();
    }

    refreshCartList() {
      this.cartService.getCartListBuyerId(this.user.id).subscribe((res) => {
        this.cartService.carts = res as Cart[];
        this.totalPrice = 0;
      for (var i = 0; i < this.cartService.carts.length; i++) {
            this.totalPrice = this.totalPrice + this.cartService.carts[i].price;
            }
      console.log("carts",this.cartService.carts);
      });

    }
    onDelete(_id: string) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.cartService.deleteCart(_id).subscribe((res) => {
          this.refreshCartList();
        });
      }
    }
    removeCart(){
      for (var i = 0; i < this.cartService.carts.length; i++) {
        console.log(this.cartService.carts[i]._id);
        this.cartService.deleteCart(this.cartService.carts[i]._id).subscribe((res) => {
          console.log("delete id",[i],this.cartService.carts[i]._id);
        });
      }
    }
    checkOutBtn(){
      // Cart exists validation
      if (this.cartService.carts.length != 0){
        // set an order object
        this.order = {
          "_id":"",
          "status":"paid",
          "totalPrice": this.totalPrice,
          "carts": this.cartService.carts
        };
        
        // send it to backend, then add order
        this.orderService.addOrder(this.order).subscribe((res) => {
          console.log(res);
          M.toast({ html: 'Order has been placed' });
          // remove products in cart if order has been placed
          this.removeCart();
        });
      }
      else{
        console.log("cart is empty");
      }
      
    }

}