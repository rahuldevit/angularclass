import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-products-example',
  templateUrl: './switch-products-example.component.html',
  styleUrls: ['./switch-products-example.component.css']
})
export class SwitchProductsExampleComponent {
   public product = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    
    "rating": {
    "rate": 3.9,
    "count": 120
    }};
    Template:string = "basic";
    ChangeTemplate(e:any){
      this.Template = e.target.name;
      console.log(this.Template);
    }
}
