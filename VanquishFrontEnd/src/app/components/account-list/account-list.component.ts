import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts:Account[] = [];
  account:Account = <Account>{};
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
    this.getAccount(1);
  }

  private getAccounts(){
    this.accountService.getAccounts().subscribe({
      next:(data:Account[])=>{
        this.accounts=data;
      }
    }
    )
  }

  private getAccount(id:number){
    this.accountService.getAccountByID(id).subscribe({
      next:(data:Account)=>{
        this.account=data;
      }
    }
    )
  }

}
