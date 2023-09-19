import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeAnchor',
})
export class RemoveAnchorPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }
    // Use a regular expression to replace anchor tags but retain the inner text
    return value.replace(/<a href=".*?">(.*?)<\/a>/g, '$1');
  }
}
