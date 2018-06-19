import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleType } from '../models/vehicletype';
import { Observable } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-vehicletype',
  templateUrl: './vehicletype.component.html',
  styleUrls: ['./vehicletype.component.css'],
  providers: [NavbarComponent]
})
export class VehicletypeComponent implements OnInit {

  TypeName : string;

  constructor(private httpClient: HttpClient, private navbarComponent : NavbarComponent) { }

  ngOnInit() {
  }

  getAllTypes() : Observable<any>
  { 
    return this.httpClient.get('http://localhost:51680/api/VehicleType/GetVehicleTypes');
  }

  isLoggedIn()
  {
    return this.navbarComponent.IsLoggedIn();
  }

  onSubmit(){
    if(this.TypeName == "")        
       {
          alert("Some required fields are empty.");    
       }
       else 
       {
        if(this.isLoggedIn())
        {
          let headers = new HttpHeaders();
          headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
          headers.append('enctype','multipart/form-data');
          
          let vehicleType = new VehicleType(this.TypeName);

          let fd = new FormData();                 
          fd.append('vehicleType',JSON.stringify(vehicleType));          

          let x = this.httpClient.post(`http://localhost:51680/api/VehicleType/PostVehicleType`, fd.get('vehicleType') , {"headers": headers});
            x.subscribe(
          res =>{
                alert("VehicleType successfully added.");
              }
            ),
          error => 
          {
            alert("VehicleType not added." + error.error.Message)
          };
        }
      }
    }
}
