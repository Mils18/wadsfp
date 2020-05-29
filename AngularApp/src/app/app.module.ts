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
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeComponent } from './employee/employee.component';
import { Product2Component } from './product2/product2.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { ProductDetailsNewComponent } from './product-details-new/product-details-new.component';

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
    AccountpageComponent,
    FooterComponent,
    HeaderComponent,
    CartpageComponent,
    ProductComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent,
    EmployeeComponent,
    Product2Component,
    ProductDetailsComponent,
    // ProductDetailsNewComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/