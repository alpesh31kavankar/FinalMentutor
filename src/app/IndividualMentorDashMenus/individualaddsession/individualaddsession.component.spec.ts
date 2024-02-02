import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualaddsessionComponent } from './individualaddsession.component';

describe('IndividualaddsessionComponent', () => {
  let component: IndividualaddsessionComponent;
  let fixture: ComponentFixture<IndividualaddsessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualaddsessionComponent]
    });
    fixture = TestBed.createComponent(IndividualaddsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
