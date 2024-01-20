import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualforgototpComponent } from './individualforgototp.component';

describe('IndividualforgototpComponent', () => {
  let component: IndividualforgototpComponent;
  let fixture: ComponentFixture<IndividualforgototpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualforgototpComponent]
    });
    fixture = TestBed.createComponent(IndividualforgototpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
