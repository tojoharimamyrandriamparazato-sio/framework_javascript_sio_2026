import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inversion',
})
export class InversionPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
