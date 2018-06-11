import { Injectable } from '@angular/core';
import {UserRegistration} from '../app/register/userRegistrationModel'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  
  constructor(private httpClient: HttpClient) { }

  register(user : UserRegistration) : Observable<any> {
    let header = new Headers();
    header.append('Content-type', 'application/json');

    let opts = new RequestOptions();
    opts.headers = header;

    return null;
    /*
    return this.httpClient.post("http://localhost:51680/api/Account/Register", user, opts);
    */
  }
  
}
