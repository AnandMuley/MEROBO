import {Component} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router:Router){
  }

  autheticate():void{
    if(this.username=="user" && this.password=="pass"){

    }

  }

}
