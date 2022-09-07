import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '~/models/account';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.css']
})
export class BattleGroundComponent implements OnInit {

  constructor(private httpClient: HttpClient) {  }

  ngOnInit(): void {
    let City: string;
    let weather: string;
    //Assign city from player profile city location
    City = Account.city;
    weather = this.getWeather(City);
    
    
  }

  getWeather(location: string) {
    let JSONweather = this.httpClient.get('http://api.weatherstack.com/current?access_key=a070930780ba3b2ea3632e06e6507f4a&query=' + location);
    let JSONObject = JSON.stringify(JSONweather);
    return JSONObject;
    
    //let objectValue = JSON.parse(JSONObject);
    //return objectValue["weather_descriptions"];


  }

 
}
