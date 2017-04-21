import { Component } from '@angular/core'
import {LoginService} from './loginandregistration/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEROBO'

  constructor(private loginService : LoginService){

  }

  logout():void{
    this.loginService.logout()
  }

}
