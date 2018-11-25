import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit{
  @Input() options: any;
  @Input() location;
  public like: string;
  public likeFlag: boolean;
  constructor(protected router: Router,
              public mainService: MainService) {
  }
  public getFlag(): void {
    this.like = this.mainService.getFlag(this.options['restaurant']['id']);
    if (this.like === 'true') {
      this.likeFlag = true;
    } else {
      this.likeFlag = false;
    }
  }
  public openDetails(res_id): void {
    console.log('openDetails() called ' + res_id);
    this.router.navigate([this.location, res_id]);
  }
  public toggle(e): void {
    e.stopPropagation();
    this.like = this.mainService.toggleMap(this.options['restaurant']['id']);
    if (this.like === 'true') {
      this.likeFlag = true;
    } else {
      this.likeFlag = false;
    }
    console.log(this.likeFlag);
  }

  ngOnInit(): void {
    console.log(this.options);
    this.getFlag();
  }
}
