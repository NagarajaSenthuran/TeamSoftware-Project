import { Vehicle } from './../model/vehicle';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicle'
})
export class VehiclePipe implements PipeTransform {

  transform(Vehicles: Vehicle[],selectValue:string ): Vehicle[] {
    if(!Vehicles || !selectValue){
        return Vehicles;
    }
    return Vehicles.filter(vehicle=>vehicle.vehicle_name.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase()));
  }

}
