import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprimerComponent } from './suprimer.component';

describe('SuprimerComponent', () => {
  let component: SuprimerComponent;
  let fixture: ComponentFixture<SuprimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuprimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
