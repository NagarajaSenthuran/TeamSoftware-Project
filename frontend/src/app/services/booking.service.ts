import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  editBookingArray$ = new BehaviorSubject<any>({});


  saveBooking(form){
    const data={
      vehicle_id:form.vehicle_id,
      name:form.name,
      email:form.email,
      phone_no:form.phone_no,
      start_date:form.start_date,
      end_date:form.end_date,
      car_Type:form.car_Type,
      posting_date:form.posting_date,
    }
    return this.http.post<any>('http://localhost:8000/api/bookings',data);
  }

  getAllBooking()
  {
    return this.http.get('http://localhost:8000/api/bookings');
  }
}
