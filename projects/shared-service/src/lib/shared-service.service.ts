import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  storedDetails: [] = [];

  getLocalStorageData(key:string){
    let getdata = localStorage.getItem(key);
    if (getdata !== '' && getdata !== null) {
      this.storedDetails = JSON.parse(getdata);
    }
    return this.storedDetails;
  }

  setLocalStorageItem(key:string,projectDetails:any){
  let projectData = JSON.stringify(projectDetails);
    localStorage.setItem("project_details", projectData);
  }
}
