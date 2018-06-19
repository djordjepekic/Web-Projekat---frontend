import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  loggedIn: boolean;
  token : Response

  constructor(private httpClient: HttpClient, private route : Router) { }

  logIn(user) {
    if(user.username == ""||
       user.password == "")
    {
       alert("Some required fields are empty.")
    }
    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
    
    if(!localStorage.jwt)
    {
       let x = this.httpClient.post('http://localhost:51680/oauth/token', `username=${user.username}&password=${user.password}&grant_type=password` , {"headers": headers}) as Observable<any>
       console.log(user)
     x.subscribe(
        res => {
          console.log(res.access_token);
          
          let jwt = res.access_token;

          let jwtData = jwt.split('.')[1]
          let decodedJwtJsonData = window.atob(jwtData)
          let decodedJwtData = JSON.parse(decodedJwtJsonData)

          let role = decodedJwtData.role

          console.log('jwtData: ' + jwtData)
          console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
          console.log('decodedJwtData: ' + decodedJwtData)
          console.log('Role ' + role)

          localStorage.setItem('jwt', jwt)
          localStorage.setItem("token", decodedJwtJsonData); // token
          localStorage.setItem("role", role);
          localStorage.setItem("username", user.username);

          this.route.navigate(['/home']);
        },
        err => {
          console.log("Error occured");
        }
      );
    }
  }
}