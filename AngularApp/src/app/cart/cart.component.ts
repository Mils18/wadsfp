import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { CartService } from '../shared/cart.service';
import { Router } from '@angular/router';
import { User } from '../_models';
import { Cart } from '../shared/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]

})
export class CartComponent implements OnInit {
  user:User;
  totalPrice = 0;

  constructor(
    public cartService: CartService,
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
      console.log(this.totalPrice);
      });

    }
    onDelete(_id: string) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.cartService.deleteCart(_id).subscribe((res) => {
          this.refreshCartList();
        });
      }
    }

}