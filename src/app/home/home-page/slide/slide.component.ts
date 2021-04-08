import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  images = [
    {
      src: 'assets/img/slide/carousel_02.jpg',
      alt: 'carousel_02',
    },
    {
      src: 'assets/img/slide/carousel_03.jpg',
      alt: 'carousel_03',
    },
    {
      src: 'assets/img/slide/carousel_04.jpg',
      alt: 'carousel_04',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
