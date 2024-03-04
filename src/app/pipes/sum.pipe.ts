import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  standalone: true
})
export class SumPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {

    let sum = 0;
    for (let num of args) {
      sum += num;
    }
    return value + sum;
  }

}
