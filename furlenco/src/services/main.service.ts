import {Injectable} from "@angular/core";
import {AjaxService} from "./ajax.service";
import {HttpClient} from "@angular/common/http";
import {passBoolean} from 'protractor/built/util';

@Injectable()

export class MainService extends AjaxService {

  public likeMap = new Map();
  constructor(protected  httpClient: HttpClient) {
    super(httpClient);
  }

  public toggleMap(id): string {
    if ( this.likeMap.has(id)) {
      this.likeMap.set(id, !this.likeMap.get(id));
      localStorage.setItem(id, this.likeMap.get(id));
    } else {
      this.likeMap.set(id, true);
      localStorage.setItem(id, this.likeMap.get(id));
    }
    console.log(this.likeMap);
    return localStorage.getItem(id);
    // return this.likeMap.get(id);
  }

  public getFlag(id): string {
    // localStorage.getItem(id);
    return localStorage.getItem(id);

  }

}
