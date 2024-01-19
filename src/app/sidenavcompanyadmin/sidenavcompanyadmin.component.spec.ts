import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcompanyadminComponent } from './sidenavcompanyadmin.component';

describe('SidenavcompanyadminComponent', () => {
  let component: SidenavcompanyadminComponent;
  let fixture: ComponentFixture<SidenavcompanyadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavcompanyadminComponent]
    });
    fixture = TestBed.createComponent(SidenavcompanyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
