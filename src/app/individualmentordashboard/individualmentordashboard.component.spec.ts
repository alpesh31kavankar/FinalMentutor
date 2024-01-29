import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmentordashboardComponent } from './individualmentordashboard.component';

describe('IndividualmentordashboardComponent', () => {
  let component: IndividualmentordashboardComponent;
  let fixture: ComponentFixture<IndividualmentordashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmentordashboardComponent]
    });
    fixture = TestBed.createComponent(IndividualmentordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
