import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //temp baseURL
  private baseURL = 'http://localhost:8080/Webapp/accounts/'
  
  constructor(private httpClient:HttpClient) { }

  getAccounts(): Observable<Account[]>{
    //return this.httpClient.get<Account[]>(`${this.baseURL}`);
    return this.httpClient.get(this.baseURL,{
      headers:{
        accept:"application/json"
      }
    }) as Observable<Account[]>;
  }

  getAccountByID(id:number):Observable<Account>{
    return this.httpClient.get(this.baseURL+ `${id}`,{
      headers:{
        accept:"application/json"
      }
    }) as Observable<Account>;
  }

  getAccountByUsername(username:string):Observable<Account>{
    return this.httpClient.get(this.baseURL+ `${username}`,{
      headers:{
        accept:"application/json"
      }
    }) as Observable<Account>;
  }
}
