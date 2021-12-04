export class Reservation {
    id:number;
    client:String;
    hotel:string;
    DateDebut:Date;
    nbjour:number;
    nbadult:number;
    nbenfant:number;
    
    constructor(id:number,client:String,hotel:string,DateDebut:Date,nbadult:number,nbenfant:number,nbjour:number){
        this.id=id;
        this.client=client;
        this.hotel=hotel;
        this.DateDebut=DateDebut;
        this.nbadult=nbadult;
        this.nbenfant=nbenfant;
        this.nbjour=nbjour;
        
        }
}
