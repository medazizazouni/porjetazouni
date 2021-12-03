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
  modifEnCours:Hotel=this.data.hotel;
  photo:any;
  constructor(private hotelserv:HotelService,@Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder,private snackbar:MatSnackBar) { }
  

  ngOnInit(): void {
    
    this.hotelserv.getOneHotel(this.data.hotel.id).subscribe(data=>{this.modifEnCours=data;console.log(this.modifEnCours)});
    this.modification=this.fb.group({
      region:[this.modifEnCours.region,Validators.required],
      nom:[this.modifEnCours.nom,Validators.required],
      prix:[this.modifEnCours.prix,Validators.required],
      // photo:[this.modifEnCours.photo,Validators.required],
      description:[this.modifEnCours.description,Validators.required],
      promotion:[this.modifEnCours.promotion,Validators.required],
    })
    
  }
  imageselect(event:any){
    let file=event.target.files[0];
    let reader= new FileReader();
    console.log(reader.readAsDataURL(file));
    reader.onload=(e)=>{
      this.photo=reader.result?.toString();
      this.modification.photo=this.photo;
    }
    
    
  }
  onSubmitForm(){
    this.modifEnCours=new Hotel(this.data.hotel.id,
    this.modification.get('region').value,
    this.modification.get('nom').value,
    this.modification.get('prix').value,
    this.photo,
    // this.modification.get('photo').value,
    this.modification.get('promotion').value,
    this.modification.get('description').value,);
    this.hotelserv.modifHotel(this.modifEnCours).subscribe(data=>{console.log(this.modifEnCours)
    this.openSnackBar();
    window.location.reload();
  },err=>{console.log(err)}); }

    openSnackBar() {
      this.snackbar.open("modification faites avec succes!","",{
        duration: 600
      });
    }  
}