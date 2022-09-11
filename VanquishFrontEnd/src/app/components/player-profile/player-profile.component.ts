import { Component, OnInit } from '@angular/core';

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
  image:string='';
 
  players: Account[]=[];

  user: LoggedUserEvent = {user: "" , city: "", character: "", silver: 0};
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    //this.players=[{id:1,character: 'Paladin',city:'Houston',silver:25, account:{id:1, username:'user',userPwd:'test', city:'Dallas',character:'Wizard', silver: 0}}]
    
    //TODO: use this data to show in player profile
    this.loginService.$isLoggedIn.subscribe((data) =>{
      console.log("I got this data in PlayerProfile component", data);
      this.user = data;
      console.log(this.user.character);
    })
  }
}
  



 
