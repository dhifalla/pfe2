import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-produit-admin',
  templateUrl: './produit-admin.component.html',
  styleUrls: ['./produit-admin.component.scss']
})
export class ProduitAdminComponent implements OnInit {

  products: any;
 

  constructor(private data: DataService, private rest: RestApiService ,private http: HttpClient,private router: Router) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:3030/api/products'
      );
      data['success']
        ? (this.products = data['products'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  async removeProduct(  product: any) {
 console.log("product",product.title)
 try {
  const data = await this.rest.delete(
    'http://localhost:3030/api/seller/products',
    {
      body: {title:product.title}
    
    }
  
  );  
  data['success']
    ? (this.products = data['products'])
    : this.data.error(data['message']);
} catch (error) {
  this.data.error(error['message']);
}
}

async navigate0(){
     
  await this.router.navigate(['/listuser'])
 }
 async navigate1()
 {
  await this.router.navigate(['/chart'])

 }
 
}
