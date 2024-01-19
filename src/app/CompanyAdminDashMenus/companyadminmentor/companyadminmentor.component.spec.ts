import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyadminmentorComponent } from './companyadminmentor.component';

describe('CompanyadminmentorComponent', () => {
  let component: CompanyadminmentorComponent;
  let fixture: ComponentFixture<CompanyadminmentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyadminmentorComponent]
    });
    fixture = TestBed.createComponent(CompanyadminmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
