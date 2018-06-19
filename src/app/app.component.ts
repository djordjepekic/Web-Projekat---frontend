import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user'
import { Vehicle} from './models/vehicle'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers: [UserService]
})

export class AppComponent {
  title = 'Rent a vehicle';  
  private User: User;
  
  constructor() { }
}
