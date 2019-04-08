import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleService } from './simple.service';
import { OtherService } from './other-service';
import { SimpleComponent } from './simple';



@NgModule({
  declarations: [
    AppComponent, SimpleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [OtherService, SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
