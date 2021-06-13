import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custObj: any = {
    CustomerCode: 1001,
    CustomerName: 'Papama',
    CustomerAmount: 12000
  }

  userObj: any = {
    username: "",
    password: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
   if(this.userObj.username == "admin" && this.userObj.password == 'admin'){
     alert('You are successfully logged in')
   }else {
     alert('invalid credentials please try agin')
   }
  }

}
