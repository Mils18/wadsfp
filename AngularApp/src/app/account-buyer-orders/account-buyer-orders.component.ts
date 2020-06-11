import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';

import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';
declare var M: any;


@Component({
  selector: 'app-account-buyer-orders',
  templateUrl: './account-buyer-orders.component.html',
  styleUrls: ['./account-buyer-orders.component.css']
})
export class AccountBuyerOrdersComponent implements OnInit {

  user:User;

  constructor(
    public orderService: OrderService,
    private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.user = x);
    }

  ngOnInit(): void {
    this.refreshOrderList();
    this.user = this.authenticationService.getLocalStorage();
  }

  refreshOrderList() {
    this.orderService.getOrderListBuyerId(this.user.id).subscribe((res) => {
      this.orderService.orders = res as Order[];
    });
  }

  orderDetails(_id: string) {
    this.router.navigate(['/account/buyer/orders/', _id]);
  }
}

