import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent {
  public product:any = {
    Name: 'Iphone 14',
    Price:79000,
    Image:'assets/iphone.jpg',
    Description:"Iphone is a good mobile that is provide more security"
  }
  btnText = 'Description';
  toggle:boolean = true;
  ToggleButton(){
    this.toggle = (this.toggle == true) ? false : true; 
    this.btnText = (this.btnText == 'Description') ? 'Preview' : 'Description';
  }


  //flag:boolean = false ;
}
