import { Component, OnInit } from '@angular/core';

import { Account } from 'src/app/models/account';
import { NgSwitchCase } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';
import { LoggedUserEvent, LoginComponent } from '../login/login.component';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})

export class PlayerProfileComponent implements OnInit {

  ImagePath: string[] = ['/assets/images/Default.png','/assets/images/Warrior.png','/assets/images/Paladin.png','/assets/images/Wizard.png','/assets/images/Rogue.png'];
  editForm!: FormGroup;
  character =['Default','Paladin','Warrior','Wizard','Rogue'];
  ngOptions = this.character[0];
  

  //account:Account=new Account[];
  accounts: Account[]=[];
  pId:number=0;
  pUser:string='';
  pCity:string='';
  pCharacter:string='';
  pSilver:number=0;
  username!: string;

  constructor(private loginService: LoginService, private route:ActivatedRoute, private accountService:AccountService, private fb:FormBuilder ) { }

  
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    // this.accountService.getAccountByUsername(this.username).subscribe(data=>{
    //   this.account=data;
    // });
    this.editForm = new FormGroup({
      city: new FormControl()
  });
    this.profile();
    //TODO: use this data to show in player profile
  }
  profile(){
    this.pUser=this.loginService.user.user;
    this.pCharacter=this.loginService.user.character;
    this.pCity=this.loginService.user.city;
    this.pSilver=this.loginService.user.silver; 
  }
  update(){
    this.loginService.updateUser(this.username, this.accounts).subscribe((data:Account[])=>{
      this.accounts=data;
    })
  }
  onSubmit(){
    

  }
}
  
  

  



 
