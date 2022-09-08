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


  weatherCoord:WeatherCoord[]=[];
  weatherCurrent:Weather[]=[];
  WeatherData:any;
  constructor(private weatherService:WeatherService) {  }

  ngOnInit(): void{
    this.getGeoCoordinatesByCity("Dallas");
    this.getWeather(44.34,10.99);
  }

  private getGeoCoordinatesByCity(city:string){
    this.weatherService.getGeoLocationByCity(city).subscribe({
      next:(data:WeatherCoord[])=>{
        this.weatherCoord=data;
        // delete this loop b4 final production
        for(var weather of this.weatherCoord){
          console.log(weather.name);
          console.log(weather.lon);
          console.log(weather.lat);
          console.log(weather.state);
          console.log(weather.country);
        }
        //Delete ^
      }
    })
  }

  private getWeather(lat:number,lon:number){
    this.weatherService.getWeatherByCoord(lat,lon).subscribe({
      next:(data:any)=>{
        this.WeatherData=data;
        // delete this loop b4 final production
        console.log(this.WeatherData);
        // for(var weather of this.weatherCurrent){
          
        // }
        //Delete ^
      }
  })
 
}
}

