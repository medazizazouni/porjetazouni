import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/classes/reservation';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Utilisateurs } from 'src/app/classes/utilisateurs';
import { SuprimerComponent } from './suprimer/suprimer.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-vosreservation',
  templateUrl: './vosreservation.component.html',
  styleUrls: ['./vosreservation.component.css']
})
export class VosreservationComponent implements OnInit {
  listereserve:Reservation[]=[];
  ReservationDisplayedColumns:string[] = ['Client','Hotel','DateDebut','NbrJour','NbrAdulte','NbrEnfant'];
  currentuser:Utilisateurs=this.authService.getUser();
  
  
  suprreservation(r:Reservation){
    const dialogRef = this.dialog.open(SuprimerComponent, {
      width: '500px',
      data: {Reservation: r}
       });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });}  
  

  constructor(private reservationservice:ReservationService,private authService:AuthServiceService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reservationservice.getListReservation().subscribe(data=>this.listereserve=data);
  }

}
