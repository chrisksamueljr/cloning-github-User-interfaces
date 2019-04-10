import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeNumberShorten'
})
export class LargeNumberShortenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
