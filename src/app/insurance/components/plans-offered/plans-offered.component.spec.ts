import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansOfferedComponent } from './plans-offered.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PlansOfferedComponent', () => {
  let component: PlansOfferedComponent;
  let fixture: ComponentFixture<PlansOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansOfferedComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
