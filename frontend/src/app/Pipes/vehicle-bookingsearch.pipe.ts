import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleBookingsearch'
})
export class VehicleBookingsearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
