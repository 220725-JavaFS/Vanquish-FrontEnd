import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { BattleGroundComponent } from './components/battle-ground/battle-ground.component';
import { AccountListComponent } from './components/account-list/account-list.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "updatePlayer",
    component: UpdatePlayerComponent
  },
  {
    path: "playerProfile",
    component: PlayerProfileComponent
  },
  {
    path: "battleGround",
    component: BattleGroundComponent
  },
  {
    path: "leaderboard",
    component: AccountListComponent 
  },
  {
    path: "",
    component: LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
