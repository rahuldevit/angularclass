import { Component } from '@angular/core';

@Component({
  selector: 'app-for-track-by',
  templateUrl: './for-track-by.component.html',
  styleUrls: ['./for-track-by.component.css']
})
export class ForTrackByComponent {
  public emps:any[] = [
    {empId:100,empName:"Rahul",salary:25000},
    {empId:101,empName:"Priya",salary:15000},
    {empId:102,empName:"Ratan",salary:8000}
  ];

  GetUpdatedData(){
    this.emps = [
      {empId:100,empName:"Rahul",salary:25000},
      {empId:101,empName:"Priya",salary:15000},
      {empId:102,empName:"Ratan",salary:8000},
      {empId:103,empName:"Vikas",salary:18000}
    ];
  }

  public TrackChanges(index:number){
    return index;
  }
  
}
