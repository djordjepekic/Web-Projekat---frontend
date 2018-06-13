import { Injectable } from '@angular/core';
import { LocalStorageEnum } from './localStorageEnum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  IsLoggedIn() : boolean {
    if (localStorage.getItem("username") !== null)
    {
        return true;
    }
    
    return false;
  }

  isAdmin() : boolean {
    if ( localStorage.getItem(LocalStorageEnum.Role.toString()) == "Admin")
    {
        return true;
    }

    return false;
}

isManager() : boolean {
    if ( localStorage.getItem(LocalStorageEnum.Role.toString()) == "Manager")
    {
        return true;
    }

    return false;
}

isUser() : boolean {
    if ( localStorage.getItem(LocalStorageEnum.Role.toString()) == "AppUser")
    {
        return true;
    }

    return false;
  }
}
