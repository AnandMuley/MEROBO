import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'angular2-cookie/services/cookies.service'


@Component({
  selector:'login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent{
  title="MEROBO";
  subTitle="Meeting Room Booking";
  username:string;
  password:string;

  constructor(private router:Router, private cookieService : CookieService){
  }

  autheticate():void{
    if(this.username=="user" && this.password=="pass"){
      this.cookieService.put("isAuthenticated", "true");
      console.log('authenticated');
      this.router.navigate(['/dashboard']);
    }

  }

}
