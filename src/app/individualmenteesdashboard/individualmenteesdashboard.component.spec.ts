import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmenteesdashboardComponent } from './individualmenteesdashboard.component';

describe('IndividualmenteesdashboardComponent', () => {
  let component: IndividualmenteesdashboardComponent;
  let fixture: ComponentFixture<IndividualmenteesdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmenteesdashboardComponent]
    });
    fixture = TestBed.createComponent(IndividualmenteesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
