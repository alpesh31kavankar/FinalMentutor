import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmenteespurchasecourseComponent } from './individualmenteespurchasecourse.component';

describe('IndividualmenteespurchasecourseComponent', () => {
  let component: IndividualmenteespurchasecourseComponent;
  let fixture: ComponentFixture<IndividualmenteespurchasecourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmenteespurchasecourseComponent]
    });
    fixture = TestBed.createComponent(IndividualmenteespurchasecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
