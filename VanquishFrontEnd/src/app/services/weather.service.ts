import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';
import { WeatherCoord } from '../models/weather-coord';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiCoordKey = "&limit=1&appid=49f498bd3cad5e6af790e04e37042a5b";
  private baseCoordUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
  private apiWeatherKey = "&appid=bceb92912d9d5c24d56f1a14d7f2cc37";
  private baseWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=";
  constructor(private httpClient: HttpClient) { }

  getGeoLocationByCity(city:string): Observable<WeatherCoord[]>{
    return this.httpClient.get(this.baseCoordUrl+`${city}`+this.apiCoordKey,{
      headers:{
        accept: "application/json"
      }
    }) as Observable<WeatherCoord[]>;
  }

  getWeatherByCoord(lat:number, lon:number): Observable<Weather[]>{
    return this.httpClient.get(this.baseWeatherUrl+`${lat}&lon=${lon}`+this.apiWeatherKey,{
      headers:{
        accept: "application/json"
      }
    }) as Observable<Weather[]>;
  }
//   getWeatherByCoord(lat:number,lon:number): Observable<
}
