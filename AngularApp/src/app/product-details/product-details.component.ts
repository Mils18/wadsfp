import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../_services';
import { User } from '../_models';
import { Cart } from '../shared/cart.model';
import { CartService } from '../shared/cart.service';
import { UserService } from '../shared/user.service';
import { first } from 'rxjs/operators';


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
  sellerId:string = '';
  user: User;
  cart: Cart;
  itsMyProduct= false;
  storeName: string='';

  // constructor(private httpClient:HttpClient) { }
  constructor( 
    private route: ActivatedRoute, 
    public productService: ProductService,
    public cartService: CartService,
    public userService: UserService,

    private httpClient:HttpClient,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.user = x);
    };

    ngOnInit() { 
      // Get id through URL
    this.id = this.route.snapshot.paramMap.get("prod_id");
    this.user = this.authenticationService.getLocalStorage();
    this.productService.getProductByID(this.id).subscribe((data:Product) => {
      this.name = data.name;
      this.description = data.description;
      this.price = data.price;   
      this.sellerId = data.sellerId;  
      if (this.sellerId == this.user.id){
        this.itsMyProduct = true;
      }
      });
  }

  addToCartBtn(){

    if (this.sellerId != this.user.id){
      var a = 
      '{"_id":"","name":"'+ this.name +
      '","price":'+ this.price + 
      ',"productId":"'+ this.id + 
      '","sellerId":"'+ this.sellerId + 
      '","buyerId":"'+ this.user.id+'" }';
      console.log(a);
      this.cart = JSON.parse(a);
      console.log("cart",this.cart);
      this.cartService.postCart(this.cart).subscribe((res) => {
        console.log(res);
      });
      alert:"Add to cart successful";
  }else{
    console.log("It's Your Product, Add to Cart failed");
  }
    
  }


  
}