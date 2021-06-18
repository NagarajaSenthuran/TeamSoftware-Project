import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAllContacts() {
    return this.http.get('http://localhost:8000/api/contactQuarry');
  }

  deleteData(id){
    return this.http.delete('http://localhost:8000/api/contactQuarry/'+id);
 
  }
}
