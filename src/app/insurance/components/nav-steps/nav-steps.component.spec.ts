import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStepsComponent } from './nav-steps.component';

describe('NavStepsComponent', () => {
  let component: NavStepsComponent;
  let fixture: ComponentFixture<NavStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
