import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../user-register.service';
import { UserRegistration } from "../register/userRegistrationModel";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Username : string;
  Password : string;
  Email : string;
  ConfirmPassword: string;
  Role: string;

  constructor(private userService : UserRegisterService) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.userService.register(new UserRegistration(this.Username, this.Password, this.Role, this.Email, this.ConfirmPassword, false)).subscribe();
    this.Email = "";
    this.Password = "";
    this.ConfirmPassword = "";
  }
}
