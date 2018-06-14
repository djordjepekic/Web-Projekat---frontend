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

  isAdmin() : Boolean {
    return this.localStorageService.isAdmin();
  }

  isManager() : Boolean {
    return this.localStorageService.isManager();
  }

  isUser() : Boolean {
    return this.localStorageService.isUser();
  }
}
