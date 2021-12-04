import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service'; 
import { Hotel } from 'src/app/classes/hotel';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Utilisateurs } from 'src/app/classes/utilisateurs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/classes/reservation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservationform',
  templateUrl: './reservationform.component.html',
  styleUrls: ['./reservationform.component.css']
})
export class ReservationformComponent implements OnInit {
  hotel:Hotel[]=[];
  currentHotel!:Hotel;
  nom:string='';
  nomutil!:Utilisateurs;
  reservation:FormGroup | any;
  currentReservation!:Reservation;
  prix:number=0;
  jour:number=0;
  enfant:number = 0;
  adult:number=0;
  today:String=new Date().toLocaleDateString();
  listreserv:Reservation[]=[];
  constructor(private utilisateur:AuthServiceService,private hotelserv:HotelService,private reservservice:ReservationService,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private fb:FormBuilder,
  private snackbar:MatSnackBar) {
    
   }
    onChange(e:any){
      this.enfant=parseInt(e.target.value);
      console.log(this.enfant)
      this.prix=0;
      this.calcul()    
  }
    onChange1(e:any){
      this.adult=parseInt(e.target.value);
      console.log(this.adult)
      this.prix=0;
      this.calcul()

      }

      onChange2(e:any){
        this.jour=parseInt(e.target.value);
        console.log(e)
        this.prix=0;
        this.calcul()
      }
   openSnackBar() {
    this.snackbar.open("reservation faites avec succes!","",{
      duration: 600
    });
  }
  

  calcul(){
    if(this.currentHotel.promotion==false){
    this.prix=((this.adult * this.currentHotel.prix + 
      (this.enfant * ( this.currentHotel.prix - (this.currentHotel.prix * 0.3)))) * this.jour);}
    else{
      this.prix=((this.adult * (this.currentHotel.prix- (this.currentHotel.prix * 0.1))+ 
        (this.enfant * ( this.currentHotel.prix - (this.currentHotel.prix * 0.4)))) * this.jour);
    }  
  }
   onSubmitForm(){
    this.currentReservation=new Reservation(this.listreserv.length+1,
    this.nomutil.identifiant,this.nom,
    this.reservation.get('dateDebut').value,
    this.reservation.get('nbadulte').value,
    this.reservation.get('nbenfant').value,
    this.reservation.get('nbjour').value);
    this.reservservice.addReservation(this.currentReservation).subscribe(data=>console.log(data));
     

   }

  ngOnInit(): void {
    this.reservservice.getListReservation().subscribe(data=>this.listreserv=data);
    this.nom=this.data.nom.nom;
    console.log(this.data.nom)
    this.currentHotel=this.data.nom;
    this.nomutil=this.utilisateur.getUser();
    this.reservation=this.fb.group({
      dateDebut:['',Validators.required],
      nbjour:['',Validators.required],
      nbenfant:['',Validators.required],
      nbadulte:['',Validators.required],
    })
  
  }
    
}
