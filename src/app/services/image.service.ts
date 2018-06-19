import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages = [];
  private IMAGES: Vehicle[];
  private PageCount: number;
  private PageNo: number;
  private TotalRecordCount: number;
  private promise: any;

  constructor(private httpClient: HttpClient) { }

    getImages(pageNo, pageSize){
      return this.promise = new Promise((resolve, reject) => {
        let data = this.getVehicleImages(pageNo,pageSize);
        data.subscribe(
          res => {
            this.PageCount = res.Paging.PageCount;
            this.PageNo = res.Paging.PageNo;
            this.PageSize = res.Paging.PageSize;
            this.TotalRecordCount = res.Paging.TotalRecordCount;
            this.IMAGES = res.Data;
            this.visibleImages = this.IMAGES.slice(0); 
            //console.log(this.visibleImages);
            resolve(this.IMAGES);
          },
          error => {
           reject(error);
         },    
        );
      });
    }

    getImage(id: number){
      return this.promise = new Promise((resolve, reject) => {
        let data = this.getVehicleById(id);
        data.subscribe(
          res => {
              resolve(res);
          },
          error => {
           reject(error);
         },    
        );
      });
    }

    getVehicleImages(pageNo, pageSize): Observable<any> {
      let params: HttpParams = new HttpParams()
      .set('pageNo', pageNo)
      .set('pageSize', pageSize);  
      return this.httpClient.get("http://localhost:51680/api/Vehicle", {params: params});
    }

    getVehicleById(id){
      let params: HttpParams = new HttpParams()
      .set('id', id);
      return this.httpClient.get("http://localhost:51680/api/Vehicle/GetVehicle/"+id);
    }
}
