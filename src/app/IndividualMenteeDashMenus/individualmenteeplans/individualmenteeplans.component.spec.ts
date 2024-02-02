import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmenteeplansComponent } from './individualmenteeplans.component';

describe('IndividualmenteeplansComponent', () => {
  let component: IndividualmenteeplansComponent;
  let fixture: ComponentFixture<IndividualmenteeplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmenteeplansComponent]
    });
    fixture = TestBed.createComponent(IndividualmenteeplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
