import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    const fullStars = Math.floor(value); // Get the number of full stars
    const halfStar = value % 1 >= 0.5 ? '★' : '☆'; // Check if it's half a star
    const emptyStars = 5 - Math.ceil(value); // Get the number of empty stars
    return '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars); //
  }
}
