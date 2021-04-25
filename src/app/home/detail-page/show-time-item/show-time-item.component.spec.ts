import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimeItemComponent } from './show-time-item.component';

describe('ShowTimeItemComponent', () => {
  let component: ShowTimeItemComponent;
  let fixture: ComponentFixture<ShowTimeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTimeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
