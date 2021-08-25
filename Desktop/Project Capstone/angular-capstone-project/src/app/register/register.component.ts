import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this._http.post('http://localhost:3000/users', this.user).subscribe(result => {
      console.log(result);
      alert('You are successfully registered.');
      this._router.navigate(['/login']);

    }, error => {
      console.log(error);
    })
  }

}
