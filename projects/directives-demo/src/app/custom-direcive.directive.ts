import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirecive]'
})
export class CustomDireciveDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.border="2px solid blue";
    el.nativeElement.style.color="black";
    el.nativeElement.style.background="yellow"; 
   }

}
