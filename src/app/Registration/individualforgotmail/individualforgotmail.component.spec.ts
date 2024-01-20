import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualforgotmailComponent } from './individualforgotmail.component';

describe('IndividualforgotmailComponent', () => {
  let component: IndividualforgotmailComponent;
  let fixture: ComponentFixture<IndividualforgotmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualforgotmailComponent]
    });
    fixture = TestBed.createComponent(IndividualforgotmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
