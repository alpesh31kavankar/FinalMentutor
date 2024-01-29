import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmentoraddcoursesComponent } from './individualmentoraddcourses.component';

describe('IndividualmentoraddcoursesComponent', () => {
  let component: IndividualmentoraddcoursesComponent;
  let fixture: ComponentFixture<IndividualmentoraddcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmentoraddcoursesComponent]
    });
    fixture = TestBed.createComponent(IndividualmentoraddcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
