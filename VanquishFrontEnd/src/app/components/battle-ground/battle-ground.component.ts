import { Component, OnInit } from '@angular/core';




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
  //weather: Weather[] = [];
  weatherDetails = {
    weather_descriptions: ''
  };
  constructor(private weatherService: WeatherService) { }  

  ngOnInit() {
    this.getTheWeather;
   
    
  }

  
  getTheWeather(City: string) {
    this.weatherService.getWeather(City).subscribe((response)=> {this.weatherDetails={
weather_descriptions:response.weather[0].descriptions}});
    }
    
    //     this.weather = data;
    //     return this.weather;
    //   }
    // }
    // )
  }
 
  
   
    
   


  

 

