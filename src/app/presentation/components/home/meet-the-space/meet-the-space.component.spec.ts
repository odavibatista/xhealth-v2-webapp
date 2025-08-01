import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheSpaceComponent } from './meet-the-space.component';

describe('MeetTheSpaceComponent', () => {
  let component: MeetTheSpaceComponent;
  let fixture: ComponentFixture<MeetTheSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetTheSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetTheSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
