import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProjectDetailsComponent }]),
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
