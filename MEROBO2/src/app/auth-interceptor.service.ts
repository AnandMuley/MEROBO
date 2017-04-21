import {CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service'


@Injectable()
export class AuthInterceptor implements CanActivate{

  constructor(private router:Router, private cookieService : CookieService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let redirectUrl = state.url;
    if(this.cookieService.get("isAuthenticated") == "true") {
      console.log('successful.'+redirectUrl);
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
