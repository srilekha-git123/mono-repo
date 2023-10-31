import { NgModule, isDevMode } from '@angular/core'; 
import { Store, StoreModule } from '@ngrx/store'; 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { employeeReducer } from './store/store.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffect } from './store/store.effect';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({employeeDetails : employeeReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([EmployeeEffect]),
    HttpClientModule
  ],
  providers:[Store],
  exports: []
})
export class SharedServiceModule { }
