import { Component, OnInit } from '@angular/core';

import { Playerinfo } from 'src/app/models/playerinfo';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';
import { Account } from 'src/app/models/account';
import { NgSwitchCase } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';
import { LoggedUserEvent, LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  ImagePath: string[] = ['/assets/images/Default.png','/assets/images/Warrior.png','/assets/images/Paladin.png','/assets/images/Wizard.png','/assets/images/Rogue.png'];

  character =['Default','Paladin','Warrior','Wizard','Rogue'];
  ngOptions = this.character[0];
  
 
  players: Playerinfo[]=[];
  accounts:Account[]=[];

  pUser:string='test';
  pCity:string='';
  pCharacter:string='';
  pSilver:number=0;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  this.profile();
    //TODO: use this data to show in player profile
  }
  profile(){
    this.pUser=this.loginService.user.user;
    this.pCharacter=this.loginService.user.character;
    this.pCity=this.loginService.user.city;
    this.pSilver=this.loginService.user.silver; 
  }
}
  
  

  



 
