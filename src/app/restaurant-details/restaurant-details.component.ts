import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  public res_id;
  public RestaurantData: Object;
  public reviewsData: Object[];
  public like: string;
  public likeFlag: boolean;
  constructor(public mainService: MainService,
              protected router: Router) {
    this.getRestaurantData(this.getIndex());
    this.getReviews();
    this.like = this.mainService.getFlag(this.res_id);
    if ( this.like === 'true') {
      this.likeFlag = true;
    } else {
      this.likeFlag = false;
    }
  }

  public getIndex(): any {
    let lastIndex = this.router.url.lastIndexOf('/');
    let id = this.router.url.substr(lastIndex + 1, this.router.url.length);
    this.res_id = id;
    return this.res_id;
  }

  public getReviews(body?): void {
      this.mainService.send('getReviews', body ? body : {'res_id': this.res_id}).subscribe((res) => {
        this.reviewsData = res;
      });
  }

   public getRestaurantData(id): void {
    this.mainService.send('getRestaurantDetails', {'res_id': id}).subscribe((res) => {
      this.RestaurantData = res;
    });
   }

  public toggle(e): void {
    e.stopPropagation();
    this.like = this.mainService.toggleMap(this.res_id);
    if ( this.like === 'true' ) {
      this.likeFlag = true;
    } else {
      this.likeFlag = false;
    }
    console.log(this.likeFlag);
  }

  public load(): void {
    console.log('inside load()');
    let obj = {'res_id': this.res_id, 'count': 5};
    this.getReviews(obj);
  }

  ngOnInit() {
  }

}
