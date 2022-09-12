import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { Weather } from 'src/app/models/weather';
import { WeatherCoord } from 'src/app/models/weather-coord';
import { LoginService } from 'src/app/services/login.service';
import { WeatherService } from 'src/app/services/weather.service';
//import { Account } from '~/models/account';

@Component({
  selector: 'app-battle-ground',
  templateUrl: './battle-ground.component.html',
  styleUrls: ['./battle-ground.component.css']
})
export class BattleGroundComponent implements OnInit {
  tempClass:string = "Warrior"
  playerHealth: number = 150;
  monsterHealth: number = 150;
  physMod: number = 0;
  agilMod: number = 0;
  magicMod: number = 0;
  weatherMod: number = 0;  
  mDamage: number = 0;
  pDamage: number = 0;
  sunny: boolean = false;
  cloudy: boolean = false;
  rainy: boolean = false;
  weatherCoord:WeatherCoord[]=[];
  weather:Weather = <Weather>{};
  weatherData: any;
  buttonclicked: boolean = false;
  win: boolean = false;
  loss: boolean = false;
  accounts: Account[] = [];

  pUser: string = 'test';
  pCity: string = '';
  pCharacter: string = '';
  pSilver: number = 0;
  constructor(private weatherService: WeatherService, private loginService: LoginService, private router: Router) {  }

  ngOnInit(): void{
    
    this.profile();
    
    this.getWeatherByCity(this.pCity);//input user.city    
    this.setWeatherMod(this.pCharacter); //input user.character
    
    
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
          this.weather.weatherMain == 'Mist' ||
          this.weather.weatherMain == 'Thunderstorm' )
        {
              this.rainy = true;
        } else {
          this.sunny = true;
        }
      }
  }) 
  }   
  setWeatherMod(theCharacter:string) { //input user.character
    switch (theCharacter) { //change to user.character
      case "Warrior":
        this.physMod = 1.5;
        this.agilMod = 1.2;
        this.magicMod = 0.2;
        if (this.sunny == true) {
          this.weatherMod = 1.5;
        } else if (this.rainy == true) {
          this.weatherMod=0.8
        } else if (this.cloudy == true) {
          this.weatherMod=1.0
        }
        
        break;
      case "Wizard":
        this.physMod = 0.5;
        this.agilMod = 0.4;
        this.magicMod = 1.5;
        if (this.sunny == true) {
          this.weatherMod = 1;
        } else if (this.rainy == true) {
          this.weatherMod = 1.5
        } else if (this.cloudy == true) {
          this.weatherMod = 1.3
        }        
        break;
      case "Rogue":
        this.physMod = 1.2;
        this.agilMod = 1.5;
        this.magicMod = 0.5;
        if (this.sunny == true) {
          this.weatherMod = 0.7;
        } else if (this.rainy == true) {
          this.weatherMod = 1.2
        } else if (this.cloudy == true) {
          this.weatherMod = 2.0
        }
        
        break;
      case "Paladin":
        this.physMod = 1.2;
        this.agilMod = 0.8;
        this.magicMod = 1.2;
        this.weatherMod = 1.0;
        break;
    
      default:
        break;
    }
      
    }

  randomRoll() {
    return Math.floor(Math.random() * 21);
  }
  

  PhysicalAttack(health: number, monsterhealth: number) {   
    this.buttonclicked = true;
    const Damage = this.randomRoll(); 
    const PDamage = this.randomRoll();
    this.setWeatherMod(this.pCharacter);
    let Playerdamage = (PDamage * this.physMod) * this.weatherMod;
    Playerdamage = Math.round(Playerdamage)
    monsterhealth = monsterhealth - Playerdamage;
    health = health - Damage;
    this.monsterHealth = monsterhealth;
    this.playerHealth = health;
    this.mDamage = Damage;
    this.pDamage = Playerdamage;
    if (this.monsterHealth <= 0 && this.playerHealth >0) {
      this.win = true;
        //add 1 silver to database
        
    } else if (this.playerHealth <= 0 && this.monsterHealth>0) {
      this.loss = true;
       
      
    }
  }
  AgilityAttack(health: number, monsterhealth: number) {
    this.buttonclicked = true;
    const Damage = this.randomRoll();
    const PDamage = this.randomRoll();
    this.setWeatherMod(this.pCharacter);
    let Playerdamage = (PDamage * this.agilMod) * this.weatherMod;
    Playerdamage = Math.round(Playerdamage)
    monsterhealth = monsterhealth - Playerdamage;
    health = health - Damage;
    this.monsterHealth = monsterhealth;
    this.playerHealth = health;
    this.mDamage = Damage;
    this.pDamage = Playerdamage;
    if (this.monsterHealth <= 0) {
      this.win = true;
      //add 1 silver to database
      
    } else if (this.playerHealth <= 0) {
      this.loss = true;      
    }
  }
  MagicAttack(health: number, monsterhealth: number) {
    this.buttonclicked = true;
    const Damage = this.randomRoll();
    const PDamage = this.randomRoll();
    this.setWeatherMod(this.pCharacter);
    let Playerdamage = (PDamage * this.agilMod) * this.weatherMod;
    Playerdamage = Math.round(Playerdamage)
    monsterhealth = monsterhealth - Playerdamage;
    health = health - Damage;
    this.monsterHealth = monsterhealth;
    this.playerHealth = health;
    this.mDamage = Damage;
    this.pDamage = Playerdamage;
    if (this.monsterHealth <= 0) {
      this.win = true;
      //add 1 silver to database
      
    } else if (this.playerHealth <= 0) {
      this.loss = true;      
    }
  }
  reload() {
    this.router.navigate(['redirect']);
}
  profile() {
    this.pUser = this.loginService.user.user;
    this.pCharacter = this.loginService.user.character;
    this.pCity = this.loginService.user.city;
    this.pSilver = this.loginService.user.silver;
  }
  

}

