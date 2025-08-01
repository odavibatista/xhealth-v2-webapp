import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymPlanComponent } from './gym-plan.component';

describe('GymPlanComponent', () => {
  let component: GymPlanComponent;
  let fixture: ComponentFixture<GymPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
