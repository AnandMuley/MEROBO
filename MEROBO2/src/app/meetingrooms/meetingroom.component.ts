import {Component,Input} from '@angular/core';
import {Booking} from '../bookings/booking';
import {SearchBy} from '../bookings/booking.component';
import {BookingService} from '../booking.service'
import {OnInit} from '@angular/core'

enum MeetingRoomStatus {
  AVAILABLE =1,
  BLOCKED =2
}

@Component({
  templateUrl : './meetingroom.component.html',
  selector : 'meetingroom'
})
export class MeetingRoomComponent implements OnInit{
  @Input() name:string;
  searchType:SearchBy;
  bookings:Booking[];
  status: MeetingRoomStatus;

  constructor(private bookingService:BookingService) {
    this.searchType = SearchBy.ROOMNAME;
  }

  ngOnInit(){
    this.fetch();
  }

  fetch():void {
    this.bookingService.getBookingsByRoom(this.name).subscribe(
      bookingsData =>{
        console.log("DATA : "+JSON.stringify(bookingsData))
        this.bookings = bookingsData
      }
    )
    this.status = MeetingRoomStatus.AVAILABLE;
  }
}
