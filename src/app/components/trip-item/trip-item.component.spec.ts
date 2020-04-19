import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripItemComponent } from './trip-item.component';

describe('TripItemComponent', () => {
  let component: TripItemComponent;
  let fixture: ComponentFixture<TripItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
