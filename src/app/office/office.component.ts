import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { ServiceComponentComponent } from '../service-component/service-component.component';
import { Observable } from 'rxjs';
import { Office } from '../models/office';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
  providers: [ServiceComponentComponent],
})
export class OfficeComponent implements OnInit {

  Adress : string;
  Image : string;
  Latitude : number;
  Longitude : number;
  Service: Service;
  ServiceId: number;
  services: Service[];

  constructor(private serviceComponent : ServiceComponentComponent, private httpClient: HttpClient) { 
    this.services = []
  }
  selectedFile: File = null;

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  getServices()
  {
    return this.serviceComponent.getAllServices().subscribe(s => this.services = s)
  }

  serviceSelected()
  {
    var serviceElement = Number.parseInt((<HTMLInputElement>document.getElementById("ServiceId")).value);
    //this.Service = this.services[serviceElement - 1];
  }

  ngOnInit() {
    this.getServices();
    this.Service = null;
  }

  onSubmit(){
    if(this.Adress == "" || 
       this.Latitude == undefined||
       this.Longitude == undefined)        
       {
          alert("Some required fields are empty.");    
       }
       else 
       {
          let headers = new HttpHeaders();
          headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
          headers.append('enctype','multipart/form-data');
          this.Image = this.selectedFile.name;
          
          let office = new Office(this.Image, this.Adress, this.Latitude, this.Longitude, this.ServiceId);

          let fd = new FormData();                 
          fd.append('office',JSON.stringify(office));          

          let x = this.httpClient.post(`http://localhost:51680/api/Office/PostOffice`, fd.get('office') , {"headers": headers});
            x.subscribe(
          res => {
            let fdImage = new FormData();
            fdImage.append('image',this.selectedFile, this.selectedFile.name);
            let y = this.httpClient.post(`http://localhost:51680/api/Office/PostOfficeImage`, fdImage);
            y.subscribe(
              resImage => {
                alert("Office successfully added.");
              }
            )              
          },
          error => 
          {
              alert("Office not added, error occured.");   
          });
       }
    }
}
