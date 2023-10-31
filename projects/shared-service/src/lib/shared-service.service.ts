import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employeeinterface} from './model.interface';
import {Projectinterface} from './model.interface';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }

  storedDetails: [] = [];

  getEmployeeDetails() {
    return this.http.get('http://localhost:3000/employeeDetials');
  }

  getProjectDetails() {
    return this.http.get('http://localhost:3000/projectDetials');
  }

  postEmployeeDetails(data :Employeeinterface){
    return this.http.post<Employeeinterface>('http://localhost:3000/employeeDetials', data);
  }

  postProjectDetails(data :Projectinterface){
    return this.http.post<Projectinterface>('http://localhost:3000/projectDetials', data);
  }
  
  postCombinedDetails(data:any){
    return this.http.post<any>('http://localhost:3000/allDetials', data);
  }

  getCombinedDetails(){
    return this.http.get('http://localhost:3000/allDetials');
  }
}
