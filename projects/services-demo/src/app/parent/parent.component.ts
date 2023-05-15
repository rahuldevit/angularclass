import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public msg:string = '';
  public students:any[] = [];

  public SendClick(){
    this.msg = "Hello from Parent";
    this.students = [
      {stdId:100,stdName:"Rahul"},
      {stdId:101,stdName:"Priya"},
      {stdId:102,stdName:"Vikas"},
      {stdId:103,stdName:"Kumar"},
      {stdId:104,stdName:"Ram"}
    ];
  }

  public msgFromChild:string = '';

  public GetMessageFromChild(e:any){
    this.msgFromChild = e;
  }
}
