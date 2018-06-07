import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers: [UserService]
})

export class AppComponent {
  title = 'moja aplikacija';  
  private User: User;
  constructor(private UserService: UserService) { }

  callGet(){
    this.UserService.getMethodDemo()
      .subscribe(
          data => {
            this.User = data;
            console.log(this.User);
          }
      )
      
  }
}
