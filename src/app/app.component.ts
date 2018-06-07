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

  callPost(){
    let newUser = {
      Adress: "Nova adresa",
      CanCreateService:false,
      DateOfBirth:"1-1-1999",
      FullName:"Pera Peric",
      Image:"",
      Verified:false
    };

    this.UserService.postMethodDemo(newUser)
    .subscribe(
      data => {
        if(data!=null)
          {
            alert("Success")
          }
        else
        {
          alert("Failure")
        }
      }
    )
  }
}
