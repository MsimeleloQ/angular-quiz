import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { applictionRoutes } from './app-routing.module';
import { SupportComponent } from './support/support.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserSupportComponent } from './user-support/user-support.component';
import { EmployeeSupportComponent } from './employee-support/employee-support.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeService } from './services/employee.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SupportComponent,
    UsersComponent,
    PageNotFoundComponent,
    UserSupportComponent,
    EmployeeSupportComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    UpdateEmployeeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applictionRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
