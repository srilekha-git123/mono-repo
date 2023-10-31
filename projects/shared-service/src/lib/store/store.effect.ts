import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, State, Store } from '@ngrx/store';
import { EMPTY, combineLatest, combineLatestAll, exhaustMap, forkJoin, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { SharedServiceService } from '..//shared-service.service';
import { CombinedDetailsFetchAPISuccess, employeeFetchAPISuccess, invokeCombinedDetailsAPI, invokeEmployeeAPI, invokeProjectAPI, projectFetchAPISuccess } from './store.action';
import {EmployeeState} from './store.state';

@Injectable()
export class EmployeeEffect {
    constructor(    
      private actions: Actions,
      private sharedService: SharedServiceService,
      private store:Store
    ) {}
   
        loadAllEmployeeDetails = createEffect(()=>
        this.actions.pipe(
            ofType(invokeEmployeeAPI),
            mergeMap(()=>{
                    return this.sharedService.getEmployeeDetails().pipe(
                        map((response:any)=>{
                            return employeeFetchAPISuccess({employeeDetails:response})
                        })
                    )
                })
        )   
        )

        loadAllProjectDetails = createEffect(()=>
        this.actions.pipe(
            ofType(invokeProjectAPI),
            mergeMap(()=>{
                    return this.sharedService.getProjectDetails().pipe(
                        map((response:any)=>{
                            return projectFetchAPISuccess({projectDetails:response})
                        })
                    )
                })
        )   
        )

        
        loadCombinedDetails = createEffect(()=>
        this.actions.pipe(
            ofType(invokeCombinedDetailsAPI),
            mergeMap(()=>{
                    return this.sharedService.getCombinedDetails().pipe(
                        map((response:any)=>{
                            return CombinedDetailsFetchAPISuccess({combinedDetails:response})
                        })
                    )
                })
        )   
        )
       
  }