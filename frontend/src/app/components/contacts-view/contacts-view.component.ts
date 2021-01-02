import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.scss']
})
export class ContactsViewComponent implements OnInit {
  contactsArray :any;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  this.contactService.getAllContacts().subscribe(res=>{
   console.log(res);
   this.contactsArray = res
  })
  }

}
