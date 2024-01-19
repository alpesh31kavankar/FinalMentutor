import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectrolemodalComponent } from './selectrolemodal.component';

describe('SelectrolemodalComponent', () => {
  let component: SelectrolemodalComponent;
  let fixture: ComponentFixture<SelectrolemodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectrolemodalComponent]
    });
    fixture = TestBed.createComponent(SelectrolemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
