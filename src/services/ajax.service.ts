import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs/index";
import {catchError, map} from "rxjs/internal/operators";
import { RequestConfig } from '../common/request.config';

@Injectable()
export class AjaxService {

  public domain = 'https://developers.zomato.com/api/v2.1';
  public API_KEY = '42833bd2320e0452bd14ead315e4ec4c';
  public header: HttpHeaders;
  public requestConfig = RequestConfig;

  constructor(protected  httpClient: HttpClient) {
    this.setHeaders();
  }

  public setHeaders(): void {
    this.header = new HttpHeaders({
      'user-key': this.API_KEY
    });
  }

  public send(type: string, body?, id?: string): Observable<any> {
    let params;
    let path = this.requestConfig[type]['url'];
    let method = this.requestConfig[type]['method'];
    let url = `${this.domain}${path}`;
    let headers = this.header;
    if (body) {
      params = new HttpParams({
        fromObject: body
      });
    }
    return this.httpClient[method](url, {params, headers})
      .pipe(map((res) => {
        return res || {};
      }), catchError(AjaxService.handleError));
  }

  public static handleError(error: HttpResponse<any> | any) {
    let errMsg: string;
    let result = {};

    switch (error.status) {
      case 500 || error.status > 500:

        window.location.href = `http://${window.location.host}/server-error`;

        break;
    }
    if (error instanceof Response) {
      const body = error || '';
      const err = body || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    result['status'] = error.status;
    result['message'] = errMsg;
    return throwError(result);
  }
}
