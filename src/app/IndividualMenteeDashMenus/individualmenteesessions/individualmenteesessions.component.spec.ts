import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmenteesessionsComponent } from './individualmenteesessions.component';

describe('IndividualmenteesessionsComponent', () => {
  let component: IndividualmenteesessionsComponent;
  let fixture: ComponentFixture<IndividualmenteesessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmenteesessionsComponent]
    });
    fixture = TestBed.createComponent(IndividualmenteesessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
