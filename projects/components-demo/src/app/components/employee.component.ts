import { Component } from "@angular/core";

@Component({
    selector:'app-employee',
    template:`
        <h1>Welcome to Angular Component</h1>
        <hr>
        <dl>

            <dt>EmpId</dt>
            <dd>{{empId}}</dd>
            <dt>EmpName</dt>
            <dd>{{empName}}</dd>
            <dt>Salary</dt>
            <dd>{{empSalary}}</dd>

        </dl>    
    `,
    styles:["h1{color:green;text-align:center;}"]

})


export class EmployeeComponent{
    empId:number = 100;
    empName:string = "Rahul";
    empSalary:number = 16000;
}