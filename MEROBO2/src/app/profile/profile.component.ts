import {Component,Input} from '@angular/core';
import {SearchBy} from '../bookings/booking.component'
import {Booking} from '../bookings/booking'
import {BookingService} from '../booking.service'

@Component({
  templateUrl:'./profile.component.html',
  selector: 'profile',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  searchType: SearchBy;
  @Input() teamName: string;
  bookings:Booking[];

  constructor (bookingService:BookingService) {
    this.searchType = SearchBy.TEAMNAME;
    this.teamName = "LeanCRM";
    bookingService.getBookingsByTeam(this.teamName).subscribe(bookingsData=>{
      this.bookings = bookingsData
    })
  }

}
