import { Component, Inject, OnInit } from '@angular/core';
import { Hotel } from 'src/app/classes/hotel';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-suprimform',
  templateUrl: './suprimform.component.html',
  styleUrls: ['./suprimform.component.css']
})
export class SuprimformComponent implements OnInit {
  supprEnCours:Hotel=new Hotel(0,"","",0,"",false,"");

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private hotelserv:HotelService) { }

  supprimer(h:Hotel){
    this.hotelserv.supprHotel(h).subscribe(data=>console.log("hotel supprimer"))
  }

  ngOnInit(): void {
    this.hotelserv.getOneHotel(this.data.hotel.id).subscribe(data=>{this.supprEnCours=data;console.log(this.supprEnCours)});
  }

}
