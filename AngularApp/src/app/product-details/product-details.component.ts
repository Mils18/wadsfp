import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { HttpClient } from '@angular/common/http';

// import { products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {
  id:string='';
  name:string = '';
  description:string = '';
  price:number;

  product;
  // constructor(private httpClient:HttpClient) { }
  constructor( 
    private route: ActivatedRoute, 
    public productService: ProductService,
    private httpClient:HttpClient) { }

  ngOnInit() { 
  this.id = this.route.snapshot.paramMap.get("prod_id");

  this.httpClient.get('http://localhost:3000/products/'+this.id)
  .subscribe(
    (data:Product) => {
      this.name = data.name;
      this.description = data.description;
      this.price = data.price;   
  })
}

  
}