import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  isSignedIn: boolean;
  title: any;
  userid:any;
  id:any;
  constructor(private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authservice:AuthService
    ) { }

  ngOnInit() {
    this.isLogin();
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    
  });
  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

  getuser_id(){
   this.authservice.getUserId(this.id).subscribe(res=>{
    this.userid=res.user.id;
   
   })
  }

  isLogin()
  {   
    this.userid=this.getuser_id();
    if(this.auth.userState.value)
    {
      if(this.userid == 1){
        this.router.navigate(['/admin']);
      }
      else{
       // this.router.navigate(['/profile']);
      }
    }
    else{
      
      this.router.navigate(['/login']);
    }
  }
}
