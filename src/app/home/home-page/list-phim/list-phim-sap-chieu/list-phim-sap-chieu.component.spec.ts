import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhimSapChieuComponent } from './list-phim-sap-chieu.component';

describe('ListPhimSapChieuComponent', () => {
  let component: ListPhimSapChieuComponent;
  let fixture: ComponentFixture<ListPhimSapChieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhimSapChieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhimSapChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
