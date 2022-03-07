import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RestApiService } from './rest-api.service';
 
import { MessageComponent } from './message/message.component'; 
import { DataService } from './data.service';
import { AuthGuardService } from './auth-guard.service';
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
import { ChatComponent } from './chat/chat.component';
import { UsernnameComponent } from './usernname/usernname.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { VerifierComponent } from './verifier/verifier.component';
import { SearchComponent } from './search/search.component';
import { ProduitAdminComponent } from './produit-admin/produit-admin.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    SettingsComponent,
  
    AddressComponent,
  
    CategoriesComponent,
  
    PostProductComponent,
  
    MyProductsComponent,
  
    CategoryComponent,
  
    ProductComponent,
  
    ChatComponent,
  
    UsernnameComponent,
  
    PhoneComponent,
  
    PhoneNumberComponent,
  
    VerifierComponent,
  
    SearchComponent,
  
    ProduitAdminComponent,
  
    ListUserComponent,
  
    ChartComponent,
  
   
 
  ],
  imports: [
    BrowserModule,
    
    NgbModule.forRoot(),
    FormsModule,
     
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    NgbDropdown,RestApiService,DataService,AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
