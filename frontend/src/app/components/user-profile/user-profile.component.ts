import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService } from './../../shared/auth.service';

// User interface
export class User {
  name: String;
  email: String;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  UserProfile: User;

  constructor(private router: Router,private auth: AuthStateService, public authService: AuthService ) {
    this.authService.profileUser().subscribe((data:any) => {
      this.UserProfile = data;
    })
  }

  ngOnInit() {  this.isLogin();
  }

  isLogin()
  {
    if(this.auth.userState.value)
    {
       
    }
    else{
      
      this.router.navigate(['/login']);
    }
  }

}
