import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any;

//  Injected HttpClient Dependency in Constructor
  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(result => {
      this.userList = result;
      console.log(this.userList);
    }, (error) => { console.log('There is some error: ' + error); })
    // this._httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(result => {
    //   this.userList = result;
    //    console.log(this.userList);
    //   }, (error) => { console.log('There is some error: ' + error); })
  }

}
