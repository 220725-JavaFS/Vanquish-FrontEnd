import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = "http://localhost:8084/data/registeruser";
  constructor(private httpClient:  HttpClient) { }

  newUser(account: Account): Observable<Account>{
    return this.httpClient.post<Account>(this.baseUrl, account)
  }
  
}
