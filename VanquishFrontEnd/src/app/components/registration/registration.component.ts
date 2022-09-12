import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  account:Account = <Account>{};
  username:string = '';
  password:string = '';
  city:string = '';
  character:string = '';
  
  constructor(private resService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    
  }
  createAccount() {
    let acc = new Account(0,this.username,this.password,this.city,this.character , 0);
    this.resService.newUser(acc).subscribe((
      reponse: Account)=>{
        this.account = reponse;
      }
    );
    this.router.navigate(['login']);
  }
  
  
}
