import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyPrint',
})
export class PrettyPrintPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
