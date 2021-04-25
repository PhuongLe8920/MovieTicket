import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-app-mobile',
  templateUrl: './app-mobile.component.html',
  styleUrls: ['./app-mobile.component.scss']
})
export class AppMobileComponent implements OnInit {
  listSlide:any []=[];
  customOptions: any;
  constructor(private contentSV: ContentService) { }

  ngOnInit(): void {
    this.listSlide = this.contentSV.listMobileSlide;
    this.customOptions = this.contentSV.customOptionsforApp;
  }

}
