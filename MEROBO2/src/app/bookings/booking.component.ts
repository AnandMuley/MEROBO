import {Component,Input} from '@angular/core';
import {Booking} from './booking';

@Component({
  selector:"booking",
  templateUrl:"./booking.component.html"
})
export class BookingComponent{
  @Input() data:Booking;

  constructor(){
    this.fetch();
  }

  fetch():void{
    // this.data.teamName = "Avengers";
    // this.data.startTime = Date.now();
    // this.endTime = Date.now() + 500000;
    // this.status = "BOOKED";
    // this.bookedBy = "Iron Man";
    // this.bookingTime = Date.now() - 500000;
  }

}
