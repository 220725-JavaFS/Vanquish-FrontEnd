import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.css']
})
export class BattleGroundComponent implements OnInit {

  City: string = "Houston";
  visibility: boolean = false;
  weather: Weather[] = [];
  constructor(private weatherService: WeatherService) { }  

  ngOnInit(): void {
    
    this.getTheWeather(this.City);
    
  }

  
  public getTheWeather(City: string) {
    this.weatherService.getWeather(City).subscribe({
      next: (data: Weather[]) => {
        this.weather = data;
        return this.weather;
      }
    }
    )
  }
 
  
   
    
   


  

 
}
