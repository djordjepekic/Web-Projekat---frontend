import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username : string;
  Password : string;

  constructor(private userService: UserLoginService, private router: Router) { }

  ngOnInit() {
  }

  logIn(form: NgForm) : void{
    if(this.Username == "" ||
      this.Password == "")
      {
         alert("Some required fields are empty.")
      }
      else
      {
        this.userService.logIn(form.value)
      }
  }
}
