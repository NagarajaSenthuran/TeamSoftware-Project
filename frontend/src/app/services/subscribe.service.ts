import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }


  getAllSubscribe() {
    return this.http.get('http://localhost:8000/api/subscribe');
  }
  
  deleteData(id){
    return this.http.delete('http://localhost:8000/api/subscribe/'+id);
  
  }
}

