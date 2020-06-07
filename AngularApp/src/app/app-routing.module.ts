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

const routes: Routes = [
  // { path: '', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'account/buyer', component: AccountBuyerComponent, canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'manageProduct', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'manageProduct/addProduct', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'products/:prod_id', component: ProductDetailsComponent },
  { path: 'testPage', component: TestpageComponent , canActivate: [AuthGuard]},
  { path: 'account/seller', component: AccountSellerComponent , canActivate: [AuthGuard]},
  { path: 'account/seller/openStore', component: OpenStoreComponent , canActivate: [AuthGuard]},

  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }