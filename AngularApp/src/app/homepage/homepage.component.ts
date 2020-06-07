import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

declare var M: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ProductService]
})
export class HomepageComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.refreshProductList();
  }

  refreshProductList() {
    this.productService.getProductList().subscribe((res) => {
      this.productService.products = res as Product[];
    });
  }
}

