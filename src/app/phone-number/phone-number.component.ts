import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {

  

  number = '';
 

  constructor(
    private router: Router,
    private data: DataService,
    private rest: RestApiService,
  ) {}

  ngOnInit() {}

 

  async send() {
   
    try {
    
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/send',
          {
            phonenumber: this.number,
          
          },
          
        );console.log("data",data);
        if (data['success']) {
          this.router.navigate(['/verifier'] );
          this.data.success('Registration successful!');}
       
         
        else{
       console.log("tessssssst")
          this.data.error('Account with that number is already exist ');
      }
    } catch (error) {
      console.log("ssssssssss")
      this.data.error(error['message']);
    }

  }

}
