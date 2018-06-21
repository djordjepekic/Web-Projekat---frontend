import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceListItem } from '../models/pricelistitem';
import { Vehicle } from '../models/vehicle';
import { NavbarComponent } from '../navbar/navbar.component';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { ServiceComponentComponent } from '../service-component/service-component.component';
import { VehicletypeComponent } from '../vehicletype/vehicletype.component';

@Component({
  selector: 'app-price-management',
  templateUrl: './price-management.component.html',
  styleUrls: ['./price-management.component.css'],
  providers: [VehicleComponent, NavbarComponent, ServiceComponentComponent, VehicletypeComponent]
})
export class PriceManagementComponent implements OnInit {
  
  pricelistitems : PriceListItem[];
  vehicles : Vehicle[];
  VehicleId : number;
  NewPrice : number;

  constructor(private httpClient: HttpClient, private vehicleComponent : VehicleComponent) { }

  getAllPriceListItems()
  {
    this.getPriceListItems().subscribe(p => this.pricelistitems = p)
    //console.log(this.pricelistitems);
  }

  getPriceListItems() : Observable<any>
  { 
    return this.httpClient.get('http://localhost:51680/api/PriceList/GetAllPriceListItems');
  }

  getAllVehicles()
  {
    return this.vehicleComponent.getAllVehicles().subscribe(v => this.vehicles = v)
  }

  ngOnInit() {
    this.getAllPriceListItems();
    this.getAllVehicles();
  }

  ChangeVehiclePrice()
  {
    //console.log(this.VehicleId, this.NewPrice);
    if(this.VehicleId == undefined ||
      this.NewPrice == undefined)        
       {
          alert("Some required fields are empty.");    
       }
       else 
       {
           let headers = new HttpHeaders();
           headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
           headers.append('enctype','multipart/form-data');
           //headers.append('Access-Control-Allow-Origin', "*");
           //headers.append('Access-Control-Allow-Headers','Content-Type');

           let priceListItem = new PriceListItem(this.NewPrice, this.VehicleId);
 
           let fd = new FormData();                 
           fd.append('priceListItem',JSON.stringify(priceListItem));          
 
           let x = this.httpClient.post(`http://localhost:51680/api/PriceList/ChangeVehiclePrice`, fd.get('priceListItem') , {"headers": headers});
             x.subscribe(
           res => {
              alert("Vehicle price successfully added.")
              this.getAllPriceListItems();
            },
            error => 
            {
              alert("Vehicle price not added." + error.error.Message);
            }             
        ) 
      }
    }
  }
