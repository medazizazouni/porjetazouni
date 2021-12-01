import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifformComponent } from './modifform.component';

describe('ModifformComponent', () => {
  let component: ModifformComponent;
  let fixture: ComponentFixture<ModifformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
