import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutformComponent } from './ajoutform.component';

describe('AjoutformComponent', () => {
  let component: AjoutformComponent;
  let fixture: ComponentFixture<AjoutformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
