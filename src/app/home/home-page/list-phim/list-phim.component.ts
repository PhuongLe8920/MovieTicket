import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-phim',
  templateUrl: './list-phim.component.html',
  styleUrls: ['./list-phim.component.scss']
})
export class ListPhimComponent implements OnInit {

  phimDangChieuStatus = true;

  constructor() { }

  ngOnInit(): void {
  }

  showNow(): void {
    this.phimDangChieuStatus = true;
  }

  showComming(): void {
    this.phimDangChieuStatus = false;
  }

}
