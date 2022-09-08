import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
  ImagePath: string;

  constructor() { 
    //switch statement or if else statement depending on credentials and database
    this.ImagePath = '/assets/images/Warrior.png'
    
  }

  ngOnInit(): void {
  }

}
