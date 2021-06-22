import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../services/Alertify.service';
import { BookingService } from '../services/booking.service';
import { VehiclesService } from '../services/vehicles.service';
import { AuthStateService } from '../shared/auth-state.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookForm:FormGroup;
  base_url="http://localhost:8000/api";
  vehArray:any[];
 
  vid: any;
  bookingArray: any;
  constructor(private bookingService:BookingService,private route: ActivatedRoute,private vehiclesService: VehiclesService,private alertify:AlertifyService, private router: Router,private auth: AuthStateService,private fb:FormBuilder,private http:HttpClient) {
  //    this.bookForm=fb.group({
  //     name:'',
  //     vehicle_id:'',
  //     start_date:'',
  //     end_date:'',
  //     car_Type:'',
  //     status:'',
  //     posting_Date:'',

  // });
     }

  ngOnInit(){
    this.isLogin();
    this.vid=this.route.snapshot.queryParams['id']

    if(this.vid){
      this.vehiclesService.getVehicle(this.vid).subscribe(res=>{
        console.log(res.id);
        this.bookForm=this.fb.group({
          vehicle_id:[this.vid,[Validators.required]],
          name:['',[Validators.required]],
          start_date:['',[Validators.required]],
          end_date:['',[Validators.required]],
          car_Type:['',[Validators.required]],
          posting_date:['',[Validators.required]],
  
        });
      })
    }

    else{
      this.bookForm=this.fb.group({
        vehicle_id:['',[Validators.required]],
        name:['',[Validators.required]],
        start_date:['',[Validators.required]],
        end_date:['',[Validators.required]],
        car_Type:['',[Validators.required]],
        posting_date:['',[Validators.required]],

      });
    }

    this.bookingService.getAllBooking().subscribe(res=>{
      console.log(res);
      this.bookingArray = res;
    })

  }

  // save_book(bookForm)
  // {
  //   const headers = new HttpHeaders();
  //     headers.append('Content-Type', 'multipart/form-data');
  //     headers.append('Accept', 'application/json');
  //   let options={
  //     headers:headers,
  //   };
  //   this.http.post(this.base_url+'/booking',bookForm.value,options).subscribe((data)=>{
  //    let respl=Array.from(Object.keys(data),k=>data[k]);
  //   if(respl[0]=='true')
  //      {

  //       alert('Your Message Successfully Send');
  //       this.bookForm.reset();
  //      }
  //     else
  //       {
  //        alert('Your Message not Send');
  //        this.bookForm.reset();
  //       }
  //     });
  //   console.log(bookForm.value);
  // }





  onsubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      this.bookingService.saveBooking(this.bookForm.value).subscribe(
        res => {
          if(res)
          {
            this.alertify.success('Your Booking Recived, We will Send reply Very Soon!!');
        
            this.router.navigate(['/vehicle-list']);
          }
        });
    }
  }

  isLogin()
  {
    if(this.auth.userState.value)
    {

    }
    else{

      this.router.navigate(['/register']);
      this.alertify.error('customer can only Booking, Please Regester');
    }
  }

}
