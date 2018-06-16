import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: any, character = ', '): any {
    if (!this.isArray(value)) {
      return value;
    }

    return value.join(character);
  }

  isArray(value: any): boolean {

    return Array.isArray(value);
  }

}
