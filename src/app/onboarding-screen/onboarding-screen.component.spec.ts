import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingScreenComponent } from './onboarding-screen.component';

describe('OnboardingScreenComponent', () => {
  let component: OnboardingScreenComponent;
  let fixture: ComponentFixture<OnboardingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
