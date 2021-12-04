import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/classes/reservation';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-suprimer',
  templateUrl: './suprimer.component.html',
  styleUrls: ['./suprimer.component.css']
})
export class SuprimerComponent implements OnInit {
reservation :Reservation=new Reservation(0,"","",new Date(),0,0,0);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private reserveserv:ReservationService) { }

  supprimer(){
    this.reserveserv.supprReservation(this.reservation).subscribe(data=>window.location.reload());
  }

  ngOnInit(): void {
    this.reserveserv.getOneReservation(this.data.Reservation).subscribe(data=>this.reservation=data);
  }

}
