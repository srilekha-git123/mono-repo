import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employeeinterface } from '../model';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
    let getdata = localStorage.getItem('employee_details');
    if (getdata !== '' && getdata !== null) {
      this.employeeDetails = JSON.parse(getdata);
    }

    this.employeeDetails.push(this.employeeform.value);
    let employeeData = JSON.stringify(this.employeeDetails);
    localStorage.setItem("employee_details", employeeData);
    this.router.navigateByUrl('employee-details');
  }
}
