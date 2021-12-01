import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/classes/hotel'
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { Utilisateurs } from 'src/app/classes/utilisateurs';
import { Reservation } from 'src/app/classes/reservation';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-servjson',
  templateUrl: './servjson.component.html',
  styleUrls: ['./servjson.component.css']
})
export class ServjsonComponent implements OnInit {
  listehotel:Hotel[]=[];
  listeutil:Utilisateurs[]=[];
  listereserve:Reservation[]=[];


  constructor(private hotelservice:HotelService,private utilisateurservice:UtilisateursService, private reservationservice:ReservationService) { }

  ngOnInit(): void {
    this.hotelservice.getListHotel().subscribe(data =>this.listehotel=data);
    this.listeutil=this.utilisateurservice.getUtilisateur();
    this.reservationservice.getListReservation().subscribe(data =>{this.listereserve=data;console.log(this.listereserve)});
  }

}
