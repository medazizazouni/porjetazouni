import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionHotelComponent } from './description-hotel.component';

describe('DescriptionHotelComponent', () => {
  let component: DescriptionHotelComponent;
  let fixture: ComponentFixture<DescriptionHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
