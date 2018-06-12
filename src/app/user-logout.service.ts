import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageEnum } from '../app/localStorageEnum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient : HttpClient){
  }

  logout() {

     let headers = new HttpHeaders();
     headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
     headers = headers.append('Authorization', 'Bearer' + localStorage.getItem(LocalStorageEnum.User.toString()));;

     let ret = this.httpClient.post("http://localhost:51680/api/Account/Logout", "" , {"headers": headers})
     ret.subscribe(
       res => {
        localStorage.removeItem(localStorage.jwt)
        localStorage.removeItem(LocalStorageEnum.User.toString());
        localStorage.removeItem(LocalStorageEnum.Role.toString());
        localStorage.removeItem(LocalStorageEnum.Id.toString());
        localStorage.removeItem(LocalStorageEnum.UserName.toString());
       }
     );
 }
}
