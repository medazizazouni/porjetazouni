import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Utilisateurs } from 'src/app/classes/utilisateurs';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentuser:Utilisateurs=this.authService.getUser();
  userrole:string='';
  constructor(private authService:AuthServiceService , private utilservice:UtilisateursService) { }

  ngOnInit(): void {
  this.userrole=this.utilservice.checkRole(this.currentuser.identifiant,this.currentuser.password);
   
    
  }

  
  logOut(){
    this.authService.signOut();
    window.location.reload();
  }
}
