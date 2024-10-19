import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansScreenComponent } from './plans-screen.component';

describe('PlansScreenComponent', () => {
  let component: PlansScreenComponent;
  let fixture: ComponentFixture<PlansScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlansScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
