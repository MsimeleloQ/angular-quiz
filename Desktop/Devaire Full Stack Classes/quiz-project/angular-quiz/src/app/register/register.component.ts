import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.Service';
import { User } from '../Services/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
   
  }

  register(){
    this._userService.registerUser(this.user).subscribe(result => {
      console.log(result);
      console.log('User Added successfully...!!');
      this._router.navigate(['./home'])
    }, (error) => {
      console.log('There was an error: ' + error);
    })
  }

}
