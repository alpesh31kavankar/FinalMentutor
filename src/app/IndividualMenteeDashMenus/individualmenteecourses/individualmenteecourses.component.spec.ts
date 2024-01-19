import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmenteecoursesComponent } from './individualmenteecourses.component';

describe('IndividualmenteecoursesComponent', () => {
  let component: IndividualmenteecoursesComponent;
  let fixture: ComponentFixture<IndividualmenteecoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmenteecoursesComponent]
    });
    fixture = TestBed.createComponent(IndividualmenteecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
