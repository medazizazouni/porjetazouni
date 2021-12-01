import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from './classes/hotel';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(hotel:Hotel[],searchValue:string): Hotel[] {
    if(!hotel || !searchValue || searchValue==undefined)
    return hotel;

    return hotel.filter((hotel:Hotel)=>{
      let rVal= ((hotel.nom.toLowerCase().includes(searchValue)) );
      return rVal;
    })
  }

}
