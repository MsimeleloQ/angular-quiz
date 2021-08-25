import { Router } from '@angular/router';
import { AuthoGuardService } from './../services/autho-guard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authoGuardService: AuthoGuardService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginStatus() {
    if (this._authoGuardService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this._authoGuardService.logout();
    alert('You are logged out successfully.');
    this._router.navigate(['/home']);
  }

}
