 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { FormsModule } from '@angular/forms';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchDirectiveBasicComponent } from './switch-directive-basic/switch-directive-basic.component';
import { SwitchProductsExampleComponent } from './switch-products-example/switch-products-example.component';
import { SimpleForExampleComponent } from './simple-for-example/simple-for-example.component';
import { NasaDataExampleComponent } from './nasa-data-example/nasa-data-example.component';
import { ForPropertiesComponent } from './for-properties/for-properties.component';
import { ForTrackByComponent } from './for-track-by/for-track-by.component';
import { NgClassDemoComponent } from './ng-class-demo/ng-class-demo.component';
import { NgStyleDemoComponent } from './ng-style-demo/ng-style-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDemoComponent,
    IfelseComponent,
    SwitchDirectiveBasicComponent,
    SwitchProductsExampleComponent,
    SimpleForExampleComponent,
    NasaDataExampleComponent,
    ForPropertiesComponent,
    ForTrackByComponent,
    NgClassDemoComponent,
    NgStyleDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NgStyleDemoComponent]
})
export class AppModule { }
