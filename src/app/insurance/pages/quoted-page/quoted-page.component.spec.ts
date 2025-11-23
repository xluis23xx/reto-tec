import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedPageComponent } from './quoted-page.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('QuotedPageComponent', () => {
  let component: QuotedPageComponent;
  let fixture: ComponentFixture<QuotedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotedPageComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
