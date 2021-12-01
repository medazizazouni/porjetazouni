export class Utilisateurs {
    identifiant:string;
    password:string;
    role:string;

    constructor(identifiant:string,password:string,role:string){
            this.identifiant=identifiant;
            this.password=password;
            this.role=role;
        }
    public get getRole(){
       return this.role;
    }    
}
