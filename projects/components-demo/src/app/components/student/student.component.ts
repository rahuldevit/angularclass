import { Component } from "@angular/core";

@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
})

export class StudentComponent{
    studentId:number = 101;
    studentName:string = "Rahul Gupta";
    subject:string = "Angular";
}