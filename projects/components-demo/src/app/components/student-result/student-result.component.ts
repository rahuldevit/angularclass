import { Component } from '@angular/core';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent {
     
  public stdId:number = 101;
  public stdName:string = "Rahul Gupta"
  public sub1:number = 68;
  public sub2:number = 75;
  public sub3:number = 88;

  public marks:number = this.sub1+this.sub2+this.sub3;
  public avg:number = this.marks/3;
  public result:string = this.calResult(this.avg);

  public calResult(avg:number):string{
    if(avg > 35){
      return "Pass";
    }else{
      return "Fail";
    }
  }
}
