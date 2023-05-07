import { Component } from '@angular/core';

@Component({
  selector: 'app-nasa-data-example',
  templateUrl: './nasa-data-example.component.html',
  styleUrls: ['./nasa-data-example.component.css']
})
export class NasaDataExampleComponent {
  marsObject:any = [];
  GetMarsPhotos(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data =>{
      this.marsObject = data;
    })
  }
}