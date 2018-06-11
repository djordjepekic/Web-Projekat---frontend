import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  
  constructor(private httpClient: HttpClient) { }
  
  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getVehicles(pageNo, pageSize): Observable<any> {
    let params: HttpParams = new HttpParams()
    .set('pageNo', pageNo)
    .set('pageSize', pageSize);

    return this.httpClient.get("http://localhost:51680/api/Vehicle", {params: params});
  }

  postVehicle(newVehicle): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Vehicle", newVehicle);
  }
}
