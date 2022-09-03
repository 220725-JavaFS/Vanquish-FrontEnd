import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  account1 = new Account(1,"First", "Last", "User1", "Pwd","email@email.com",123456);
  account2 = new Account(2,"First2", "Last2", "User2", "Pwd2","email2@email.com",123456);
  accounts:Account[] = [this.account1,this.account2];
  constructor() { }

  ngOnInit(): void {
  }

}
