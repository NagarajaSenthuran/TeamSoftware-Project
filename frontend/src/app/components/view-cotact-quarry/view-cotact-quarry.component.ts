import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cotact-quarry',
  templateUrl: './view-cotact-quarry.component.html',
  styleUrls: ['./view-cotact-quarry.component.scss']
})
export class ViewCotactQuarryComponent implements OnInit {
  contactArray:any;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe(res=>{
      console.log(res);
      this.contactArray = res
     })
  }

}