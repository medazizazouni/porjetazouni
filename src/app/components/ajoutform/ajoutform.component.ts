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
photo:any;
  constructor(private fb:FormBuilder,private snackbar:MatSnackBar,private hotelserve:HotelService) { }
  onSubmitForm(){
    this.currentHotel=new Hotel(this.listHotel.length+1,
    this.ajout.get('region').value,
    this.ajout.get('nom').value,
    this.ajout.get('prix').value,
    this.photo,
    this.ajout.get('promotion').value,
    this.ajout.get('description').value,);
    this.hotelserve.addHotel(this.currentHotel).subscribe(data=>this.listHotel.push(data));
    window.location.reload();} 

    openSnackBar() {
      this.snackbar.open("modification faites avec succes!","",{
        duration: 600
      });
    } 
    imageselect(event:any){
      let file=event.target.files[0];
      let reader= new FileReader();
      console.log(reader.readAsDataURL(file));
      reader.onload=(e)=>{
        this.photo=reader.result?.toString();
        this.ajout.photo=this.photo;
      }
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
