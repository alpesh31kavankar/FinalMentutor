import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmentormenteesComponent } from './individualmentormentees.component';

describe('IndividualmentormenteesComponent', () => {
  let component: IndividualmentormenteesComponent;
  let fixture: ComponentFixture<IndividualmentormenteesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmentormenteesComponent]
    });
    fixture = TestBed.createComponent(IndividualmentormenteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
