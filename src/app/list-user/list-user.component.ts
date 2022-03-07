import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
users:any
  constructor(private data: DataService, private rest: RestApiService,    private router: Router) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get('http://localhost:3030/api/accounts/userlist');
     
         this.users = data['users']
       
        console.log("data",this.users)
    } catch (error) {
      this.data.error(error['message']);
    }
    console.log("users",this.users)
  }

  async removeuser(  user: any) {
    console.log("product",user.name)
    try {
     const data = await this.rest.delete(
       'http://localhost:3030/api/accounts/delete',
       {
         body: {name:user.name}
       
       }
     
     );  
     data['success']
       ? (this.users = data['products'])
       : this.data.error(data['message']);
   } catch (error) {
     this.data.error(error['message']);
   }
   }

   async navigate0(){
     
    await this.router.navigate(['/productadmin'])
   }
   async navigate1()
   {
    await this.router.navigate(['/chart'])

   }
   


}
