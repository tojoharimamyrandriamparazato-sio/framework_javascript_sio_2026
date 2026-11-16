import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'troncature',
})
export class TroncaturePipe implements PipeTransform {
  transform(
    value: string,
    longueur: number = 5,
    suffixe: string = "..."): string {
    if(!value || value.length <= longueur) return value;
    return value.substring(0, longueur) + suffixe;
  }
}
