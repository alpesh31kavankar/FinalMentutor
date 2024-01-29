import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmentorprofileComponent } from './individualmentorprofile.component';

describe('IndividualmentorprofileComponent', () => {
  let component: IndividualmentorprofileComponent;
  let fixture: ComponentFixture<IndividualmentorprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmentorprofileComponent]
    });
    fixture = TestBed.createComponent(IndividualmentorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
