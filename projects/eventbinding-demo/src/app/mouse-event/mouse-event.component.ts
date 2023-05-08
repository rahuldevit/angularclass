import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent {

  public styleObject:{position:string,left:string,top:string} = {
    position:'',
    left:'',
    top:''
  }

  public imageUrl:string = 'assets/blackshoes.jpg';

  SetColor(colorName:string){
    switch(colorName){
      case 'black':
        this.imageUrl = 'assets/blackshoes.jpg';
        break;
      case 'red':
        this.imageUrl = 'assets/redshoe.jpg';
        break;
      case 'white':
        this.imageUrl = 'assets/whiteshoes.jpg';
        break;
    }
  }

  MouseMove(e:any){
    this.styleObject={
      position:'fixed',
      left:e.clientX + "px",
      top:e.clientY+"px"
    }
  }
}