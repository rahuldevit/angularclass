import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public msgFromParent:string = '';
  @Input() public studentObj:any[] = [];

  @Output() public childClick:EventEmitter<string> = new EventEmitter<string>();

  public ChildButtonClick(){
    this.childClick.emit('Hello ! from child')
  }
}
