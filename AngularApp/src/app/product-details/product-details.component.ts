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
  console.log(this.id);
 
  // this.productService.getSpecificProduct(this.id).subscribe((res) => {
  //   this.productService.products = res as Product[];
  // })
  // console.log(this.productService.products.id);
    this.httpClient.get('http://localhost:3000/products/'+this.id)
    .subscribe(
      (data:Product) => {
        console.log(data);
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;   
    })
  }

  
}





 // this.product = this.productService.getSpecificProduct(this.id);
  // console.log("product "+this.product);

  

  // getSpecificProduct(_id: string) {
  //   return this.http.get(this.baseURL + `/${_id}`);
  // }


    // ngOnInit() {
    //   // this.route.paramMap.subscribe(params => {
    //   //   this.product = this.productService.getSpecificProduct();
    //   console.log('productID');
    //   this.route.paramMap.subscribe(params => {
    //     this.product = products[+params.get('productId')];
    //   // this.httpClient.get('http://localhost:3000/products/5ec2749d0de3b408ac7167f8')
    //   // .subscribe(
    //   //   (data:any[]) => {
    //   //     console.log(data);
    //   //     this.name = data[0].name;
    //   //     this.description = data[0].description;
    //   //     this.price = data[0].price;

    //   //   }
    //   // )
    // }



// constructor(public productService: ProductService) { }

// ngOnInit() {
//   this.refreshProductList();
// }

// refreshProductList() {
//   this.productService.getProductList().subscribe((res) => {
//     this.productService.products = res as Product[];
//   });
// }
// }