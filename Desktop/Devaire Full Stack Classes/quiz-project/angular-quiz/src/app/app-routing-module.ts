import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { QuizQsComponent } from "./quiz-qs/quiz-qs.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./Services/auth.guard";
import { TakeTestComponent } from "./take-test/take-test.component";


export const applictionRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component:AboutComponent},
    { path: 'contact', component: ContactComponent},
   { path: 'take-test', component: TakeTestComponent, canActivate: [AuthGuard] },
   { path: 'quiz-qs', component: QuizQsComponent, canActivate: [AuthGuard] },
   { path: '', redirectTo: 'quiz-qs',pathMatch: 'full'},
{ path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent}
]