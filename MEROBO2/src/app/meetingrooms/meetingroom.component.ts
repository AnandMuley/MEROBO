import {Component} from '@angular/core';
import {Booking} from '../bookings/booking';
import {SearchBy} from '../bookings/booking.component';

enum MeetingRoomStatus {
  AVAILABLE =1,
  BLOCKED =2
}

@Component({
  templateUrl : './meetingroom.component.html',
  selector : 'meetingroom'
})
export class MeetingRoomComponent {
  name:string;
  searchType:SearchBy;
  bookings:Booking[]=[
    new Booking("Avengers",Date.now(),Date.now() + 500000,"BOOKED",Date.now() - 500000,"Iron Man"),
    new Booking("Avengers",Date.now(),Date.now() + 300000,"CANCELLED",Date.now() - 500000,"Hulk")
  ];
  status: MeetingRoomStatus;

  constructor() {
    this.searchType = SearchBy.TEAMNAME;
    this.fetch();
  }

  fetch():void {
    this.name = 'Pinnacle';
    this.status = MeetingRoomStatus.AVAILABLE;
  }
}
