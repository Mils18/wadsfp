import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AuthenticationService } from '../_services';
import { User } from '../_models';
@Component({
  selector: 'app-account-seller',
  templateUrl: './account-seller.component.html',
  styleUrls: ['./account-seller.component.css']
})
export class AccountSellerComponent implements OnInit {

  // currentUser: User;
  loading = false;
  doHaveStore = false;
  user:User;
  storeName:string='';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.user = x);
    }

  ngOnInit(): void {
    console.log("testtest1");
    this.user = this.authenticationService.getLocalStorage();
    this.storeName = this.user.storeName;
    // this.doHaveStore = false;
    console.log("Storename",this.user.storeName);
    
    if (this.user.storeName != ""){
      this.doHaveStore = true;
    }

  }
  manageProduct(){
    this.router.navigate(['/manageProduct']);
  }
  goToBuyerPage(){
    this.router.navigate(['/account/buyer']);
  }

  openStore(){
    this.router.navigate(['/account/seller/openStore']);
  }
  myOrder() {
    this.router.navigate(['/account/seller/orders']);
  }
}
