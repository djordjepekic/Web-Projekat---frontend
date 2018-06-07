import { Component } from '@angular/core';
import { UserService } from './services/user.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers: [UserService]
})

export class AppComponent {
  title = 'moja aplikacija';  
  private methodResult;
  constructor(private UserService: UserService) { }

  callGet(){
    this.UserService.getMethodDemo()
      .subscribe(
          data => {
            this.methodResult = data;
            alert(data);
          }
      )
      
  }
}
