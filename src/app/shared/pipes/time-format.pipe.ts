import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Split the time string by ":" and "."
    const timeParts = value.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const seconds = parseFloat(timeParts[2]);

    // Determine the final hours and minutes
    const totalMinutes = Math.floor(seconds / 60);
    const finalHours = hours + Math.floor((minutes + totalMinutes) / 60);
    const finalMinutes = (minutes + totalMinutes) % 60;

    // Format the output string
    return finalMinutes > 0
      ? `${finalHours} H ${finalMinutes} min`
      : `${finalHours} H`;
  }
}
