import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ImageService } from '../services/image.service'
import { Vehicle } from '../models/vehicle';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  visibleImages:Vehicle[] = [];
  private currentVehicle: Vehicle;  

  constructor(private imageService: ImageService) {
    this.imageService.getImages(1,10).then(data => {
      this.visibleImages = data as Vehicle[];
      //console.log(this.visibleImages);
      this.visibleImages.forEach(obj => {
        obj.Image = environment.backendImages + obj.Image;
      })
    })
  }

  ngOnChanges() {
    this.imageService.getImages(1,10).then(data => {
      this.visibleImages = data as Vehicle[];
      //console.log(this.visibleImages);
      this.visibleImages.forEach(obj => {
        obj.Image = environment.backendImages + obj.Image;
      })
    })
  }  

  ngOnInit() {
  }

}
