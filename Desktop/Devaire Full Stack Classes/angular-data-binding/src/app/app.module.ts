import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class AppModule { }
