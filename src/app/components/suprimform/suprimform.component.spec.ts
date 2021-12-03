import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprimformComponent } from './suprimform.component';

describe('SuprimformComponent', () => {
  let component: SuprimformComponent;
  let fixture: ComponentFixture<SuprimformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuprimformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprimformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
