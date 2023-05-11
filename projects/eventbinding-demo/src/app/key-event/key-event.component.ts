import { Component } from '@angular/core';

@Component({
  selector: 'app-key-event',
  templateUrl: './key-event.component.html',
  styleUrls: ['./key-event.component.css']
})
export class KeyEventComponent {
  public users:any[] = [
    {UserName:'Sri'},
    {UserName:'Srikanth'},
    {UserName:'Sri7989'},
    {UserName:'Sri_NIT'},
    {UserName:'Raju'},
  ];
  public UserError:string='';
  public isInvalid:boolean = false;
  public isPwdWarnVisible:boolean = false;
  VerifyUser(e:any){
    let user = e.target.value;
    for(var u of this.users){
      if(u.UserName == user){
        this.UserError = "Username already taken. try another";
        this.isInvalid = true;
        break;
      }else{
        this.UserError='Username available';
        this.isInvalid = false;
      }
    }
  }
  VerifyPassword(e:any){
    if(e.keyCode >= 65 && e.keyCode <= 90){
      this.isPwdWarnVisible = true;
    }
    else{
      this.isPwdWarnVisible = false;
    }
  }
}

