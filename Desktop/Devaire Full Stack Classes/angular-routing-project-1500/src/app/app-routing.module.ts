import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeSupportComponent } from "./employee-support/employee-support.component";
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component";
import { EmployeesComponent } from "./employees/employees.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterComponent } from "./register/register.component";
import { SupportComponent } from "./support/support.component";
import { UserSupportComponent } from "./user-support/user-support.component";
import { UsersComponent } from "./users/users.component";


export const applictionRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component:AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'users', component: UsersComponent},
    { path: 'employees', component: EmployeesComponent},
    { path: 'employee-detail/:id', component: EmployeeDetailComponent },
    { path: 'employee-update/:id', component: EmployeeUpdateComponent},
    { path: 'employee-add', component: EmployeeAddComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { 
        path: 'support', component:     SupportComponent, children: [
            { path: '', redirectTo: 'user-support', pathMatch: 'full'},
            { path: 'user-support', component: UserSupportComponent},
            { path: 'employee-support', component: EmployeeSupportComponent}
       ]
    },
    { path: '**', component: PageNotFoundComponent}
]