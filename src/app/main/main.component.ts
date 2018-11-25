import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { RequestConfig } from "../../common/request.config";
import {MainService} from "../../services/main.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor( public mainService: MainService,
               private router: Router ) {}

  public getLocation(val) {
    // console.log(e.target.value);
    // let path = e.target.innerHTML.toLowerCase();
    this.router.navigate([val]);
  }
}
