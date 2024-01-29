import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmentorcourseComponent } from './individualmentorcourse.component';

describe('IndividualmentorcourseComponent', () => {
  let component: IndividualmentorcourseComponent;
  let fixture: ComponentFixture<IndividualmentorcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmentorcourseComponent]
    });
    fixture = TestBed.createComponent(IndividualmentorcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
