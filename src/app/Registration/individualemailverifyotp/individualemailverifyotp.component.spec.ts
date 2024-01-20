import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualemailverifyotpComponent } from './individualemailverifyotp.component';

describe('IndividualemailverifyotpComponent', () => {
  let component: IndividualemailverifyotpComponent;
  let fixture: ComponentFixture<IndividualemailverifyotpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualemailverifyotpComponent]
    });
    fixture = TestBed.createComponent(IndividualemailverifyotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
