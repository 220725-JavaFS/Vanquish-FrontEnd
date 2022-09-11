import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account:Account = <Account>{};
  username: string = '';
  password: string = '';
  user: LoggedUserEvent = {user: "" , city: "", character: "", silver: 0};
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.loginService.checkAccount(this.username,this.password);
  }

}

export interface LoggedUserEvent{
    user: string;
    city: string;
    character: string;
    silver: number;
}
