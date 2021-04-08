import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhimDangChieuComponent } from './list-phim-dang-chieu.component';

describe('ListPhimDangChieuComponent', () => {
  let component: ListPhimDangChieuComponent;
  let fixture: ComponentFixture<ListPhimDangChieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhimDangChieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhimDangChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
