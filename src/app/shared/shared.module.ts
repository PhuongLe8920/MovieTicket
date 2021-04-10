import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ItemMovieComponent } from './components/item-movie/item-movie.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemContentComponent } from './components/item-content/item-content.component';
import { ButtonDirective } from './directives/button.directive';
import { CutStringPipe } from './custom-pipes/cut-string.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterialModule } from '../material/material.module';
import { BtnEditDirective } from './directives/btn-edit.directive';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, FontAwesomeModule, MaterialModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    ItemMovieComponent,
    ItemContentComponent,
    ButtonDirective,
    CutStringPipe,
    LoaderComponent,
    BtnEditDirective,

  ],

  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundPageComponent,
    CommonModule,
    NgbModule,
    CommonModule,
    ItemMovieComponent,
    ItemContentComponent,
    FontAwesomeModule,
    ButtonDirective,
    CutStringPipe,
    LoaderComponent,
    BtnEditDirective,

  ],
})
export class SharedModule {}
