import { Component, OnInit,ViewChild  } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  title = 'Ng7ChartJs By DotNet Techy';
  LineChart=[];
  BarChart=[];
  PieChart=[];
  users:any=[]
  products:any=[]
  tab: any[]=[]
  tab1: any[]=[]
  tab2: any[]=[]
  constructor(private data: DataService, private rest: RestApiService, private router:Router) { }

  async ngOnInit() {

    try {
      const data = await this.rest.get('http://localhost:3030/api/accounts/userlist');
     
         this.users = data['users']
       
        console.log("data",this.users)
    } catch (error) {
      this.data.error(error['message']);
    }
    console.log("users",this.users)
    for (let i = 0; i < this.users.length; i++) {
      this.tab.push(this.users[i]);
    }
  /***************************** */
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
      
          for (let j = 0; j < this.products.length; j++) {
      

           
            this.tab1.push(this.products[j].owner);
          
  
          
          }
    let array=this.tab1.map(o=>o._id)
    let array0=this.tab1.map(o=>o.name)
    let set0=new Set( array0)
    let araySet0=[...set0]
          let set=new Set( array)
          let araySet=[...set]
          araySet.map(owner=>{
          const pr=  this.products.filter(p=>p.owner._id==owner)
          this.tab2.push(pr)
          })
          
      //    console.log("set",set)
//let  array1=this.products.filter()
let tab4=this.tab2.map(el=>el.length)
/*console.log("tab",this.tab)
console.log("tab1",this.tab1)
console.log("tab2",this.tab2)
console.log("lll",this.tab1.length)*/

this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels:araySet0,
 datasets: [{
     label: '# welcom',
     data: tab4,
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

  }
  async navigate0(){
     
    await this.router.navigate(['/productadmin'])
   }
   async navigate1()
   {
    await this.router.navigate(['/listuser'])

   }

}
