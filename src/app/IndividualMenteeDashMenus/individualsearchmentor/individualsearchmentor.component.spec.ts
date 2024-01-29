import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualsearchmentorComponent } from './individualsearchmentor.component';

describe('IndividualsearchmentorComponent', () => {
  let component: IndividualsearchmentorComponent;
  let fixture: ComponentFixture<IndividualsearchmentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualsearchmentorComponent]
    });
    fixture = TestBed.createComponent(IndividualsearchmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
