import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdateFormat'
})
export class BirthdateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}