import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { QuizQsComponent } from './quiz-qs/quiz-qs.component';
import { BackgroundDirective } from './background.directive';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { applictionRoutes } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { AuthGuard } from './Services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    QuizQsComponent,
    BackgroundDirective,
    MainComponent,
    HomeComponent,
    TakeTestComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applictionRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [MainComponent]
})
export class AppModule { }
