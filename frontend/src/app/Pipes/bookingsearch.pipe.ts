import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../model/booking';

@Pipe({
  name: 'bookingsearch'
})
export class BookingsearchPipe implements PipeTransform {

  transform(book: Booking[],selectValue:string ): Booking[] {
    if(!book || !selectValue){
        return book;
    }
    return book.filter(booking=>
      booking.vehicle_id.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      booking.name.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      booking.posting_date.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      booking.start_date.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      booking.end_date.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())
      );
  }

  

}
