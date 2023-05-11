import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo',
  templateUrl: './ng-class-demo.component.html',
  styleUrls: ['./ng-class-demo.component.css']
})
export class NgClassDemoComponent {
  background:boolean = false;
  text:boolean = false;
  border:boolean = false;
}
