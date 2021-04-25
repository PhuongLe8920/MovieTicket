import { Component, OnInit } from '@angular/core';
import { faCoffee, faFootballBall, faCookie, faFilm } from '@fortawesome/free-solid-svg-icons';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faCoffee = faCoffee;
  faFootballBall = faFootballBall;
  faCookie = faCookie;
  faFilm = faFilm;
  listIcon:any []=[];

  constructor(private contentSV: ContentService) { }

  ngOnInit(): void {
    this.listIcon = this.contentSV.listIcon;
    // console.log(this.listIcon);
  }

}
