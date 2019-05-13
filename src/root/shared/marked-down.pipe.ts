import { Pipe, PipeTransform } from '@angular/core';

import * as marked from 'marked';



@Pipe({
  name: 'markedDown'
})
export class MarkedDownPipe implements PipeTransform {

  transform(markdownContent: string, args?: any): string {

  	// Check to make sure if is not a nullString
  	if(markdownContent === null ) return '' ;

    return marked(markdownContent, args); 
  }

  public static setOptions(args: any): void {
  	marked.setOptions(args);
  }

}
