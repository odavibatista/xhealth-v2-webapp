import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalityCardComponent } from './modality-card.component';

describe('ModalityCardComponent', () => {
  let component: ModalityCardComponent;
  let fixture: ComponentFixture<ModalityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
