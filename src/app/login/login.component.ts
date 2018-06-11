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

  logIn(form: NgForm): void {
    this.userService.logIn(this.Username, this.Password).subscribe(asd => {
      localStorage.setItem('token_id', asd.json().access_token);
      localStorage.setItem('role', asd.headers.get('Role'));
      localStorage.setItem('user', this.Username);

      console.log(asd.json());

      if (localStorage.getItem("role") != undefined) {
        this.router.navigate(['/home']);
      }
    });
  }
}
