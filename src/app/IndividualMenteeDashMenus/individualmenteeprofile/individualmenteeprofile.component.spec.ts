import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualmenteeprofileComponent } from './individualmenteeprofile.component';

describe('IndividualmenteeprofileComponent', () => {
  let component: IndividualmenteeprofileComponent;
  let fixture: ComponentFixture<IndividualmenteeprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualmenteeprofileComponent]
    });
    fixture = TestBed.createComponent(IndividualmenteeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
