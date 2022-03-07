import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostProductComponent } from './post-product/post-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

import { AuthGuardService } from './auth-guard.service';
import { ChatComponent } from './chat/chat.component';
import { UsernnameComponent } from './usernname/usernname.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { VerifierComponent } from './verifier/verifier.component';
import { SearchComponent } from './search/search.component';
import { ProduitAdminComponent } from './produit-admin/produit-admin.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:id',
    component: CategoryComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'productadmin',
    component:ProduitAdminComponent ,
  },
  {
    path: 'registre',
    component: RegistrationComponent,
   
  },
  {
    path: 'chart',
    component: ChartComponent,
   
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'listuser',
    component: ListUserComponent,
  
  },
  {
    path: 'search',
    component: SearchComponent,
   
  },
  {
    path: 'chat/:param1/:param2',
    component: ChatComponent,
    
  },
  {
    path: 'username',
    component: UsernnameComponent,
    
  },
  {
    path: 'phone',
    component: PhoneNumberComponent,
    
  },
  {
    path: 'verifier',
    component: VerifierComponent,
    
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/address',
    component: AddressComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/postproduct',
    component: PostProductComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/myproducts',
    component: MyProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
