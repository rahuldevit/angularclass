import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
  public name:string = "Rahul Gupta software engineer";
  public price:number = 15425.55;
  public mfg:Date = new Date("2023-04-28");
  public rate:number = 0.544;
  public product:{name:string,price:number} = {
    name:"Iphone14",
    price:75000
  };
  public msg:string='Welcome to my programming world'
  public courses:string[] = ["Java","Sql","Angular"]

  public products:{Name:string,ShippedTo:string}[] = [
  {Name:'Nokia',ShippedTo:'Delhi'},
  {Name:'Samsung',ShippedTo:'Punjab'},
  {Name:'Iphone',ShippedTo:'Hyd'}
  ];

  public status:any = {
    'Delhi':'Delivery in two working days',
    'Punjab':'Delivery in 4 working days',
    'Hyd':'Same day delivery'
  };
}
