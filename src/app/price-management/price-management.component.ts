import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceListItem } from '../models/pricelistitem';

@Component({
  selector: 'app-price-management',
  templateUrl: './price-management.component.html',
  styleUrls: ['./price-management.component.css']
})
export class PriceManagementComponent implements OnInit {
  
  pricelistitems : PriceListItem[];

  constructor(private httpClient: HttpClient) { }

  getAllPriceListItems()
  {
    this.getPriceListItems().subscribe(v => this.pricelistitems = v)
  }

  getPriceListItems() : Observable<any>
  { 
    return this.httpClient.get('http://localhost:51680/api/PriceList/GetAllPriceListItems');
  }

  ngOnInit() {
  }

}
