import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';


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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addprojectform = this.fb.group({
      projectid: ['', Validators.required],
      projectname: ['', Validators.required],
      description: ['', Validators.required],
    })
    this.getLocalStorageData();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addprojectform.controls;
  }

  getLocalStorageData() {
    let getdata = localStorage.getItem('project_details');
    if (getdata !== '' && getdata !== null) {
      this.projectDetails = JSON.parse(getdata);
    }
  }

  formSubmit() {
    this.submitted = true;
    if (this.addprojectform.invalid) {
      return;
    }
    this.projectDetails = [];
    this.getLocalStorageData();

    this.projectDetails.push(this.addprojectform.value);
    let projectData = JSON.stringify(this.projectDetails);
    localStorage.setItem("project_details", projectData);
  }

}
