import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServjsonComponent } from './servjson.component';

describe('ServjsonComponent', () => {
  let component: ServjsonComponent;
  let fixture: ComponentFixture<ServjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServjsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
