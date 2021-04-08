import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  listReview: any;
  customOptions: any;

  constructor(private ContentService: ContentService) {}

  ngOnInit(): void {
    this.listReview = this.ContentService.listReview;
    this.customOptions = this.ContentService.customOptions;
  }


}
