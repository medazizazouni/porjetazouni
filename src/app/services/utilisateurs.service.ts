import { Injectable } from '@angular/core';
import { Utilisateurs } from '../classes/utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
utilisateur:Utilisateurs[]=[
  new Utilisateurs('user','user','user'),
  new Utilisateurs('admin','admin','admin'),
  new Utilisateurs('owner','owner','owner'),
]

  constructor() { }

  public getUtilisateur(){
    return this.utilisateur;
  }
  
  checkRole(username:string,password:string){
    for(let i=0;i<this.utilisateur.length;i++){
      if (this.utilisateur[i].identifiant==username){
        if (this.utilisateur[i].password==password){
          return this.utilisateur[i].role;
        }
      }
    }
    return 'null';
    }

  

  checkUser(username:string,password:string){
    for(let i=0;i<this.utilisateur.length;i++){
    if (this.utilisateur[i].identifiant==username){
      if (this.utilisateur[i].password==password){
        return true;
      }
    }
  }
  return false;
  }
}
