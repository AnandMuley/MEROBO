import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { Headers, RequestOptions } from '@angular/http'
import {Booking} from './bookings/booking'

@Injectable()
export class BookingService {

  private bookingUrl = "http://merobo.o2.co.uk:3000/booking/searchby"

  constructor(private http:Http) { }

  getBookingsByRoom(room:string):Observable<Booking[]>{
    return this.http.get(this.bookingUrl+"?meetingRoom="+room)
    .map(this.extractData)
    .catch(this.handleError)
  }

  getBookingsByTeam(team:string):Observable<Booking[]>{
    return this.http.get(this.bookingUrl+"?teamName="+team)
    .map(this.extractData)
    .catch(this.handleError)
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
