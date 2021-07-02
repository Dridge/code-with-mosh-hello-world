
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecaseCustom'
})
export class TitlecaseCustomPipe implements PipeTransform {

  constructor() {
  }

  // my attempt
  // transform(input: any, ...args: any[]): any {
  //   if (input.length === 0) 
  //     return '';
  //   return input.replace(/\w\S*/g, ((txt: String) => 
  //             txt[0].toUpperCase() + txt.substr(1).toLowerCase()))
  //           .replace(/\b(Of|The|An|A|Yet|Nor|But|So|By|On|In)\b/g, ((txt:String) => 
  //             txt.toLowerCase()))
  //           .replace(/^\w\S*/g, ((txt: String) => 
  //             txt[0].toUpperCase() + txt.substr(1).toLowerCase()))
  // }

  //Moshis solution
  transform(value: String): any {
    if (!value) return null;

    let prepositions = [
      'of','the','an','a','yet','nor','but','so','by','on','in'
    ];
    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      if(i > 0 && prepositions.includes(words[i]))  {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }

    return words.join(' ');
  }
}
