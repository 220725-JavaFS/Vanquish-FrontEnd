import { Account } from "./account";

export class Playerinfo {
    
    public id:number;
    public character:string;
    public city:string;
    public silver:number;
    public account!: Account;
   
    constructor(id: number, character: string, city: string, silver:number, account:Account) {
        this.id=id,
        this.character=character,
        this.city=city,
        this.silver=silver,
        this.account = account
        
     }
}
