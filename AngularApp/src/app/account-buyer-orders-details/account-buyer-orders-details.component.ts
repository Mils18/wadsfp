import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
import { CartService } from '../shared/cart.service';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-account-buyer-orders-details',
  templateUrl: './account-buyer-orders-details.component.html',
  styleUrls: ['./account-buyer-orders-details.component.css'],
  providers: [OrderService]
})

export class AccountBuyerOrdersDetailsComponent implements OnInit {
  user:User;
  order_id:string='';
  status:string='';
  totalPrice:number;

  constructor( 
    private route: ActivatedRoute, 
    public orderService: OrderService,
    public cartService: CartService,
    private httpClient:HttpClient,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.user = x);
    };

    ngOnInit() : void{ 
      // Get id through URL
    this.user = this.authenticationService.getLocalStorage();
    this.order_id = this.route.snapshot.paramMap.get("order_id");
    this.refreshOrderDetailsList();
    }

    refreshOrderDetailsList() {
      this.orderService.getOrderById(this.order_id).subscribe((data:Order) => {
        this.status = data.status;
        this.totalPrice = data.totalPrice;
        this.cartService.carts = data.carts;
        console.log(this.cartService.carts);
      });
    }

}
