import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any ={
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.user.username == 'admin' && this.user.password == 'admin') {
      alert('You are logged in successfully...')
    }else{
      alert('Enter correct details...');
    }
  }

}
