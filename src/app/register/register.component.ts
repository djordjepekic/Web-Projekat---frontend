import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../services/user-register.service';
import { UserRegistration } from "../register/userRegistrationModel";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Username : string;
  Password : string;
  FullName: string;
  Email : string;
  ConfirmPassword: string;
  Role: string;
  DateOfBirth: Date;


  constructor(private userService : UserRegisterService, private route : Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.userService.register(new UserRegistration(this.Username, this.Password, this.Role, this.Email, this.ConfirmPassword, this.DateOfBirth, this.FullName)).subscribe(o=>{this.route.navigate(['/home'])});
  }
}
