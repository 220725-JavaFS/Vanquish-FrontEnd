import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playerinfo } from '../models/playerinfo';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class PlayerinfoService {

  private baseURL = 'http://localhost:8080/Webapp/accounts/'
  constructor(private httpClient: HttpClient) { }

  getAccountByID(id: number): Observable<Account> {
    return this.httpClient.get(this.baseURL + `${id}`, {
      headers: {
        accept: "application/json"
      }
    }) as Observable<Account>;
  }
  getPlayerByID(id: number): Observable<Playerinfo> {
    return this.httpClient.get(this.baseURL + `${id}`, {
      headers: {
        accept: "application/json"
      }
    }) as Observable<Playerinfo>;
  }
}