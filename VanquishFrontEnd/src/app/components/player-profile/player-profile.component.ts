import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/services/account.service';

import { Playerinfo } from 'src/app/models/playerinfo';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';


@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  ImagePath: string ='/assets/images/Default.png';

  //constructor(private accountService:AccountService) { 
    //switch statement or if else statement depending on credentials and database
   // this.ImagePath = '/assets/images/Warrior.png'
    //this.ImagePath = '/assets/images/Default.png'

  character:string='';
  image:string='';
  ImagePath: string='';
  Character: string[]=[];
  
  playerCharacter:Playerinfo[]=[];

  constructor(private playerService:PlayerinfoService) { 
    this.getImage(1);

    
    //switch statement or if else statement depending on credentials and database
    //this.ImagePath =this.image;
    //this.Character=[this.character,this.image];
    // this.Character=['Wizard','/assets/images/Wizard.png'];
    // this.Character=['Rogue','/assets/images/rogue.png'];
    // this.Character=['Warrior','/assets/images/Warrior.png'];
  }
  private getImage(id: number) {
    this.playerService.get
  }

  ngOnInit(): void {
  }
  public choice: string='Warrior';
  if(_choice='Paladin'){
   this.image='/assets/images/Paladin.png';
  }
  if1 (_choice='Warrior') {
   this.image='/assets/images/Warrior.png';
  }
  if2(_choice='Rogue') {
   this.image='/assets/images/rogue.png';
  }
  if3(_choice='Wizard') {
   this.image='/assets/images/Wizard.png';
  }
  if4(_choice='Default'){
   this.image='/assets/images/Default.png';
  }


 }


 



  private getCharacter(character:string){
    //this.accountService.getAccountByID().getCharacter()
  }

}

