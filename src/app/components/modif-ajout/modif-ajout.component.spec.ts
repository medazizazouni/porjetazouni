import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAjoutComponent } from './modif-ajout.component';

describe('ModifAjoutComponent', () => {
  let component: ModifAjoutComponent;
  let fixture: ComponentFixture<ModifAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
