import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmenteementorComponent } from './individualmenteementor.component';

describe('IndividualmenteementorComponent', () => {
  let component: IndividualmenteementorComponent;
  let fixture: ComponentFixture<IndividualmenteementorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmenteementorComponent]
    });
    fixture = TestBed.createComponent(IndividualmenteementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
