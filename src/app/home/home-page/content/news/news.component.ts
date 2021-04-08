import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  listNew: any;
  customOptions: any;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.listNew = this.contentService.listNews;
    this.customOptions = this.contentService.customOptions;
  }

}
