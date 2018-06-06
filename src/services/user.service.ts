import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getMethodDemo(): Observable<any> {
    return this.httpClient.get("(localhost):51680/AppUser/GetUser");
  }

  postMethodDemo(newMember): Observable<any> {
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", newMember);
  }
}
