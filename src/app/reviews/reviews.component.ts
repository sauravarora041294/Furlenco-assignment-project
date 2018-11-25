import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  @Input() review: any;
  constructor() {
  }
  public getArray(size): number[] {
    let arr = new Array(size);
    return arr;
  }
}
