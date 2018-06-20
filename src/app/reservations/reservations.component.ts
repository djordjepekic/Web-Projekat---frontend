import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    let vehicleData = this.getReservedVehicles(localStorage.getItem("username"));
    vehicleData.subscribe(
      res => {
        console.log(res);
      }
    )
  }

  getReservedVehicles(username){
    let params: HttpParams = new HttpParams()
    .set('username', username);
    return this.httpClient.get("http://localhost:51680/api/PriceList/GetReservedVehicles/"+username);
  }
}
