import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit{
  listPromotion: any;
  customOptions: any;

  constructor(private contetentService: ContentService) {}

  ngOnInit(): void {
    this.listPromotion = this.contetentService.listPromotion;
    this.customOptions = this.contetentService.customOptions;
  }

}
