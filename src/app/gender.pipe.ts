import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true,
})
export class GenderPipe implements PipeTransform {
  transform(name: string, ...args: string[]): string {
    if (!args[0]) return name;
    const gender = args[0].toLowerCase();
    if (gender === 'male' || gender === 'm') return 'Mr. ' + name;
    else if (gender === 'female' || gender === 'f') return 'Ms. ' + name;
    return name;
  }
}
