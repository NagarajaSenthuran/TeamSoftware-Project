import { FeedbackService } from './../services/feedback.service';
import { Feedback } from './../model/feedback';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import {FormBuilder,FormGroup,Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AlertifyService } from '../services/Alertify.service';
import { AuthStateService } from '../shared/auth-state.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm:FormGroup;
  //user :any = {};
  feedback = new Feedback();
  constructor(private auth: AuthStateService,private alertify:AlertifyService,private fb:FormBuilder, private feedbackService:FeedbackService, private router: Router) { }



  ngOnInit(): void {
    this.isLogin();
     this.feedbackForm=this.fb.group({
       name:['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
       email:['',[Validators.required,Validators.email]],
       phoneno:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
       postingdate:['',[Validators.required]],
       message:['',[Validators.required,Validators.min(10)]]
  });
  }

    onSubmit(form){
      if(this.feedbackForm.valid)
      console.log(form);
      this.feedbackService.saveFeedback(form).subscribe(res =>{
    
        if (res)
        {
          this.alertify.success('Thank You, We Got Your Feedback');
          console.log(res);
          this.feedbackForm.reset();
        }
   
      });
    }
  

    get name(){
      return this.feedbackForm.get('name');
    }
  

  isLogin()
  {
    if(this.auth.userState.value)
    {
       
    }
    else{
      
      this.router.navigate(['/login']);
      this.alertify.error('Only registered customer can give the feedback, Please Login');
    }
  }

}
  // insretData(){
  //   console.log(this.feedback);
  //   this.feedbackService.insertData(this.feedback).subscribe(res =>{
      
  //     if (res)
  //     {
  //       this.alertify.success('Thank You, We Got Your Feedback');
  //       this.router.navigate(['/']);
  //       console.log(res);
  //     }
     
  //   });
    
    //  }
  // onSubmit(feedbackForm:FormGroup){
  //   console.log('Congrats,form submitted');
  //   console.log(this.feedbackForm.value);
  //   this.user=Object.assign(this.user,this.feedbackForm.value);
  //   localStorage.setItem('User',this.user);
  //   //localStorage.setItem('User',JSON stringify(this.user) );
    
  //   //images = ['../../assets/A.jpg','../../assets/B.jpg','../../assets/C.jpg'];
  //  }






