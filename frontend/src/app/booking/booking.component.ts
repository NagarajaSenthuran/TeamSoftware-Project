import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookForm:FormGroup;
  base_url="http://localhost:8000/api";
  constructor(private fb:FormBuilder,private http:HttpClient) {
     this.bookForm=fb.group({
      Name:'',
      Email:'',
      Start_date:'',
      End_date:'',
      Type:'',
      Posting_Date:'',
      Message:'',
  });
 }

  ngOnInit(): void {
  }

  save_book(bookForm)
  {
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'/booking',bookForm.value,options).subscribe((data)=>{
     let respl=Array.from(Object.keys(data),k=>data[k]);
    if(respl[0]=='true')
       {
        
        alert('Your Message Successfully Send');
        this.bookForm.reset();
       }
      else
        {
         alert('Your Message not Send');
         this.bookForm.reset();
        }
      });
    console.log(bookForm.value);
  }

}
