import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Hotel } from 'src/app/classes/hotel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifform',
  templateUrl: './modifform.component.html',
  styleUrls: ['./modifform.component.css']
})
export class ModifformComponent implements OnInit {
  modification:FormGroup | any;
  modifEnCours:Hotel=new Hotel(0,"","",0,"",false,"");;
  currentHotel:Hotel=new Hotel(0,"","",0,"",false,"");
  constructor(private hotelserv:HotelService,@Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder,private snackbar:MatSnackBar) { }
  onSubmitForm(){
    this.modifEnCours=new Hotel(this.data.hotel.id,
    this.modification.get('region').value,
    this.modification.get('nom').value,
    this.modification.get('prix').value,
    this.modification.get('photo').value,
    this.modification.get('promotion').value,
    this.modification.get('description').value,);
    this.hotelserv.modifHotel(this.modifEnCours).subscribe(data=>console.log(this.modifEnCours)); }

    openSnackBar() {
      this.snackbar.open("modification faites avec succes!","",{
        duration: 600
      });
    }  

  ngOnInit(): void {
    
    this.hotelserv.getOneHotel(this.data.hotel.id).subscribe(data=>{this.currentHotel=data;console.log(this.currentHotel)});
    this.modification=this.fb.group({
      region:[''],
      nom:[''],
      prix:[''],
      photo:[''],
      description:[''],
      promotion:[''],
    })
    
  }

}
