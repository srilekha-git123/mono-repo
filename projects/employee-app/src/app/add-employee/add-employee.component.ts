import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employeeinterface } from '../model';
import { SharedServiceService } from 'projects/shared-service/src/public-api';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent {
  employeeform: FormGroup = new FormGroup({
    employeeid: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    emailid: new FormControl(''),
    mobile: new FormControl('')
  })

  submitted: boolean = false;
  employeeDetails: Employeeinterface[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router, public SharedService: SharedServiceService) { }

  ngOnInit() {
    this.employeeform = this.formBuilder.group({
      employeeid: [''],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.employeeform.controls;
  }

  formSubmit(): void {
    this.submitted = true;
    if (this.employeeform.invalid) {
      return;
    }
    this.employeeDetails = [];
    this.employeeDetails = this.SharedService.getLocalStorageData('employee_details');

    this.employeeDetails.push(this.employeeform.value);
    this.SharedService.setLocalStorageItem("employee_details", this.employeeDetails);
    this.router.navigateByUrl('employee-details');
  }
}
