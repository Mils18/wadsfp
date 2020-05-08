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

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartpageComponent } from './cartpage/cartpage.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'home', component: HomepageComponent },
      { path: 'account', component: AccountpageComponent },
      { path: 'cart', component: CartpageComponent },

    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    HomepageComponent,
    AccountpageComponent,
    FooterComponent,
    HeaderComponent,
    CartpageComponent,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/