import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  content = 'news';

  constructor() {}

  ngOnInit(): void {}

  showNews() {
    this.content = 'news';
  }

  showReview() {
    this.content = 'review';
  }

  showPromotion() {
    this.content = 'promotion';
  }
}
