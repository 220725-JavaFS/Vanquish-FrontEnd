import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedUserEvent } from '../components/login/login.component';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;
  

  private baseUrl = "http://localhost:8084/data/login/";
  
  account:Account = <Account>{};
  $isLoggedIn = new EventEmitter();
  
  user: LoggedUserEvent = {user: "" , city: "", character: "", silver: 0};

  constructor(private httpClient: HttpClient, private router: Router) { }

  checkUser(account: Account): Observable<Account>{
    return this.httpClient.post<Account>(this.baseUrl, account)
  }

  checkAccount(username:string,password:string){
    let acc = new Account(0,username, password, '', '', 0);
    this.checkUser(acc).subscribe({
      next:(data:Account)=>{
        this.account=data;
        if(this.account != null){
          console.log("-----This is from service layer-----")
          console.log(data)
          console.log("------------------------------------")
          this.user.user = data.username;
          this.user.city = data.city;
          this.user.character = data.character;
          this.user.silver = data.silver;
          
          this.$isLoggedIn.emit(this.user);
          this.router.navigate(['playerProfile']);
        }
        
      }
    })
  }
  // getProfile(user:Account):Observable<Account> {
  //   return this.httpClient.get<Account>('http://localhost:8084/data/profile/'+user)
  // }


}
