import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';


import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TestpageComponent } from './testpage/testpage.component';
import { AccountSellerComponent } from './account-seller/account-seller.component';
import { AccountBuyerComponent } from './account-buyer/account-buyer.component';
import { OpenStoreComponent } from './open-store/open-store.component';
import { CartComponent } from './cart/cart.component';
import { AccountBuyerOrdersComponent } from './account-buyer-orders/account-buyer-orders.component';
import { AccountSellerOrdersComponent } from './account-seller-orders/account-seller-orders.component';
import { AccountBuyerOrdersDetailsComponent } from './account-buyer-orders-details/account-buyer-orders-details.component';
import { AccountSellerOrdersDetailsComponent } from './account-seller-orders-details/account-seller-orders-details.component';

const routes: Routes = [
  // { path: '', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'account/buyer', component: AccountBuyerComponent, canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'manageProduct', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'manageProduct/addProduct', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'products/:prod_id', component: ProductDetailsComponent , canActivate: [AuthGuard] },
  { path: 'testPage', component: TestpageComponent , canActivate: [AuthGuard]},
  { path: 'account/seller', component: AccountSellerComponent , canActivate: [AuthGuard]},
  { path: 'account/seller/openStore', component: OpenStoreComponent , canActivate: [AuthGuard]},
  { path: 'account/buyer/orders', component: AccountBuyerOrdersComponent , canActivate: [AuthGuard]},
  { path: 'account/seller/orders', component: AccountSellerOrdersComponent , canActivate: [AuthGuard]},
  { path: 'account/buyer/orders/:order_id', component: AccountBuyerOrdersDetailsComponent , canActivate: [AuthGuard]},
  { path: 'account/seller/orders/:order_id', component: AccountSellerOrdersDetailsComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }