import { Vehicle } from './../model/vehicle';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehiclesearch'
})
export class VehiclesearchPipe implements PipeTransform {

  transform(Vehicles: Vehicle[],selectValue:string ): Vehicle[] {
    if(!Vehicles || !selectValue){
        return Vehicles;
    }
    return Vehicles.filter(vehicle=>
      vehicle.vehicle_name.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      vehicle.vehicle_brand.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      vehicle.model_year.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      vehicle.price_per_day.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())
      );
  }

}
