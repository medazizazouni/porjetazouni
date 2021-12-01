import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/classes/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-listehotel',
  templateUrl: './listehotel.component.html',
  styleUrls: ['./listehotel.component.css']
})
export class ListehotelComponent implements OnInit {
  search:any;
  hotel:Hotel[]=[];
  constructor(private hotelservice:HotelService, private route:Router) { }
  navigate(id:number){
    this.route.navigate(['/detail/'+id]);
  }

  ngOnInit(): void {
    this.hotelservice.getListHotel().subscribe(data =>{this.hotel=data;console.log(this.hotel)});
 }



}
