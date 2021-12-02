import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hotel } from 'src/app/classes/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-description-hotel',
  templateUrl: './description-hotel.component.html',
  styleUrls: ['./description-hotel.component.css']
})
export class DescriptionHotelComponent implements OnInit {
  id:any;
  Hotel!:Hotel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private hotelService:HotelService) { }

  ngOnInit(): void {
    this.id=this.data;
    console.log(this.id);
    this.hotelService.getOneHotel(this.id).subscribe(
      data=>{
        this.Hotel=data;
      }
    )

  }

}
