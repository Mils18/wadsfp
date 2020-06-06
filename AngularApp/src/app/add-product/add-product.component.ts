import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

declare var M: any;

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductService]

})

export class AddProductComponent implements OnInit {

  constructor(public addProductService: ProductService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    
    this.addProductService.selectedProduct = {
      _id: "",
      ownedBy:"",
      name: "",
      description: "",
      price: null
    }
    M.toast({ html: 'Reset successfully', classes: 'rounded' });
  }

  onSubmit(form: NgForm) {
    console.log("Submit btn clicked");
    console.log(form.value);
    if (form.value._id == "") {
      M.toast({ html: 'Blank', classes: 'rounded' });
      this.addProductService.postProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
  }

}

