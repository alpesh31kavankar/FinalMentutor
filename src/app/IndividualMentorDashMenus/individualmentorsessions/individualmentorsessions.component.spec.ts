import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmentorsessionsComponent } from './individualmentorsessions.component';

describe('IndividualmentorsessionsComponent', () => {
  let component: IndividualmentorsessionsComponent;
  let fixture: ComponentFixture<IndividualmentorsessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmentorsessionsComponent]
    });
    fixture = TestBed.createComponent(IndividualmentorsessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
