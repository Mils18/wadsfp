import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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

const routes: Routes = [
  // { path: '', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'account', component: AccountpageComponent },
  { path: 'cart', component: CartpageComponent },
  { path: 'manageProduct', component: ProductComponent },
  { path: 'manageProduct/addProduct', component: AddProductComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'product2', component: Product2Component},
  { path: 'products/:prod_id', component: ProductDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }