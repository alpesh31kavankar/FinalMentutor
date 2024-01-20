import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualresetpasswordComponent } from './individualresetpassword.component';

describe('IndividualresetpasswordComponent', () => {
  let component: IndividualresetpasswordComponent;
  let fixture: ComponentFixture<IndividualresetpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualresetpasswordComponent]
    });
    fixture = TestBed.createComponent(IndividualresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
