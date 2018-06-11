import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  loggedIn: boolean;

  constructor(private httpClient: HttpClient) { }

  logIn(Username: string, Password: string): Observable<any> {

    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/x-www-form-urlencoded');

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    return this.httpClient.post(
        "http://localhost:51680/oauth/token", 'username=${Username}&password=${Password}&grant_type=password');
  }
}