import { createReducer, on } from '@ngrx/store';
import { EmployeeState } from './store.state';
import { CombinedDetailsFetchAPISuccess, employeeFetchAPISuccess,projectFetchAPISuccess  } from './store.action';

export const employeeReducer = createReducer(EmployeeState,

    on(employeeFetchAPISuccess, (state, action) => {
      return {
        ...state,
        employeedata :[...action.employeeDetails]
      }
    }),

    on(projectFetchAPISuccess, (state, action) => {
        return {
          ...state,
          projectdata :[...action.projectDetails]
        }
      }),

      on(CombinedDetailsFetchAPISuccess, (state, action) => {
        return {
          ...state,
          combinedDetails :[...action.combinedDetails]
        }
      }),
);

