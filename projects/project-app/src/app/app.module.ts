import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectModule} from './project/project.module';
import { SharedServiceModule } from 'projects/shared-service/src/lib/shared-service.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    SharedServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
