import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-account-buyer',
  templateUrl: './account-buyer.component.html',
  styleUrls: ['./account-buyer.component.css']
})
export class AccountBuyerComponent implements OnInit {

  currentUser: User;
  loading = false;
  user:User;
  id:string='';
  firstName:string='';
  lastName:string='';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit(): void {
    this.user = this.authenticationService.getLocalStorage();
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
  }
  myOrder() {
    this.router.navigate(['/account/buyer/orders']);
  }
  accountSeller() {
    this.router.navigate(['/account/seller']);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}