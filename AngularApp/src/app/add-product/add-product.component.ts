import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductService]

})

export class AddProductComponent implements OnInit {

user:User;

constructor(
  public addProductService: ProductService,
  private router: Router,
  private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.user = x);
  }

ngOnInit(): void {
  this.resetForm();
  this.user = this.authenticationService.getLocalStorage();
}

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    
    this.addProductService.selectedProduct = {
      _id: "",
      sellerId:"",
      name: "",
      description: "",
      price: null
    }
  }

  onSubmit(form: NgForm) {
    form.controls['sellerId'].setValue(this.user.id);

    if (form.value._id == "") {
      this.addProductService.postProduct(form.value).subscribe((res) => {
        this.resetForm(form);
      });
    }
    this.router.navigate(['/manageProduct']);
  }
}

