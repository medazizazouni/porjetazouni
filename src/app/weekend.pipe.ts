import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekend'
})
export class WeekendPipe implements PipeTransform {

  transform(prix: number, aug:number=30): number {
    return prix+(prix*aug)/100;
  }

}
