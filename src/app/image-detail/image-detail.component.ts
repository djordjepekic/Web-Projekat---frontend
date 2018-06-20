import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service'
import { ActivatedRoute } from '@angular/router'
import { Vehicle } from '../models/vehicle';
import { environment } from '../../environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpParams, HttpClient } from '@angular/common/http';
import { PriceListItem } from '../models/pricelistitem';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  providers: [NavbarComponent]
})
export class ImageDetailComponent implements OnInit {
  private menuExpand: boolean = false;
  private selectedVehicle:Vehicle;
  private imageLoaded: boolean = false;
  private price: any = "Loading price...";
  constructor(private imageService: ImageService, private route: ActivatedRoute, private navbar: NavbarComponent, private httpClient: HttpClient) {
    this.selectedVehicle = new Vehicle("Loading...","",0,"",false,environment.backendImages+"loading.gif",0,0,0);
   }

  ngOnInit(){      
    this.imageService.getImage(
      +this.route.snapshot.params['id']                
    ).then(data => {
      this.selectedVehicle = data as Vehicle;
      this.selectedVehicle.Image = environment.backendImages + this.selectedVehicle.Image;
      this.imageLoaded = true

      //get price
      let pricedata = this.getVehiclePrice(this.selectedVehicle.Id);
      pricedata.subscribe(
        res=> {
          let resPrice = res[0] as PriceListItem
          console.log(res)
          this.price = resPrice.Price;
        },
        error => {
        alert(error.error.Message);
      },    
      );
    })    
  }  

  isLoggedIn(){
    return this.navbar.IsLoggedIn();
  }

  switchMenu(){
    this.menuExpand = !this.menuExpand;
  }

  getVehiclePrice(id){
    let params: HttpParams = new HttpParams()
    .set('id', id);
    return this.httpClient.get("http://localhost:51680/api/PriceList/GetPriceList/"+id);
  }
}
