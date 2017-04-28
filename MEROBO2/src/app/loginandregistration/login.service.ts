import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { Headers, RequestOptions } from '@angular/http'
import {CookieService} from 'angular2-cookie/services/cookies.service'
import {Router} from '@angular/router'

export class ResponseData{
  constructor(public message:string){}
}

@Injectable()
export class LoginService{

  private loginUrl = "http://localhost:3000/login"

  constructor(private http:Http,private cookieService:CookieService,private router:Router){

  }

  autheticate(username:string,password:string):Observable<ResponseData>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUrl,{username,password},options).map(this.extractData).catch(this.handleError)
  }

  isLoggedIn():boolean{
    let isAuth = false
    if(this.cookieService.get("isAuthenticated") == "true"){
      isAuth = true
    }
    return isAuth
  }

  logout():void{
    this.cookieService.remove("isAuthenticated")
    this.router.navigate(['/login'])
  }

  private extractData(res:Response){
    let body = res.json()
    return body || {}
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
