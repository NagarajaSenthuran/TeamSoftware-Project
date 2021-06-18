import { FeedbackService } from './../services/feedback.service';
import { Feedback } from './../model/feedback';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ViewFeedbackComponent } from '../components/view-feedback/view-feedback.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  //feedbackForm:FormGroup;
  //user :any = {};
  feedback = new Feedback();
  constructor(private fb:FormBuilder, private feedbackService:FeedbackService) { }



  ngOnInit(): void {
  //   this.feedbackForm=this.fb.group({
  //     name:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
  //     email:['',[Validators.required,Validators.email]],
  //     phoneno:['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.min(10),Validators.max(13)]],
  //     postingdate:['',[Validators.required]],
  //     message:['',[Validators.required]]
  // });
  }


  insretData(){
  //console.log(this.feedback);
  this.feedbackService.insertData(this.feedback).subscribe(res =>{
    console.log(res);
   //this.getFeedbackData()
  });
  }
 
  }


  // onSubmit(feedbackForm:FormGroup){
  //   console.log('Congrats,form submitted');
  //   console.log(this.feedbackForm.value);
  //   this.user=Object.assign(this.user,this.feedbackForm.value);
  //   localStorage.setItem('User',this.user);
  //   //localStorage.setItem('User',JSON stringify(this.user) );
    
  //   //images = ['../../assets/A.jpg','../../assets/B.jpg','../../assets/C.jpg'];
  //  }






