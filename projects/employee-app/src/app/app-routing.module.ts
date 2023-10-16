import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeedetailsComponent } from './employee-details/employee-details.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {path:"", component:AddEmployeeComponent},
  {path:"add-employee", component:AddEmployeeComponent},
  {path:"employee-details", component:EmployeedetailsComponent},
  {path:"projectApp",
  loadChildren: () =>
  loadRemoteModule({
      type: 'module',
      //remoteName: 'projectApp',
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      exposedModule: './ProjectModule'
  })
  .then((m) => m.ProjectModule)
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
