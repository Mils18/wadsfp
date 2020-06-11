import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';

import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';
declare var M: any;

@Component({
  selector: 'app-account-seller-orders',
  templateUrl: './account-seller-orders.component.html',
  styleUrls: ['./account-seller-orders.component.css']
})
export class AccountSellerOrdersComponent implements OnInit {

  user:User;

  constructor(
    public orderService: OrderService,
    private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.user = x);
    }

  ngOnInit(): void {
    // this.refreshOrderList();
    this.user = this.authenticationService.getLocalStorage();
  }

  // refreshOrderList() {
  //   this.orderService.getOrderListStoreName(this.user.storeName).subscribe((res) => {
  //     this.orderService.orders = res as Order[];
  //   });
  // }

  orderDetails(_id: string) {
    this.router.navigate(['/account/seller/orders/', _id]);
  }
}

