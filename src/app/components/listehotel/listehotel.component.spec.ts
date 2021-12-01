import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListehotelComponent } from './listehotel.component';

describe('ListehotelComponent', () => {
  let component: ListehotelComponent;
  let fixture: ComponentFixture<ListehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListehotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
