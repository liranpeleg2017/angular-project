

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transform JSON Date string into readable date
 * 
 * @export
 * @class JsonDatePipe
 * @implements {PipeTransform}
 */
@Pipe({name: 'jsonDate'})

export class JsonDatePipe implements PipeTransform {
 transform(value:Date, ...args) : any {
     
    if(value) {
     
      return new Date(parseInt(value.toString().substr(6)));  
    }
  }
} 
