import { Feedback } from './../model/feedback';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedbacksearch'
})
export class FeedbacksearchPipe implements PipeTransform {

  transform(feedbacks: Feedback[],selectValue:string ): Feedback[] {
    if(!feedbacks || !selectValue){
        return feedbacks;
    }
    return feedbacks.filter(feed=>
      feed.name.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      feed.email.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      feed.postingdate.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      feed.phoneno.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())
      );
  }

}
