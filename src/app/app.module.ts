import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GotService } from './got.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { CharaterViewComponent } from './charater-view/charater-view.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, BookViewComponent, HouseViewComponent, CharaterViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [GotService],
  bootstrap: [AppComponent],
})
export class AppModule {}
