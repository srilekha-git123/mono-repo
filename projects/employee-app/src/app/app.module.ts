import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeedetailsComponent } from './employee-details/employee-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedServiceModule} from 'projects/shared-service/src/lib/shared-service.module';
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedServiceModule
    ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
