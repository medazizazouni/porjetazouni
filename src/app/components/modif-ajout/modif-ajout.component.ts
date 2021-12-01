import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/classes/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import {MatDialog, } from '@angular/material/dialog';
import { AjoutformComponent } from '../ajoutform/ajoutform.component';
import { ModifformComponent } from '../modifform/modifform.component';

@Component({
  selector: 'app-modif-ajout',
  templateUrl: './modif-ajout.component.html',
  styleUrls: ['./modif-ajout.component.css']
})
export class ModifAjoutComponent implements OnInit {
  hotel:Hotel[]=[];

  constructor(private hotelservice:HotelService,public dialog: MatDialog) { }
  ajouter(): void {
    const dialogRef = this.dialog.open(AjoutformComponent, {
      width: '500px',
      
      
      
     
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });}

    modifier(h:Hotel): void {
      const dialogRef = this.dialog.open(ModifformComponent, {
        width: '500px',
        data: {hotel: h}
        
        
       
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      
      });}

  ngOnInit(): void {
    this.hotelservice.getListHotel().subscribe(data =>this.hotel=data);
  }

}
