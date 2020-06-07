import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';
declare var M: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  user:User;

  constructor(
    public productService: ProductService,
    private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.user = x);
    }

  ngOnInit(): void {
    this.refreshProductList();
    this.user = this.authenticationService.getLocalStorage();
  }

  refreshProductList() {
    this.productService.getProductListSellerId(this.user.id).subscribe((res) => {
      this.productService.products = res as Product[];
    });
  }

  onEdit(emp: Product) {
    this.productService.putProductTest("5ec275570de3b408ac7167f9").subscribe((res) => {
      this.refreshProductList();
      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productService.deleteProduct(_id).subscribe((res) => {
        this.refreshProductList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}

