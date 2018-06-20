import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ImageService, PaginationData } from '../services/image.service'
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
  private pageNo = 1;
  private pageSize = 5; 
  private pages = [1];
  private totalRecordCount;

  constructor(private imageService: ImageService) {
    this.getImages();
  }

  getImages(){   
    //if we are on a higher page then the number that exist, return us to the highest page
    if(this.pageNo > +this.getNumberOfPages(this.totalRecordCount,this.pageSize)){
      this.setPage(+this.getNumberOfPages(this.totalRecordCount,this.pageSize));     
      console.log(this.pageNo) 
    } 

    this.imageService.getImages(this.pageNo,this.pageSize).then(data => {
      let paginationData = data as PaginationData;
      //console.log(paginationData);

      this.totalRecordCount = paginationData.totalRecordCount;
      this.visibleImages = paginationData.images as Vehicle[];
      this.visibleImages.forEach(obj => {
        obj.Image = environment.backendImages + obj.Image;
      })

      this.pages = [];              
      for (let i = 1; i <= +this.getNumberOfPages(paginationData.totalRecordCount,this.pageSize); i++){
        this.pages.push(i);
      }
    })    
  }

  ngOnChanges() {
    this.getImages();
  }  

  ngOnInit() {    
  }

  getNumberOfPages(totalRecordCount,itemsPerPage){   
    let num = (totalRecordCount/itemsPerPage).toFixed(0)
    if(+num == 0){
      return 1;
    }
    else{
      return num;
    }
  }

  setPage(num){
    this.pageNo = num;
    this.ngOnChanges();
  }

  incrPage(){
    if(this.pageNo != +this.getNumberOfPages(this.totalRecordCount,this.pageSize)){
      this.pageNo = this.pageNo+1;
      this.ngOnChanges();
    }
  }

  decrPage(){
    if(this.pageNo != 1){
      this.pageNo = this.pageNo-1;
      this.ngOnChanges();
    }
  }
}
