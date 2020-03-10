// task No 2 - Javascript

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  acctData = [
    {
      "acctNum":"AAA - 1234",
      "user" : "Alice"
    },
    {
      "acctNum":"AAA - 5231",
      "user" : "Bob"
    },
    {
      "acctNum":"AAA - 9921",
      "user" : "Alice"
    },
    {
      "acctNum":"AAA - 8191",
      "user" : "Alice"
    }
  ];

  balence = {
    "AAA - 1234" : 4593.22,
    "AAA - 9921" : 0,
    "AAA - 5231" : 232142.5,
    "AAA - 8191" : 4344
  };

  constructor(){
    this.getAccountNumbers(undefined,"balence");

  }

  getAccountNumbers(user?: string, sortBy?: string, sortDirection? : string ){
   const ordered = {};

  if(sortBy == "acctNum"){
    Object.keys(this.balence).sort().forEach((key) => {
    ordered[key] = this.balence[key];
    });
  }
  if(sortBy == "balence"){
     const values = Object.keys(this.balence).map(key => this.balence[key]);
     values.sort().forEach((key)=>{
       ordered[key] = this.balence[key];
     })

  }

console.log(JSON.stringify(ordered));
  }

}
