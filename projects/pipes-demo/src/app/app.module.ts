import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { TitlePipe } from './title.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { NameTitlePipe } from './custom-pipe/nametitle.pipe';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomDirDirective } from './custom-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipesDemoComponent,
    TitlePipe,
    CustomPipeComponent,
    NameTitlePipe,
    CustomDirectiveComponent,
    CustomDirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CustomDirectiveComponent]
})
export class AppModule { }
