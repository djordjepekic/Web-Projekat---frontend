import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageEnum } from '../app/localStorageEnum';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient : HttpClient, private route : Router){
  }

  logout() {   
        localStorage.removeItem('jwt')
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");  
        this.route.navigate(['/home']);    
       }
}
