import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { ServiceComponentComponent } from '../service-component/service-component.component';
import { Observable } from 'rxjs';
import { Office } from '../models/office';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css'],
  providers: [ServiceComponentComponent, NavbarComponent],
})
export class OfficeComponent implements OnInit {

  Adress : string;
  Image : string;
  Latitude : number;
  Longitude : number;
  ServiceId: number;
  services: Service[];

  constructor(private serviceComponent : ServiceComponentComponent, 
              private navbarComponent : NavbarComponent, 
              private httpClient: HttpClient) { 
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

  getAllOffices() : Observable<any>
  {
    return this.httpClient.get('http://localhost:51680/api/Office/GetAllOffices'); 
  }

  isLoggedIn()
  {
    return this.navbarComponent.IsLoggedIn();
  }

  ngOnInit() {
    this.getServices();
  }

  onSubmit(){
    if(this.Adress == "" || 
       this.Latitude == undefined||
       this.Longitude == undefined ||
       this.selectedFile == null)        
       {
          alert("Some required fields are empty.");    
       }
       else 
       {
        if(this.isLoggedIn())
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
                },
                error => 
                {
                  alert("Office image not added." + error.error.Message)
                }
              )              
            },
            error => 
            {
              alert("Office not added." + error.error.Message)  
            });
          }
          else
          {
            alert("Not logged in.")
          }
       }
    }
}
