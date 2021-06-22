import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent implements OnInit {
  p:any;
  bookingArray :any;
  selectValue:String;
  
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBooking().subscribe(res=>{
      console.log(res);
      this.bookingArray = res;
     })
  }

}
