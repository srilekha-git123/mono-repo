import { createFeatureSelector, createSelector } from '@ngrx/store';
import { allDetails } from '../model.interface';
import {EmployeeState} from './store.state';

const selectFeature = createFeatureSelector<typeof EmployeeState>('employeeDetails')
export const getemployeelist=createSelector(selectFeature,(state)=>state.employeeData);
export const getprojectlist=createSelector(selectFeature,(state)=>state.projectData);

