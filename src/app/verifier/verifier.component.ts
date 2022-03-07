import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-verifier',
  templateUrl: './verifier.component.html',
  styleUrls: ['./verifier.component.scss']
})
export class VerifierComponent implements OnInit {

  code = '';
 

  constructor(
    private router: Router,
    private data: DataService,
    private rest: RestApiService,
  ) {}

  ngOnInit() {}

  validate() {
    return true;
  }

  async verif() {
   
    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/verif',
          {
            code: this.code,
          
          },
        );
       
          this.router.navigate(['/register'] );
          this.data.success('Registration successful!');
       
      }
    } catch (error) {
      this.data.error(error['message']);
    }

  }

}
