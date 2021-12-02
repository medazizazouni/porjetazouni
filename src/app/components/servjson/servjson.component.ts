import { Component, OnInit,ViewChild } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/classes/hotel'
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { Utilisateurs } from 'src/app/classes/utilisateurs';
import { Reservation } from 'src/app/classes/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import {MatDialog} from '@angular/material/dialog';
import { DescriptionHotelComponent } from './description-hotel/description-hotel.component';


@Component({
  selector: 'app-servjson',
  templateUrl: './servjson.component.html',
  styleUrls: ['./servjson.component.css']
})
export class ServjsonComponent implements OnInit {
  listehotel:Hotel[]=[];
  listeutil:Utilisateurs[]=[];
  listereserve:Reservation[]=[];
  displayedColumns: string[] = ['Identifiant', 'Roles'];
  HotelDisplayedColumns:string[] = ['Id','Region', 'Nom', 'Prix', 'Promotion', 'Description'];
  ReservationDisplayedColumns:string[] = ['Client','Hotel','DateDebut','NbrJour','NbrAdulte','NbrEnfant']


  constructor(public dialog: MatDialog,private hotelservice:HotelService,private utilisateurservice:UtilisateursService, private reservationservice:ReservationService) { }

  ngOnInit(): void {
    this.hotelservice.getListHotel().subscribe(data =>this.listehotel=data);
    this.listeutil=this.utilisateurservice.getUtilisateur();
    this.listereserve=this.reservationservice.getListReservation();
  }

  openDialog(id:any): void {
    const dialogRef = this.dialog.open(DescriptionHotelComponent, {
      width: '500px',
      data: id
      
     
    });
}

}
