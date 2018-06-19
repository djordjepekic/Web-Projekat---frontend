import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

managers : User[]

constructor(private userService : UserService, private httpClient: HttpClient) { }

ngOnInit() {
  this.getAllManagers();
}

getAllManagers()
{
  return this.userService.getManagers().subscribe(u => this.managers = u)
}

BanOrUnban(Id : number) : Observable<any>{
    let fd = new FormData();                 
    fd.append('Id',JSON.stringify(Id)); 
    return this.httpClient.post('http://localhost:51680/api/AppUser/ChangeManagerStatus', fd);
}

UnbanManager(id : number){
  this.BanOrUnban(id).subscribe(
    x => 
    {
      this.managers.find(m => m.Id == id).CanCreateService = true;
    }, 
    error => 
    {
      alert("Unban unsuccessful." + error.error.Message)
    }
  );
}

BanManager(id : number){
  this.BanOrUnban(id).subscribe(
    x => 
    {
      this.managers.find(m => m.Id == id).CanCreateService = false;
    }, 
    error => 
    {
      alert("Ban unsuccessful." + error.error.Message)
    }
  );
}
}

