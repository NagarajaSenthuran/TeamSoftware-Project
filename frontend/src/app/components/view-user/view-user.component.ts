import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

export class IUser {
  name: String;
  email: String;
  password:any;
  address:any;
  country:any;
  city:any;
  phone_no:any;
  dob:any;
  NIC:any;
  registation_date:any;
  updation_date:any;
}
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userarray:IUser;
  selectValue:String;
  p:any;
  constructor( public authService: AuthService) {
    
   }

  ngOnInit(): void {
    this.authService.getUsers().subscribe(res=>{
      console.log(res);
      this.userarray = res;
      });
  }

}
