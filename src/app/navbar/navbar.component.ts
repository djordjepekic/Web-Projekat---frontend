import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Rent a Vehicle';

  constructor(private localStorageService : LocalStorageService) { }
  username: string;
  ngOnInit() {
  }

  IsLoggedIn() : boolean {

    this.username = localStorage.getItem("username");
    return this.localStorageService.IsLoggedIn();
  }

  IsAdmin() : Boolean {
    return this.localStorageService.isAdmin();
  }

  IsManager() : Boolean {
    return this.localStorageService.isManager();
  }

  IsUser() : Boolean {
    return this.localStorageService.isUser();
  }
}
