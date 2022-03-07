import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  products: any;

  constructor(private data: DataService, private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:3030/api/seller/products'
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

}
