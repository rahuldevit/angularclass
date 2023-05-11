import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
  templateUrl: './ng-style-demo.component.html',
  styleUrls: ['./ng-style-demo.component.css']
})
export class NgStyleDemoComponent {
  public bgStyle:string = 'red';
  public textStyle:string = 'white';
  public padding:string = "0";
  public fontSize:string = "0";

  public styleObj:{
    'background-color':string,
    'color':string,
    'padding':string,
    'font-size':string
  } = {
    "background-color":"black",
    "color":"red",
    "padding":this.padding+"px",
    "font-size":this.fontSize+"px"
  }

  ApplyStyles(){
    this.styleObj = {
       "background-color":this.bgStyle,
       "color":this.textStyle,
       "font-size":this.fontSize+"px",
       "padding":this.padding+"px"
    }
  }

  FontChange(){
    this.styleObj = {
      "background-color":this.bgStyle,
      "color":this.textStyle,
      "font-size":this.fontSize+"px",
      "padding":this.padding+"px"
   }
  }

  SubmitClick(e:any){
    document.write(`
      Button ID: ${e.target.id},
      Button Name: ${e.target.name},
      Button Class: ${e.target.className},
      X-Position: ${e.clientX},
      ctrl Key: ${e.ctrlKey}
      `);
  }

  Delete(e:any){
    if(e.target.id=='x'){

    }else if(e.target.id=="y"){

    }else if(e.target.id=='z'){
      
    }
  }

} 
