
import {createAction, props} from '@ngrx/store';
import { Employeeinterface, Projectinterface, combinedDetails } from '../model.interface';

export const invokeEmployeeAPI = createAction(
    '[Employee API] Invoke Employee Fetch API'
);

export const employeeFetchAPISuccess = createAction(
    '[Employee API] Fetch API Success',
    props<{ employeeDetails: Employeeinterface[] }>()
);

export const invokeProjectAPI = createAction(
    '[Project API] Invoke Project Fetch API'
);

export const projectFetchAPISuccess = createAction(
    '[Project Details API] Fetch API Success',
    props<{ projectDetails: Projectinterface[] }>()
);

export const invokeCombinedDetailsAPI = createAction(
    '[Combined Details API] InvokeCombined Details API'
);

export const CombinedDetailsFetchAPISuccess = createAction(
    '[Combined Details API] Fetch Combined Details Success',
    props<{ combinedDetails: combinedDetails[] }>()
);

