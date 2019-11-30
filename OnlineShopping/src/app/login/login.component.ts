import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  txtUsername: string = "";
  txtPassword: string= "";

  constructor(public router: Router, public userService: UserServiceService) { }

  ngOnInit() {
  }

  login(){

    if(this.txtUsername == "admin" && this.txtPassword == "admin"){
      this.userService.setUserLoggedIn();
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/'])
    }
   
  }

}
