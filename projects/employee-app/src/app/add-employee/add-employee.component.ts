import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'projects/shared-service/src/public-api';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { invokeEmployeeAPI, invokeProjectAPI } from 'projects/shared-service/src/lib/store/store.action';
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
  constructor(private formBuilder: FormBuilder, private router: Router, public sharedService: SharedServiceService,private store: Store) { }

  ngOnInit() {
    this.employeeform = this.formBuilder.group({
      employeeid: [''],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    })

    this.store.dispatch(invokeEmployeeAPI());
    this.store.dispatch(invokeProjectAPI());
  
  }

  get f(): { [key: string]: AbstractControl } {
    return this.employeeform.controls;
  }

  formSubmit(): void {
    this.submitted = true;
    if (this.employeeform.invalid) {
      return;
    }

    this.sharedService.postEmployeeDetails(this.employeeform.value).subscribe();
    this.router.navigateByUrl('employee-details');
  }
}
