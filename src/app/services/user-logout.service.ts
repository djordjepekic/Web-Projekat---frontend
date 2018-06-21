import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient : HttpClient, private route : Router){
  }

  logout() {   
    if(confirm("Do you wish to log out?")){
      localStorage.removeItem('jwt')
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("username");  
      this.route.navigate(['/home']); 
      alert("You have been logged out.")   
    }
    else
    {
      this.route.navigate(['/home']);
    }
  }
}
