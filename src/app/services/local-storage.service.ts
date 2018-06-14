import { Injectable } from '@angular/core';

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
    if ( localStorage.getItem("role") == "Admin")
    {
        return true;
    }

    return false;
}

isManager() : boolean {
    if ( localStorage.getItem("role") == "Manager")
    {
        return true;
    }

    return false;
}

isUser() : boolean {
    if ( localStorage.getItem("role") == "AppUser")
    {
        return true;
    }

    return false;
  }
}
