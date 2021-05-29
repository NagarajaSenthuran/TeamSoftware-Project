import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent implements OnInit {
  feedbackArray :any;
  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {this.feedbackService.getAllFeedback().subscribe(res=>{
    console.log(res);
    this.feedbackArray = res
   })
}

}