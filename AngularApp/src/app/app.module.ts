// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { TopBarComponent } from './top-bar/top-bar.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ProductListComponent,
//     TopBarComponent
//   ],
//   imports: [
//     AppComponent,
//     BrowserModule,
//     AppRoutingModule,
//     ProductListComponent
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { ProductDetailsNewComponent } from './product-details-new/product-details-new.component';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { TestpageComponent } from './testpage/testpage.component';
import { AccountSellerComponent } from './account-seller/account-seller.component';
import { AccountBuyerComponent } from './account-buyer/account-buyer.component';
import { OpenStoreComponent } from './open-store/open-store.component';
import { CartComponent } from './cart/cart.component';
import { AccountBuyerOrdersComponent } from './account-buyer-orders/account-buyer-orders.component';
import { AccountSellerOrdersComponent } from './account-seller-orders/account-seller-orders.component';
import { AccountBuyerOrdersDetailsComponent } from './account-buyer-orders-details/account-buyer-orders-details.component';
import { AccountSellerOrdersDetailsComponent } from './account-seller-orders-details/account-seller-orders-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    TestpageComponent,
    AccountSellerComponent,
    AccountBuyerComponent,
    OpenStoreComponent,
    CartComponent,
    AccountBuyerOrdersComponent,
    AccountSellerOrdersComponent,
    AccountBuyerOrdersDetailsComponent,
    AccountSellerOrdersDetailsComponent,
    // ProductDetailsNewComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/