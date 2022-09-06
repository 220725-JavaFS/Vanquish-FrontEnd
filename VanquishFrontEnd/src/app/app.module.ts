import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component'
import { RegistrationComponent } from './components/registration/registration.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { BattleGroundComponent } from './components/battle-ground/battle-ground.component';
import { PlayerInfoPipe } from './pipes/player-info.pipe';
import { AccountListComponent } from './components/account-list/account-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    LoginComponent,
    RegistrationComponent,
    UpdatePlayerComponent,
    PlayerProfileComponent,
    BattleGroundComponent, 
    PlayerInfoPipe, AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
