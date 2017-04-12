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
    // this.data = new Booking("Avengers",Date.now(),Date.now() + 500000,"BOOKED",Date.now() - 500000,"Iron Man");
  }

}
