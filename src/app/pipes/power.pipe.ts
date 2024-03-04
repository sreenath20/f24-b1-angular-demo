import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  standalone: true
})
export class PowerPipe implements PipeTransform {

  transform(base: number, exp:number=1): number {
    return Math.pow(base,exp);
  }

}
