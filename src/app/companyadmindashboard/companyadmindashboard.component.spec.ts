import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadmindashboardComponent } from './companyadmindashboard.component';

describe('CompanyadmindashboardComponent', () => {
  let component: CompanyadmindashboardComponent;
  let fixture: ComponentFixture<CompanyadmindashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyadmindashboardComponent]
    });
    fixture = TestBed.createComponent(CompanyadmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
