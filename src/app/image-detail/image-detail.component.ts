import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service'
import { ActivatedRoute } from '@angular/router'
import { Vehicle } from '../models/vehicle';
import { environment } from '../../environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';

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
  TimeOfReservation : Date;
  TimeToReturn : Date;
  constructor(private imageService: ImageService, private route: ActivatedRoute, private navbar: NavbarComponent) {
    this.selectedVehicle = new Vehicle("Loading...","",0,"",false,environment.backendImages+"loading.gif",0,0,0);
   }

  ngOnInit(){      
    this.imageService.getImage(
      +this.route.snapshot.params['id']                
    ).then(data => {
      this.selectedVehicle = data as Vehicle;
      this.selectedVehicle.Image = environment.backendImages + this.selectedVehicle.Image;
      this.imageLoaded = true
    })     
  }  

  isLoggedIn(){
    return this.navbar.IsLoggedIn();
  }

  switchMenu(){
    this.menuExpand = !this.menuExpand;
  }
}
