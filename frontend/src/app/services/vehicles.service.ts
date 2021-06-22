import { Vehicle } from './../model/vehicle';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVehicle } from './../IVehicle.interface';
import { map } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicle(id: number) {
    return this.http.get<Vehicle>('http://localhost:8000/api/vehicles/'+id.toString());
    // return this.getAllVehicles().pipe(
    //   map(vehiclesArray => {
    //     return vehiclesArray .find(p => p.id === id);
    //   })
    // );
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('http://localhost:8000/api/vehicles');
  //   return this.http.get('data/properties.json').pipe(
  //     map(data => {
  //     const vehiclesArray: Array<Vehicle> = [];
  //     const localProperties=JSON.parse(localStorage.getItem('newVeh'));
      
  //     if(localProperties){
  //       for (const id in localProperties) {
  //         if (localProperties.hasOwnProperty(id) ) {
  //           vehiclesArray.push(localProperties[id]);
  //         }
  //      //   vehiclesArray.push(localProperties [id]);
  //       }
  //     }


  //     for (const id in data) {
  //       if (data.hasOwnProperty(id) ) {
  //         vehiclesArray.push(data[id]);
  //       }
  //       //vehiclesArray.push(data[id]);
  //     }
     
  //     return vehiclesArray;
  //     })
  //   );
  //  return this.http.get<Vehicle[]>('data/properties.json'); 
    }

    saveVehicleForm(form){
      const vehicle={
        VehicleName:form.get('VehicleName').value,
        Brand:form.get('Brand').value,
        Details:form.get('Details').value,
        Price:form.get('Price').value,
        Fuel_Type:form.get('Fuel_Type').value,
        Model_Year:form.get('Model_Year').value,
        Seating_Capasity:form.get('Seating_Capasity').value
      }
      return this.http.post<any>('http://localhost:8000/api/vehicles',vehicle);
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
  
  newVehID(){
    if(localStorage.getItem('VID')){
      localStorage.setItem('VID',String(+localStorage.getItem('VID') +1 ));
      return +localStorage.getItem('VID');
    } else{
      localStorage.setItem('VID','101'); 
      return 101;
    }
  }

  addVehicle(data){
    return this.http.post('http://localhost:8000/api/vehicles',data);
  //   let newVeh =[vehicle];
  //   //add new vehicle in array if newVeh already exists in local storage
  //   if(localStorage.getItem('newVeh')){
  //     newVeh = [vehicle, ...JSON.parse(localStorage.getItem('newVeh'))];
  //   }
  //   localStorage.setItem('newVeh',JSON.stringify(newVeh));
  }

  uploadData(data){
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:8000/api/imageupload', data ,{
      headers:headers
    });
  }
}
