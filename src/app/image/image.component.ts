import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  selectedFile: File = null;
  imagepath: string;

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    this.imagepath = environment.backendImages + "bmwm3.jpg";
  }

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:51680/api/Vehicle/postimage',fd)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
