import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getAllFeedback() {
    return this.http.get('http://localhost:8000/api/feedback');
  }

  insertData(data){
    return this.http.post('http://localhost:8000/api/feedback',data);
  
  }

  deleteData(id){
    return this.http.delete('http://localhost:8000/api/feedback/'+id);
  
  }

   saveFeedback(form){
     const feedback={
       name:form.get('name').value,
       email:form.get('email').value,
       phoneno:form.get('phoneno').value,
       postingdate:form.get('postingdate').value,
       message:form.get('message').value
     }
     return this.http.post<any>('http://localhost:8000/api/feedback',feedback);
   }
}

