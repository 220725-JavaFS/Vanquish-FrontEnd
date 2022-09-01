import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './model/login/login.component';
import { CreateAccountComponent } from './model/create-account/create-account.component';
import { PlayerProfileComponent } from './model/player-profile/player-profile.component';
import { BattleGroundComponent } from './model/battle-ground/battle-ground.component';
import { PlayerInfoPipe } from './pipes/player-info.pipe';
import { ComponentsComponent } from './components/components.component';
import { UpdatePlayerComponent } from './componets/update-player/update-player.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    PlayerProfileComponent,
    BattleGroundComponent,
    PlayerInfoPipe,
    ComponentsComponent,
    UpdatePlayerComponent,
    NavBarComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
