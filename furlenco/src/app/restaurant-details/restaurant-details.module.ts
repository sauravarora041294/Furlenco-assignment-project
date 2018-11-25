import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RestaurantDetailsComponent} from './restaurant-details.component';
import {RestaurantDetailsRoutingModule} from './restaurant-details-routing.module';
import {ReviewsModule} from '../reviews/reviews.module';

@NgModule({
  imports: [
    RestaurantDetailsRoutingModule,
    ReviewsModule,
    CommonModule
  ],
  declarations: [
    RestaurantDetailsComponent
  ]
})

export class RestaurantDetailsModule {}
