import { Injectable } from '@angular/core';
import {UserRegistration} from '../register/userRegistrationModel'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private httpClient: HttpClient) { }

  register(user : UserRegistration) : Observable<any> {

    let headers = new HttpHeaders();

    headers = headers.append('Content-type', 'application/json');

    return this.httpClient.post("http://localhost:51680/api/Account/Register", user,  {"headers": headers});
  }
}
