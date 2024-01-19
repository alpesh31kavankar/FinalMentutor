import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualuserdetailsComponent } from './individualuserdetails.component';

describe('IndividualuserdetailsComponent', () => {
  let component: IndividualuserdetailsComponent;
  let fixture: ComponentFixture<IndividualuserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualuserdetailsComponent]
    });
    fixture = TestBed.createComponent(IndividualuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
