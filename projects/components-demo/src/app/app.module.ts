import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { RegisterComponent } from './components/register/register.component';
import { NetflixHeaderComponent } from './components/netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './components/netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './components/netflix/netflix-register/netflix-register.component';
import { NetflixIndexComponent } from './components/netflix/netflix-index/netflix-index.component';
import { StudentResultComponent } from './components/student-result/student-result.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    LoginComponent,
    RegisterComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    NetflixIndexComponent,
    StudentResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StudentResultComponent]
})
export class AppModule { }
