
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getAllVehicles() {
    return this.http.get('http://localhost:8000/api/vehicles')
  }

  saveVehicle(form){
    const vehicle={
      vehicle_name:form.get('vehicle_name').value,
      vehicle_brand:form.get('vehicle_brand').value,
      vehicle_overview:form.get('vehicle_overview').value,
      price_per_day:form.get('price_per_day').value,
      fuel_type:form.get('fuel_type').value,
      model_year:form.get('model_year').value,
      seating_capacity:form.get('seating_capacity').value,
      veh_img:form.get('veh_img').value,
      registration_date:form.get('registration_date').value,
      updation_date:form.get('updation_date').value 
    }
    return this.http.post<any>('http://localhost:8000/api/vehicles',vehicle);
  }
}
