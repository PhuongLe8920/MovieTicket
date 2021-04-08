import { Component, OnInit } from '@angular/core';
import { faCoffee, faFootballBall, faCookie, faFilm } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
