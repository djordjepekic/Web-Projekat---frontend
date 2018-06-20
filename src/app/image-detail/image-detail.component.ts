import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service'
import { ActivatedRoute } from '@angular/router'
import { Vehicle } from '../models/vehicle';
import { environment } from '../../environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { PriceListItem } from '../models/pricelistitem';
import { PriceList } from '../models/pricelist';
import { ReservationModel } from '../models/reservationModel';
import { Office } from '../models/office';
import { OfficeComponent } from '../office/office.component';
import { ServiceComponentComponent } from '../service-component/service-component.component';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css'],
  providers: [NavbarComponent, OfficeComponent, ServiceComponentComponent]
})
export class ImageDetailComponent implements OnInit {
  private menuExpand: boolean = false;
  private selectedVehicle:Vehicle;
  private imageLoaded: boolean = false;
  private price: any = "Loading price...";
  TimeOfReservation : Date;
  TimeToReturn : Date;
  UserName : string;
  TakeOfficeId : number;
  ReturnOfficeId : number;
  offices : Office[];
  constructor(private imageService: ImageService, private route: ActivatedRoute, private navbar: NavbarComponent, private httpClient: HttpClient, private officeComponent : OfficeComponent) {
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

    this.UserName = localStorage.getItem("username");
    this.getAllOffices();
  }  

  isLoggedIn(){
    return this.navbar.IsLoggedIn();
  }

  switchMenu(){
    this.menuExpand = !this.menuExpand;
  }

  getAllOffices()
  {
    this.officeComponent.getAllOffices().subscribe(o => this.offices = o);
  }

  getVehiclePrice(id){
    let params: HttpParams = new HttpParams()
    .set('id', id);
    return this.httpClient.get("http://localhost:51680/api/PriceList/GetPriceList/"+id);
  }

  Reservation()
  {
    if(this.TimeOfReservation == undefined ||
       this.TimeToReturn == undefined)
       {
         alert("Some required fields are empty.");
       }
       else
       {
        let headers = new HttpHeaders();
        headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
        headers.append('enctype','multipart/form-data');
        
        let reservationModel = new ReservationModel(this.UserName,this.selectedVehicle.Id,this.TimeOfReservation, this.TimeToReturn, this.TakeOfficeId, this.ReturnOfficeId);

        let fd = new FormData();                 
        fd.append('reservationModel',JSON.stringify(reservationModel));
              

        let x = this.httpClient.post(`http://localhost:51680/api/PriceList/Reservation`, fd.get("reservationModel") , {"headers": headers});
          x.subscribe(
        res => {
          alert("Reservation successfull.");               
        },
        error => 
        {
          alert("Reservation could not be processed." + error.error.Message); 
        });
       }
  }
}
