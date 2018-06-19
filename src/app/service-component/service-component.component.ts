import { Component, OnInit } from '@angular/core';
import { unescapeIdentifier } from '@angular/compiler';
import { Service } from '../models/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css'],
})
export class ServiceComponentComponent implements OnInit {

  Name : string;
  Logo : string;
  Email : string;
  Description : string;

  constructor(private httpClient: HttpClient) { }
  selectedFile: File = null;

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  ngOnInit() {
  }

  getAllServices() : Observable<any>
  { 
    return this.httpClient.get('http://localhost:51680/api/Services/GetServices');
  }

  getServiceById(id : number) : Observable<any> 
  {
    return this.httpClient.get('http://localhost:51680/api/Services/GetService?$filter=ServiceId eq ' + id);
  }

  onSubmit(){
    if(this.Name == "" || 
       this.Email == ""||
       this.Description == "") 
       {
          alert("Some required fields are empty.");    
       }
       else 
       {
          let headers = new HttpHeaders();
          headers = headers.append('Content-type', 'application/x-www-form-urlencoded');
          headers.append('enctype','multipart/form-data');
          this.Logo = this.selectedFile.name;
          
          let service = new Service(this.Name, this.Logo, this.Email, this.Description)

          let fd = new FormData();                 
          fd.append('service',JSON.stringify(service));          

          let x = this.httpClient.post(`http://localhost:51680/api/Services/PostService`, fd.get('service') , {"headers": headers});
            x.subscribe(
          res => {
            let fdImage = new FormData();
            fdImage.append('image',this.selectedFile, this.selectedFile.name);
            let y = this.httpClient.post(`http://localhost:51680/api/Services/PostServiceImage`, fdImage);
            y.subscribe(
              resImage => {
                alert("Service successfully added.");
              },
              error => 
              {          
                alert("Service image not added.")
              }
            )              
          },
          error => 
          {          
            alert("Service not added.")
          });
       }
    }
  }