import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {MainService} from "../services/main.service";
import {AjaxService} from "../services/ajax.service";
import {MainModule} from "./main/main.module";
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    AjaxService,
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
