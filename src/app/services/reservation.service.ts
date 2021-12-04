import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../classes/reservation';
import { Observable } from 'rxjs';
const URL = 'http://localhost:3000/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  /*reservation:Reservation[]=[
    new Reservation("owner","golden tulip",new Date(2021,31,11),2,0,1),
    new Reservation("admin","le royale",new Date(5,1,2022),4,1,2),
    new Reservation("user","les olivier palace",new Date(26,11,2022),2,3,3)
  ];*/
  public getListReservation():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(URL);
  }
  public getOneReservation(r:Reservation):Observable<Reservation>{
    return this.http.get<Reservation>(URL+'/'+r.id);
  }
  public supprReservation(r:Reservation):Observable<Reservation[]>{
    return this.http.delete<Reservation[]>(URL+'/'+r.id);
  }
  public addReservation(r:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(URL,r);
  }
  constructor(private http:HttpClient) { }
}
