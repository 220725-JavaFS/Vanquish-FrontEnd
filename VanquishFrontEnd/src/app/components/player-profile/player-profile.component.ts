import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

import { Playerinfo } from 'src/app/models/playerinfo';
import { PlayerinfoService } from 'src/app/services/playerinfo.service';
import { Account } from 'src/app/models/account';


@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  ImagePath: string[] = ['/assets/images/Default.png','/assets/images/Warrior.png','/assets/images/Paladin.png','/assets/images/Wizard.png','/assets/images/Rogue.png'];
  // ImagePathWar: string = '/assets/images/Warrior.png'
  // ImagePathPal: string = '/assets/images/Paladin.png'
  // ImagePathWiz: string = '/assets/images/Wizard.png'
  // ImagePathRog: string = '/assets/images/Rogue.png'

 

  character:string='';
  image:string='';
 
  players: Playerinfo[]=[];
  
 accounts:Account[]=[];

  constructor(private playerService:PlayerinfoService) { 
    
    
    
    
  }
  

  ngOnInit(): void {
    this.players=[{id:1,character: 'Warrior',city:'Houston',silver:25, account:{id:1, username:'user',userPwd:'test'}}]
    this.accounts=[{id:1,username:'test',userPwd:'test'}]
  }

  private getCharacterImage(id:number){
    // this.playerService.getPlayerById(id).subscribe({
    //   next:(data:any)=>{
    //     this.
    //   }
    // })
  }


}
  



 
