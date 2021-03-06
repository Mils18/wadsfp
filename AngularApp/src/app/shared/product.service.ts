// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import {Observable,of, from } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  readonly baseURL = 'http://3.1.83.74:3000/products';
  // readonly baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  postProduct(emp: Product) {
    return this.http.post(this.baseURL, emp);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }

  getProductListSellerId(sellerId : string) {
    return this.http.get(this.baseURL+ '/sellerId'+`/${sellerId}`);
  }
  
  getProductByID(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putProduct(emp: Product) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  putProductTest(id: string){
    return this.http.put(this.baseURL + `/${id}`,"abcde");
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
