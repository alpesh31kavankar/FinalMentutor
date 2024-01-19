import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualselectroleComponent } from './individualselectrole.component';

describe('IndividualselectroleComponent', () => {
  let component: IndividualselectroleComponent;
  let fixture: ComponentFixture<IndividualselectroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualselectroleComponent]
    });
    fixture = TestBed.createComponent(IndividualselectroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
