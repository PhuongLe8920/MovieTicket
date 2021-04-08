import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { JwtInterceptor } from './guards/interceptor/jwt.interceptor';
import { MaterialModule } from './material/material.module';
import { LoaderInterceptor } from './guards/interceptor/loader/loader.interceptor';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule, // test
    HttpClientModule,
    AdminModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
