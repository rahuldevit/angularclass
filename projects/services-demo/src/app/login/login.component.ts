import { Component, OnInit } from '@angular/core';
import { OtpService } from '../otp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public otp:string = '';

  //Injection
  constructor(private serv:OtpService){}

  ngOnInit(): void {
    this.otp = this.serv.GenerateOTO();
  }

  public NewOTP(){
    this.otp = this.serv.GenerateOTO();
  }

}
