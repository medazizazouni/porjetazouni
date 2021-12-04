import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VosreservationComponent } from './vosreservation.component';

describe('VosreservationComponent', () => {
  let component: VosreservationComponent;
  let fixture: ComponentFixture<VosreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VosreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VosreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
