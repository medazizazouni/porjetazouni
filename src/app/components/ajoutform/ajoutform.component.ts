import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotel } from 'src/app/classes/hotel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-ajoutform',
  templateUrl: './ajoutform.component.html',
  styleUrls: ['./ajoutform.component.css']
})
export class AjoutformComponent implements OnInit {
 listHotel:Hotel[]=[]; 
ajout:FormGroup |any;
currentHotel:Hotel=new Hotel(0,"","",0,"",false,"");
  constructor(private fb:FormBuilder,private snackbar:MatSnackBar,private hotelserve:HotelService) { }
  onSubmitForm(){
    this.currentHotel=new Hotel(this.listHotel.length+1,
    this.ajout.get('region').value,
    this.ajout.get('nom').value,
    this.ajout.get('prix').value,
    this.ajout.get('photo').value,
    this.ajout.get('promotion').value,
    this.ajout.get('description').value,);
    this.hotelserve.addHotel(this.currentHotel).subscribe(data=>this.listHotel.push(data));} 

    openSnackBar() {
      this.snackbar.open("modification faites avec succes!","",{
        duration: 600
      });
    } 

  ngOnInit(): void {
    
    this.hotelserve.getListHotel().subscribe(data=>this.listHotel=data);
    this.ajout=this.fb.group({
      region:['',Validators.required],
      nom:['',Validators.required],
      prix:['',Validators.required],
      photo:['',Validators.required],
      description:['',Validators.required],
      promotion:[''],
    })
  }

}
