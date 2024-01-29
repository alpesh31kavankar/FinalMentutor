import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavindividualmentorComponent } from './sidenavindividualmentor.component';

describe('SidenavindividualmentorComponent', () => {
  let component: SidenavindividualmentorComponent;
  let fixture: ComponentFixture<SidenavindividualmentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavindividualmentorComponent]
    });
    fixture = TestBed.createComponent(SidenavindividualmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
