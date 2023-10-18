import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetailsComponent } from './employee-details.component';
import { FormsModule } from '@angular/forms';
import { Observable,Subject } from 'rxjs';
describe('EmployeeDetailsComponent', () => {
  let component: EmployeedetailsComponent;
  let fixture: ComponentFixture<EmployeedetailsComponent>;
  let localStore: { [x: string]: string | null; };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeedetailsComponent],
      imports:[FormsModule]
    });
    fixture = TestBed.createComponent(EmployeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStore = {};

  spyOn(window.localStorage, 'getItem').and.callFake((key) =>
    key in localStore ? localStore[key] : null
  );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get employee details',() => {
    
  })
});
