import {Component} from '@angular/core';
import {BookingComponent} from '../bookings/booking.component';

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
  bookings:Array<BookingComponent>;
  status: MeetingRoomStatus;

  constructor() {
    this.fetch();
  }

  fetch():void {
    this.name = 'Pinnacle';
    this.status = MeetingRoomStatus.AVAILABLE;
    this.bookings = [new BookingComponent()];
  }
}
