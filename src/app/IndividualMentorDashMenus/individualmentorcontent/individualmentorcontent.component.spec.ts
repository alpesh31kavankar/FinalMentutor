import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmentorcontentComponent } from './individualmentorcontent.component';

describe('IndividualmentorcontentComponent', () => {
  let component: IndividualmentorcontentComponent;
  let fixture: ComponentFixture<IndividualmentorcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmentorcontentComponent]
    });
    fixture = TestBed.createComponent(IndividualmentorcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
