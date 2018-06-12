import { Component, OnInit } from '@angular/core';
import { LocalStorageEnum } from '../localStorageEnum';
import { LocalStorageService } from '../local-storage.service'

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

    this.username = localStorage.getItem(LocalStorageEnum.UserName.toString());
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
