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

    console.log("a. filtered by Bob =>");
    console.log(this.getAccountNumbers("Bob"));

    console.log("b. filtered by Charlie =>");
    console.log(this.getAccountNumbers("Charlie"));

    console.log("c. sorted by acctNum =>");
    console.log(this.getAccountNumbers("","acctNum"));

    console.log("d. filtered by Alice; sorted by balance ascending");
    console.log(this.getAccountNumbers("Alice","balence","asc"));

  }

  getAccountNumbers(user?: string, sortBy?: string, sortDirection? : string ){

   let sortedArray=[];

   if(user){
     let filteredData = {};
     for(let i=0; i < this.acctData.length; i++){
       if(user == this.acctData[i].user){
        filteredData[this.acctData[i].acctNum] = this.balence[this.acctData[i].acctNum];
       }
     }
     return this.sortByBalence(filteredData, sortDirection);
     
   }

  if(sortBy == "acctNum"){
   sortedArray = Object.keys(this.balence).sort();
   if(sortDirection == "asc"){
     return sortedArray;
   }
   if(sortDirection == "desc"){
     return sortedArray.reverse();
   }
   return sortedArray;  
  }

  if(sortBy == "balence"){
  if(sortDirection == "asc")
     return this.sortByBalence(this.balence);
  else if(sortDirection == "desc")
     return this.sortByBalence(this.balence, "desc");
  else
     return  this.sortByBalence(this.balence);
  }
  }

  sortByBalence(data, sortDirection? : string){
       if(sortDirection == "desc")
        return Object.keys(data).sort((a,b)=> {return data[b]-data[a]});
        return Object.keys(data).sort((a,b)=> {return data[a]-data[b]});
  }

}
