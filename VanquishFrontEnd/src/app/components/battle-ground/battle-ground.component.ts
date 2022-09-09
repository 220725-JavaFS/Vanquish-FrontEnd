import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherCoord } from 'src/app/models/weather-coord';
import { WeatherService } from 'src/app/services/weather.service';
//import { Account } from '~/models/account';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.css']
})
export class BattleGroundComponent implements OnInit {

  sunny: boolean = false;
  cloudy: boolean = false;
  rainy: boolean = false;
  weatherCoord:WeatherCoord[]=[];
  weather:Weather = <Weather>{};
  weatherData:any;
  constructor(private weatherService:WeatherService) {  }

  ngOnInit(): void{
    this.getWeatherByCity("Dallas");
    
  }

  /*
  * getWeatherByCity(city), uses two subscibers, first it gets the lat/lon from Coord API 
  * using City, Then it gets the lat and lon and calls the second subscriber to get the Main Weather
  * and weather description
  */
  
  private getWeatherByCity(city:string){
    this.weatherService.getGeoLocationByCity(city).subscribe({
      next:(data:WeatherCoord[])=>{
        this.weatherCoord=data;
        for(var weather of this.weatherCoord){
          this.getWeather(weather.lat,weather.lon);
        }
      }
    })
  }

  private getWeather(lat:number,lon:number){
    this.weatherService.getWeatherByCoord(lat,lon).subscribe({
      next:(data:any)=>{
        this.weatherData=data;
        this.weather.weatherMain = this.weatherData.weather[0].main;
        this.weather.weatherDescription = this.weatherData.weather[0].description;
        this.weather.weatherTemp = this.weatherData.main.temp;
        this.weather.weatherTemp = (((this.weather.weatherTemp - 273.15)*9)/5)+32;
        if (
          this.weather.weatherMain == 'Clear')
        {
          this.sunny = true;
        } else if (
          this.weather.weatherMain == 'Clouds')
        {
          this.cloudy = true;
        } else if (            
          this.weather.weatherMain == 'Rain' ||
          this.weather.weatherMain == 'Drizzle' ||
          this.weather.weatherMain == 'Thunderstorm' )
        {
              this.rainy = true;
        } else {
          this.sunny = true;
        }
      }
  }) 
  }   

}

