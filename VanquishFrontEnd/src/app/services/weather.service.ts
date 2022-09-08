import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Weather } from '../models/weather';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  getWeatherDetails(City: string) {
    throw new Error('Method not implemented.');
  }
  City: string = "Houston"

  constructor(private httpClient: HttpClient) { }

  getWeather(City: string): Observable<any> {
    return this.httpClient.get('http://api.weatherstack.com/current?access_key=a070930780ba3b2ea3632e06e6507f4a&query=' + City);
      
    

  }
}
