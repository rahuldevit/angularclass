import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseEventComponent } from './mouse-event/mouse-event.component';
import { KeyEventComponent } from './key-event/key-event.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseEventComponent,
    KeyEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [KeyEventComponent]
})
export class AppModule { }
