import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 
import { UserLoginService } from '../user-login.service';

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
    this.userService.logIn(form.value)
  }
}
