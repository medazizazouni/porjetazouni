import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/classes/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import {MatDialog, } from '@angular/material/dialog';
import { ReservationformComponent } from '../reservationform/reservationform.component';
import {MatAccordion} from '@angular/material/expansion';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;

  hotel:Hotel[]=[]
  currentHotel!:Hotel
  id:number=0;
  constructor(private route:ActivatedRoute , private hotelservice:HotelService,public dialog: MatDialog){ }


  reserver(): void {
    const dialogRef = this.dialog.open(ReservationformComponent, {
      width: '500px',
      data: {nom: this.currentHotel}
      
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

  

  ngOnInit(): void {
    
    // this.hotelservice.getListHotel().subscribe(data =>this.hotel=data);
    this.id=this.route.snapshot.params['id'];
   this.hotelservice.getOneHotel(this.id).subscribe(data =>{this.currentHotel=data;console.log(this.currentHotel)});

  }
}


