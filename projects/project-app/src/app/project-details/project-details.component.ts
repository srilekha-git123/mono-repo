import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
import { SharedServiceService } from 'projects/shared-service/src/public-api';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  addprojectform: FormGroup = new FormGroup({
    projectid: new FormControl(''),
    projectname: new FormControl(''),
    description: new FormControl('')
  })

  projectDetails: any[] = [];
  submitted: boolean = false;
  employeeId = '';

  constructor(private fb: FormBuilder, private location: Location, public SharedService: SharedServiceService) { }

  ngOnInit() {
    this.addprojectform = this.fb.group({
      projectid: ['', Validators.required],
      projectname: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.projectDetails = this.SharedService.getLocalStorageData('project_details');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addprojectform.controls;
  }


  formSubmit() {
    this.submitted = true;
    if (this.addprojectform.invalid) {
      return;
    }
    this.projectDetails = [];
    this.projectDetails = this.SharedService.getLocalStorageData('project_details');

    this.projectDetails.push(this.addprojectform.value);
    this.SharedService.setLocalStorageItem("project_details",this.projectDetails)
    
    this.formReset();
  }
  formReset() {
    this.addprojectform.reset()
    this.addprojectform.controls['projectid'].setErrors(null);
    this.addprojectform.controls['projectname'].setErrors(null);
    this.addprojectform.controls['description'].setErrors(null);
  }

  backButton() {
    this.location.back();
  }
}
