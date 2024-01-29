import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualsearchcourseComponent } from './individualsearchcourse.component';

describe('IndividualsearchcourseComponent', () => {
  let component: IndividualsearchcourseComponent;
  let fixture: ComponentFixture<IndividualsearchcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualsearchcourseComponent]
    });
    fixture = TestBed.createComponent(IndividualsearchcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
