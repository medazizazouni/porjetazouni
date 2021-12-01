export class Hotel {
    id:number;
    region:String;
    nom:string;
    prix:number;
    photo:string;

    promotion:boolean;
    description:string;
    constructor(region:String,nom:string,prix:number,
        photo:string,
        promotion:boolean,id:number,description:string){
            this.description=description
            this.region=region;
            this.nom=nom;
            this.prix=prix;
            this.photo=photo;
            this.promotion=promotion;
            this.id=id;
        }}
