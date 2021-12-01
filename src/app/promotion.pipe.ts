import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'promotion'
})
export class PromotionPipe implements PipeTransform {

  transform(prix: number, disc=10): number {
    return prix-(prix*disc)/100;
  }

}
