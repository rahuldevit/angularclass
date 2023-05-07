import { Component } from '@angular/core';

@Component({
  selector: 'app-if-demo',
  templateUrl: './if-demo.component.html',
  styleUrls: ['./if-demo.component.css']
})
export class IfDemoComponent {
  public product:any = {
    Name: 'Iphone 14',
    Price:79000,
    Image:'assets/iphone.jpg'
  }
  public preview:boolean = false;
}
