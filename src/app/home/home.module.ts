import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SlideComponent } from './home-page/slide/slide.component';
import { ListPhimComponent } from './home-page/list-phim/list-phim.component';
import { ListPhimDangChieuComponent } from './home-page/list-phim/list-phim-dang-chieu/list-phim-dang-chieu.component';
import { ListPhimSapChieuComponent } from './home-page/list-phim/list-phim-sap-chieu/list-phim-sap-chieu.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ListMoviePageComponent } from './list-movie-page/list-movie-page.component';
import { ItemSeatComponent } from './booking-page/item-seat/item-seat.component';
import { ListSeatComponent } from './booking-page/list-seat/list-seat.component';
import { ContentComponent } from './home-page/content/content.component';
import { NewsComponent } from './home-page/content/news/news.component';
import { PromotionComponent } from './home-page/content/promotion/promotion.component';
import { ReviewComponent } from './home-page/content/review/review.component';

import { CarouselModule } from 'ngx-owl-carousel-o'; // for owl carousel
import { SharedModule } from '../shared/shared.module'; // shared module
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { FormsModule } from '@angular/forms';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailMovieComponent } from './detail-page/detail-movie/detail-movie.component';
import { ShowTimeComponent } from './detail-page/show-time/show-time.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    FormsModule,
    MaterialModule,
    HomeRoutingModule,
  ],

  declarations: [
    HomeComponent,
    HomePageComponent,
    SlideComponent,
    ListPhimComponent,
    ListPhimDangChieuComponent,
    ListPhimSapChieuComponent,
    BookingPageComponent,
    AboutPageComponent,
    ListMoviePageComponent,
    ItemSeatComponent,
    ListSeatComponent,
    ContentComponent,
    NewsComponent,
    PromotionComponent,
    ReviewComponent,
    SignUpPageComponent,
    LogInPageComponent,
    DetailPageComponent,
    DetailMovieComponent,
    ShowTimeComponent,
  ],

  exports: [HomePageComponent],

})
export class HomeModule {}
