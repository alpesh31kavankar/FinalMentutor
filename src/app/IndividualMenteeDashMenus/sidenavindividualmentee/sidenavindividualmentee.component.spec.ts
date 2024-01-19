import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavindividualmenteeComponent } from './sidenavindividualmentee.component';

describe('SidenavindividualmenteeComponent', () => {
  let component: SidenavindividualmenteeComponent;
  let fixture: ComponentFixture<SidenavindividualmenteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavindividualmenteeComponent]
    });
    fixture = TestBed.createComponent(SidenavindividualmenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
