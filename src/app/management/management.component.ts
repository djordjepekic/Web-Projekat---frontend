import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { Vehicle } from '../models/vehicle';
import { ServiceComponentComponent } from '../service-component/service-component.component';
import { VehicletypeComponent } from '../vehicletype/vehicletype.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
  providers: [VehicleComponent, ServiceComponentComponent, VehicletypeComponent, NavbarComponent]
})
export class ManagementComponent implements OnInit {
  
  vehicles : Vehicle[]

  constructor(private vehicleComponent : VehicleComponent, 
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.getAllVehicles();
  }

  getAllVehicles()
  {
    return this.vehicleComponent.getAllVehicles().subscribe(v => this.vehicles = v)
  }

EnableOrDisable(Id : number) : Observable<any>{
    let fd = new FormData();                 
    fd.append('Id',JSON.stringify(Id)); 
    return this.httpClient.post('http://localhost:51680/api/Vehicle/ChangeVehicle', fd);
}

EnableVehicle(id : number){
  this.EnableOrDisable(id).subscribe(
    x => 
    {
      this.vehicles.find(m => m.Id == id).Available = true;
      this.getAllVehicles();
    }, 
    error => 
    {
      alert("EnableVehicle unsuccessful." + error.error.Message)
    }
  );
}

DisableVehicle(id : number){
  this.EnableOrDisable(id).subscribe(
    x => 
    {
      this.vehicles.find(m => m.Id == id).Available = false;
      this.getAllVehicles();
    }, 
    error => 
    {
      alert("DisableVehicle unsuccessful." + error.error.Message)
    }
  );
}
}
