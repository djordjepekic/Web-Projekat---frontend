import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { ServiceComponentComponent } from '../service-component/service-component.component';
import { VehicletypeComponent } from '../vehicletype/vehicletype.component';
import { Observable } from 'rxjs';
import { VehicleType } from '../models/vehicletype';
import { Service } from '../models/service';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [ServiceComponentComponent, VehicletypeComponent, NavbarComponent],
})
export class VehicleComponent implements OnInit {

  Model : string;
  Manufacturer : string;
  Year : number;
  Description : string;
  Available : boolean;
  Image : string;
  VehicleTypeId : number;
  ServiceId : number;
  UserId : number;
  services: Service[];
  types : VehicleType[];
  
  constructor(private serviceComponent : ServiceComponentComponent, 
              private vehicleTypeComponent : VehicletypeComponent, 
              private navbarComponent : NavbarComponent,
              private httpClient: HttpClient) { 
    this.services = []
  }
  selectedFile: File = null;

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  getServices()
  {
    return this.serviceComponent.getAllVerifiedServices().subscribe(s => this.services = s)
  }

  getTypes()
  {
    return this.vehicleTypeComponent.getAllTypes().subscribe(t => this.types = t)
  }

  getAllVehicles() : Observable<any>
  { 
    return this.httpClient.get('http://localhost:51680/api/Vehicle/GetVehicles');
  }

  isLoggedIn()
  {
    return this.navbarComponent.IsLoggedIn();
  }

  ngOnInit() {
    this.getServices();
    this.getTypes();
  }

  onSubmit(){
    if(this.Model == "" ||
      this.Manufacturer == "" || 
      this.Year == 0 ||
      this.Description == "" ||
      this.selectedFile == null
     )        
       {
          alert("Some required fields are empty.");    
       }
       else 
       {
         if(this.isLoggedIn)
         {
           let headers = new HttpHeaders();
           headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
           headers.append('enctype','multipart/form-data');
           this.Image = this.selectedFile.name;
           
           let vehicle = new Vehicle(this.Model, this.Manufacturer, this.Year, this.Description, true, this.Image, this.VehicleTypeId, this.ServiceId, this.UserId);
 
           let fd = new FormData();                 
           fd.append('vehicle',JSON.stringify(vehicle));          
 
           let x = this.httpClient.post(`http://localhost:51680/api/Vehicle/PostVehicle`, fd.get('vehicle') , {"headers": headers});
             x.subscribe(
           res => {
             let fdImage = new FormData();
             fdImage.append('image',this.selectedFile, this.selectedFile.name);
             let y = this.httpClient.post(`http://localhost:51680/api/Vehicle/PostVehicleImage`, fdImage);
             y.subscribe(
               resImage => {
                 alert("Vehicle successfully added.");
               },
               error => 
               {
                 alert("Vehicle image not added." + error.error.Message);
               }             
             )              
           },
           error => 
           {
             alert("Vehicle not added." + error.error.Message); 
           });
         }
         else
         {
          alert("Not logged in."); 
         }
       }
    }
}
