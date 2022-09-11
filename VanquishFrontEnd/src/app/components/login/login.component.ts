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
  acc1 = new Account(1,'user1','123','Dallas', "Wizard", 100);
  username: string = '';
  password: string = '';
  $isLoggedIn = new EventEmitter();
  user: LoggedUserEvent = {user: "" , city: "", character: "", silver: 0};
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.checkAccount();
  }

  checkAccount(){
    let acc = new Account(0,this.username, this.password, '', '', 0);
    console.log(acc)
    this.loginService.checkUser(acc).subscribe({
      next:(data:Account)=>{
        this.account=data;
        if(this.account != null){
          console.log(data)
          this.user.user = data.username;
          this.user.city = data.city;
          this.user.character = data.character;
          this.user.silver = data.silver;
          
          this.$isLoggedIn.emit(this.user);
          console.log(this.user);
          this.router.navigate(['playerProfile']);
        }
        
      }
    })
  }
}

export interface LoggedUserEvent{
    user: string;
    city: string;
    character: string;
    silver: number;
}
