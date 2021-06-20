import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.user.username == 'admin' && this.user.password == 'admin') {
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('user', this.user.username);
      alert('You are logged in successfully...')
      this._router.navigate(['./home']);
    }else{
      alert('Enter correct details...');
    }
  }

}
