import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message: string = "User Management System";

  userObj: any = {
    name: "Foden", age: 20
  }
  isActive: boolean = true;

  projects: string[] = ['Dashboard', 'Admin Portal', 'Ecommerce', 'ERP Tally'];

  UserList: any = [
    {name: 'Rashford', age: 23},
    {name: 'King', age: 22},
    {name: 'Foden', age: 24},
    {name: 'Mings', age: 49},
    {name: 'Stones', age: 58}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
