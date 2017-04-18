import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'angular2-cookie/services/cookies.service'
import {LoginService,ResponseData} from './login.service'


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

  constructor(private router:Router, private cookieService : CookieService,private loginService:LoginService){
  }

  autheticate():void{
    this.loginService.autheticate(this.username,this.password).subscribe(
      responseData => {
        if(responseData.message == "authenticated"){
          this.cookieService.put("isAuthenticated", "true");
          this.router.navigate(['/dashboard']);
        }else{
            console.log('authentication failed...');
        }

      },
      error => {console.log('An error occured...')}
    )

  }

}
