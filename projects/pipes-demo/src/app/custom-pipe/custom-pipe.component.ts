import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {
  public emps:any[] = [
    {empId:101,empName:"Srikanth",gender:"Male"},
    {empId:102,empName:"Scott",gender:"Male"},
    {empId:103,empName:"Haritha",gender:"Female"},
    {empId:104,empName:"Jhon",gender:"Male"},
    {empId:105,empName:"Swathi",gender:"Female"},
    {empId:106,empName:"Kruthika",gender:"Female"},
    {empId:107,empName:"Bhanu",gender:"Male"}
  ];

}
