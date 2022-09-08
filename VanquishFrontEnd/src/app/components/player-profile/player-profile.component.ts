import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  ImagePath: string ='/assets/images/Default.png';

  constructor(private accountService:AccountService) { 
    //switch statement or if else statement depending on credentials and database
    this.ImagePath = '/assets/images/Warrior.png'
    //this.ImagePath = '/assets/images/Default.png'
    
  }

  ngOnInit(): void {
  }

  private getCharacter(character:string){
    //this.accountService.getAccountByID().getCharacter()
  }

}
