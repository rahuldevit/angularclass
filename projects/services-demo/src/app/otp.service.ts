import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor() { }

  public GenerateOTO():string{
    var a = Math.random() * 10;
    var b = Math.random() * 10;
    var c = Math.random() * 10;
    var d = Math.random() * 10;
    var otp = `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)}`
    return otp;
  }
}
