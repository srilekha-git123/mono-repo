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
import { Employeeinterface, Projectinterface, allDetails } from 'projects/shared-service/src/lib/model.interface';
import { filter, forkJoin, map, merge, of } from 'rxjs';
//import { select, Store } from '@ngrx/store';
//import { invokeCombinedDetailsAPI } from 'projects/shared-service/src/lib/store/store.action';

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

  projectDetails: Projectinterface[] = [];
  employeeDetails: Employeeinterface[] = [];
  submitted: boolean = false;
  selectedProjectId: any;
  selectedEmployeeId: any;
  meregedDetails :allDetails[] =[];

  constructor(private fb: FormBuilder, private location: Location, public SharedService: SharedServiceService) { }

  ngOnInit() {
    this.addprojectform = this.fb.group({
      projectid: ['', Validators.required],
      projectname: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.getProjectDetails();
    this.getEmployeeDetails();
    this.SharedService.getCombinedDetails().subscribe(data=>console.log(data,'aaaaaa'))
    //this.store.dispatch(invokeCombinedDetailsAPI());
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addprojectform.controls;
  }

  getProjectDetails() {
    this.SharedService.getProjectDetails().subscribe((response: any) => {
      this.projectDetails = response;
    })
  }

  getEmployeeDetails() {
    this.SharedService.getEmployeeDetails().subscribe((response: any) => {
      this.employeeDetails = response;
    })
  }

  formSubmit() {
    this.submitted = true;
    if (this.addprojectform.invalid) {
      return;
    }

    this.SharedService.postProjectDetails(this.addprojectform.value).subscribe();
    this.formReset();
    this.getProjectDetails();
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

  assign(){
  if(this.selectedEmployeeId !== '' && this.selectedProjectId !==''){
    let filterEmployeeDetails = this.employeeDetails.filter(x=>x.employeeid === this.selectedEmployeeId);
    let filterProjectDetails = this.projectDetails.filter(x=>x.projectid === this.selectedProjectId);

    forkJoin([filterEmployeeDetails, filterProjectDetails]).pipe(
      map(([employee,project])=> Object.assign(employee, project))
    ).subscribe( data => this.SharedService.postCombinedDetails(data).subscribe());
  }

  this.selectedEmployeeId ='';
  this.selectedProjectId = '';
}

}
