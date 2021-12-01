export class Reservation {
    client:String;
    hotel:string;
    dateDebut:Date;
    nbjour:number;
    nbAdulte:number;
    nbEnfant:number;
    
    constructor(client:String,hotel:string,dateDebut:Date,nbAdulte:number,nbEnfant:number,nbjour:number){
        this.client=client;
        this.hotel=hotel;
        this.dateDebut=dateDebut;
        this.nbAdulte=nbAdulte;
        this.nbEnfant=nbEnfant;
        this.nbjour=nbjour;
        
        }
}
