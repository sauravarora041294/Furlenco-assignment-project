import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ReviewsComponent} from './reviews.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReviewsComponent
  ],
  exports: [
    ReviewsComponent
  ]
})

export class ReviewsModule {}
