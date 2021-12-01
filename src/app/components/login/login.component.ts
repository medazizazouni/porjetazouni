
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Utilisateurs } from 'src/app/classes/utilisateurs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login:FormGroup |any;
  utilisateur:Utilisateurs[]=[];
  test:boolean=true;
  
   
  onSubmitForm(){
    if(this.utilservice.checkUser(this.login.get('identifiant').value,this.login.get('motDePasse').value)==false)
      {return this.test=false;}
    else{
      const user:Utilisateurs=new Utilisateurs(this.login.get('identifiant').value,this.login.get('motDePasse').value,this.utilservice.checkRole(this.login.get('identifiant').value,this.login.get('motDePasse').value));
      this.authService.saveUser(user);
      window.location.reload();
      return this.test=true;
    }
    
   
    
  }

    
  public get getUserName()
 { return this.login.get('identifiant'); }
 public get getPassword()
 { return this.login.get('motDePasse'); }

  constructor(private utilservice:UtilisateursService,private loginservice:FormBuilder,private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.utilisateur=this.utilservice.getUtilisateur();
    this.login=this.loginservice.group({
      identifiant:['',Validators.required],
      motDePasse:['',Validators.required],
     

    })
    
   

    
  }

}
