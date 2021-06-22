import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'contactsearch'
})
export class ContactsearchPipe implements PipeTransform {

  transform(contacts: Contact[],selectValue:string ): Contact[] {
    if(!contacts || !selectValue){
        return contacts;
    }
    return contacts.filter(contact=>
      contact.name.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      contact.email.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      contact.Posting_date.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      contact.phone_num.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())
      );
  }

}
