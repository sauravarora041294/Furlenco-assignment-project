import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   public tableData: Object;
   public location: string;
   public locationData: Object;
   public restaurantData: Object[];

  constructor(public mainService: MainService,
              protected router: Router) {
    this.getLocation();
  }

  public getData(name, lat?, lon?, count?): void {
    this.mainService.send('getLocation', {'query': name, 'lat': lat, 'lon': lon, 'count': count }).subscribe((res) => {
     this.locationData = res['location_suggestions'];
      console.log(this.locationData);
      let entity_id = this.locationData[0]['entity_id'],
      entity_type = this.locationData[0]['entity_type'];
      this.getDetails(entity_id, entity_type);
    });
  }

  public getDetails(entity_id, entity_type): void {
    this.mainService.send('getLocationDetails', { 'entity_id': entity_id, 'entity_type': entity_type}).subscribe((res) => {
      console.log(res);
      this.restaurantData = res;
    });
  }

  public getLocation(): void {
    let lastIndex = this.router.url.lastIndexOf('/');
    let loc = this.router.url.substr(lastIndex + 1, this.router.url.length);
    this.location = loc;
    this.getData(loc);
  }
}
