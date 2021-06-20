import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../Services/auth.guard';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private _authGuad: AuthGuard) { }

  ngOnInit(): void {
    if (this._authGuad.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout() {
    this._authGuad.logout();
  }

}
