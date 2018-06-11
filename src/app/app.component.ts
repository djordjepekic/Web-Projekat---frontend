import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { VehicleService} from './services/vehicle.service'
import { User } from './models/user'
import { Vehicle} from './models/vehicle'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers: [UserService, VehicleService]
})

export class AppComponent {
  title = 'Rent a vehicle';  
  private User: User;
  constructor(private VehicleService: VehicleService) { }

  callGet(){
    this.VehicleService.getVehicles(1,5)
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

    this.VehicleService.postVehicle(newUser)
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
