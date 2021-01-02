import { Component, OnInit } from '@angular/core';

import {  FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contectForm:FormGroup;
  subscribeForm:FormGroup;
  base_url="http://localhost:8000/api";
 
  constructor(private fb:FormBuilder,private http:HttpClient) {
    this.contectForm=fb.group({
      name:'',
      email:'',
      phone_num:'',
      message:'',
      Posting_date:''

    });
    this.subscribeForm=fb.group({
      email:'',

    });
   }

  ngOnInit(): void {
  }

  save_contact(contectForm)
  {
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'/contactQuarry',contectForm.value,options).subscribe((data)=>{
     let respl=Array.from(Object.keys(data),k=>data[k]);
    if(respl[0]=='true')
       {
        
        alert('Your Message Successfully Send');
        this.contectForm.reset();
       }
      else
        {
         alert('Your Message not Send');
         this.contectForm.reset();
        }
      });
    console.log(contectForm.value);
  }

  //subscribe
  subscribe_now(subscribeForm){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options={
      headers:headers,
  };
    //console.log(subscribeForm.value);
    this.http.post(this.base_url+'/subscribe',subscribeForm.value,options).subscribe((data)=>{
      let respl=Array.from(Object.keys(data),k=>data[k]);
      if(respl[0]=='true')
      {
       alert('Thank You for Subscribe');
       this.subscribeForm.reset();
      }
      else
      {
        this.subscribeForm.reset();
       alert('Please Try Again');
      }
      
      console.log(data);
   })
  }
}
