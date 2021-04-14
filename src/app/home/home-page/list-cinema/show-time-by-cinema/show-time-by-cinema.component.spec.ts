import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimeByCinemaComponent } from './show-time-by-cinema.component';

describe('ShowTimeByCinemaComponent', () => {
  let component: ShowTimeByCinemaComponent;
  let fixture: ComponentFixture<ShowTimeByCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTimeByCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimeByCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
