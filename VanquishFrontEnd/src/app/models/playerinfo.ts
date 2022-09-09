export class Playerinfo {
    
    public id:number;
    public character:string;
    public city:string;
    public silver:number;
   
    constructor(id: number, character: string, city: string, silver:number) {
        this.id=id,
        this.character=character,
        this.city=city;
        this.silver=silver
        
     }
}
