import { Component, OnInit } from '@angular/core';
import { unescapeIdentifier } from '@angular/compiler';
import { Service } from '../models/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {

  Name : string;
  Logo : File;
  Email : string;
  Description : string;

  constructor(private httpClient: HttpClient) { }
  selectedFile: File = null;

  onFileSelected(event){
    this.Logo = <File>event.target.files[0];
  }

  ngOnInit() {
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
          headers = headers.append('Content-type', 'application/json');
          //headers.append("Authorization", "Bearer " + localStorage.getItem("jwt"));

          let service = new Service(this.Name, this.Logo.name, this.Email, this.Description)
          //const fd = new FormData();
          //fd.append('image',this.Logo, this.Logo.name);

          let x = this.httpClient.post(`http://localhost:51680/api/Services/PostService`, service, {"headers": headers});
            x.subscribe(
          res => {;
            alert("Service successfully added.");   
          },
          error => 
          {
              alert(error.json().Message);   
          });
       }
    }
  }