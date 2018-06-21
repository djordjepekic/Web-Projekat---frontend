import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceComponentComponent } from '../service-component/service-component.component';
import { Observable } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-service-administration',
  templateUrl: './service-administration.component.html',
  styleUrls: ['./service-administration.component.css'],
  providers: [ServiceComponentComponent, NavbarComponent]
})
export class ServiceAdministrationComponent implements OnInit {

  services : Service[]
  
  constructor(private httpClient: HttpClient, private serviceComponent : ServiceComponentComponent) { }

  ngOnInit() {
    this.getAllServices();
  }

  getAllServices()
  {
    return this.serviceComponent.getAllServices().subscribe(u => this.services = u)
  }
  
  VerifyOrUnVerify(Id : number) : Observable<any>{
      let fd = new FormData();                 
      fd.append('Id',JSON.stringify(Id)); 
      return this.httpClient.post('http://localhost:51680/api/Services/VerifyOrUnVerify', fd);
  }
  
  Verify(id : number){
    this.VerifyOrUnVerify(id).subscribe(
      x => 
      {
        this.services.find(m => m.Id == id).Verified = true;
      }, 
      error => 
      {
        alert("Verify unsuccessful." + error.error.Message)
      }
    );
  }
  
  UnVerify(id : number){
    this.VerifyOrUnVerify(id).subscribe(
      x => 
      {
        this.services.find(m => m.Id == id).Verified = false;
      }, 
      error => 
      {
        alert("UnVerify unsuccessful." + error.error.Message)
      }
    );
  }
}
