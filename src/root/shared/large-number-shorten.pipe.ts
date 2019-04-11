import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeNumberShorten'
})
export class LargeNumberShortenPipe implements PipeTransform {

  transform(num: number, digits = 1): string {
    return num.toString();
  }

}
