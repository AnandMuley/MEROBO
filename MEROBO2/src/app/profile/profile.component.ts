import {Component} from '@angular/core';
import {SearchBy} from '../bookings/booking.component'
import {Booking} from '../bookings/booking'

@Component({
  templateUrl:'./profile.component.html',
  selector: 'profile',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  searchType: SearchBy;
  teamName: string;
  bookings:Booking[]=[
    new Booking("Avengers",Date.now(),Date.now() + 500000,"BOOKED",Date.now() - 500000,"Iron Man"),
    new Booking("Avengers",Date.now(),Date.now() + 300000,"CANCELLED",Date.now() - 500000,"Hulk")
  ];

  constructor () {
    this.searchType = SearchBy.TEAMNAME;
    this.teamName = "Avengers";
  }

}
