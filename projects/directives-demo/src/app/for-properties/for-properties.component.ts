import { Component } from '@angular/core';
import { Products } from '../fakestorecontract';

@Component({
  selector: 'app-for-properties',
  templateUrl: './for-properties.component.html',
  styleUrls: ['./for-properties.component.css']
})
export class ForPropertiesComponent {
   public products:Products[] = [];
   constructor(){}

   //It will excute when the compenent is called (life cycle Hook)
   ngOnInit(){
     fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     .then(data => {
      this.products = data;
     })
   }

}
