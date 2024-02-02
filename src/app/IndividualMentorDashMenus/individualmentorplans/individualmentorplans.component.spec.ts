import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmentorplansComponent } from './individualmentorplans.component';

describe('IndividualmentorplansComponent', () => {
  let component: IndividualmentorplansComponent;
  let fixture: ComponentFixture<IndividualmentorplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmentorplansComponent]
    });
    fixture = TestBed.createComponent(IndividualmentorplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
