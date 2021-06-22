import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicle'
})
export class VehiclePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
