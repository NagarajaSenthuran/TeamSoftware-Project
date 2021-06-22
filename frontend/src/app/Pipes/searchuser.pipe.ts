import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../model/user';

@Pipe({
  name: 'searchuser'
})
export class SearchuserPipe implements PipeTransform {

  transform(users: IUser[],selectValue:string ): IUser[] {
    if(!users || !selectValue){
        return users;
    }
    return users.filter(user=>
      user.name.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      user.city.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      user.country.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      user.registation_date.toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      user.dob.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())||
      user.phone_no.toString().toLocaleLowerCase().includes(selectValue.toLocaleLowerCase())
      );
  }

}
