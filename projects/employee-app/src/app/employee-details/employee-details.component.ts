import { Component } from '@angular/core';
import { Employeeinterface } from '../model';
import { Observable, Subject, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeedetailsComponent {

  employeeDetails: Employeeinterface[] = [];
  filteredEmployeeList: Employeeinterface[] = [];
  inputs = new Subject<any>();
  filterKey = '';
  constructor() { }

  ngOnInit() {
    this.filterKey = "";

    this.employeeDetails = this.getEmployeeDetails('employee_details');
    this.filteredEmployeeList = this.employeeDetails;
    this.getFilteredData(this.inputs).subscribe(result => {
      this.filteredEmployeeList = result;
    });
  }

  getEmployeeDetails(key:string)
  {
    let getdata = localStorage.getItem(key);
    if (getdata !== '' && getdata !== null) {
      this.employeeDetails = JSON.parse(getdata);
    }
    return this.employeeDetails;
  }

  onFilterKeyChange(key: any) {
    this.filterKey = key;
    this.inputs.next({ filterKey: this.filterKey });
  }

  getFilteredData(inputs: Observable<any>) {
    return inputs.pipe(
      switchMap(input => {
        let key = input.filterKey.trim();
        let result = this.employeeDetails.filter(item =>
          item.firstname.toLowerCase().includes(key.toLowerCase())
        );

        return of(result);
      })
    );
  }
}
