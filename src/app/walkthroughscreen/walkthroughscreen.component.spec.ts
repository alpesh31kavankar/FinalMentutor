import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkthroughscreenComponent } from './walkthroughscreen.component';

describe('WalkthroughscreenComponent', () => {
  let component: WalkthroughscreenComponent;
  let fixture: ComponentFixture<WalkthroughscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalkthroughscreenComponent]
    });
    fixture = TestBed.createComponent(WalkthroughscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
