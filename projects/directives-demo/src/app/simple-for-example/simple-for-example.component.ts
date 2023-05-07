import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-for-example',
  templateUrl: './simple-for-example.component.html',
  styleUrls: ['./simple-for-example.component.css']
})
export class SimpleForExampleComponent {
  public courses = ["C#.Net","C++","Angular","Java"];
  public productList = [
    {category:"Electronics",products:["TV","Mobiles","Laptops"]},
    {category:"MensFashion",products:["T-Shirts","Jeans","Jackets"]},
    {category:"Footware",products:["Nike","Adidas","Puma"]}
  ];
  public employees =[
    {"empId":100,"empName":"Rahul","empSalary":15000},
    {"empId":101,"empName":"Ram","empSalary":16000},
    {"empId":102,"empName":"Raju","empSalary":10000},
    {"empId":103,"empName":"Madhu","empSalary":12000},
    {"empId":104,"empName":"Priya","empSalary":8000},
    {"empId":105,"empName":"Kiran","empSalary":5000}
  ];
}
