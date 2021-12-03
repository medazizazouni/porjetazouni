import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../classes/hotel';

const URL = 'http://localhost:3000/hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
 /**  hotel: Hotel[]=[
    new Hotel('tunis','golden tulip',500,'assets/hotels/goldent.jpg',true,true),
    new Hotel('tunis','sheraton',500,'assets/hotels/sheraton.jpg',true,false),
    new Hotel('bizerte','bizerta resort',500,'assets/hotels/bizertaresort.jpg',true,true),
    new Hotel('bizerte','hotel el nour',500,'assets/hotels/hnour.jpg',true,false),
    new Hotel('hammamet','le royale',500,'assets/hotels/leroyale.jpg',true,true),
    new Hotel('hammamet','hasdrubale',500,'assets/hotels/hasdrubal.jpg',true,false),
    new Hotel('sfax','hotel concorde',500,'assets/hotels/concored.jpg',true,true),
    new Hotel('sfax','les olivier palace',500,'assets/hotels/olivier.jpg',true,false),
    
  ];*/

  public getListHotel():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(URL);
  }
  public getOneHotel(id:number):Observable<Hotel>{
    
    return this.http.get<Hotel>(URL+'/'+id);
  }
  public modifHotel(h:Hotel):Observable<Hotel>{
    
    return this.http.put<Hotel>(URL+'/'+h.id,h);
  }
  public addHotel(h:Hotel):Observable<Hotel>{
    
    return this.http.post<Hotel>(URL,h);
  }
  public supprHotel(h:Hotel):Observable<Hotel>{
    
    return this.http.delete<Hotel>(URL+'/'+h.id);
  }
  constructor(private http:HttpClient) { }
}
