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

  ImagePath: string = '/assets/images/Default.png';
  ImagePathWar: string = '/assets/images/Warrior.png'
  ImagePathPal: string = '/assets/images/Paladin.png'
  ImagePathWiz: string = '/assets/images/Wizard.png'
  ImagePathRog: string = '/assets/images/Rogue.png'

 

  character:string='';
  image:string='';
 
  Character: string[]=[];
  
  playerCharacter:Playerinfo[]=[];

  constructor(private playerService:PlayerinfoService) { 
    

    
    
  }
  

  ngOnInit(): void {
  }


}
  



 
