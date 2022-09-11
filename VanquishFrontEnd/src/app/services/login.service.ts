import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8084/data/login/";
  constructor(private httpClient: HttpClient) { }

  checkUser(account: Account): Observable<Account>{
    return this.httpClient.post<Account>(this.baseUrl, account)
  }
}
