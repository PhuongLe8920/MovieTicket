import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from '../guards/can-activate.guard';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { AboutPageComponent } from './about-page/about-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home.component';
import { ListMoviePageComponent } from './list-movie-page/list-movie-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'list-movie-page',
        component: ListMoviePageComponent,
      },
      {
        path: 'about-page',
        component: AboutPageComponent,
      },
      {
        path: 'booking-page/:id',
        component: BookingPageComponent,
        canActivate: [CanActivateGuard]
      },
      {
        path: 'sign-up-page',
        component: SignUpPageComponent,
        // canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'log-in',
        component: LogInPageComponent
      },
      {
        path: 'detail-page/:id',
        component: DetailPageComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
