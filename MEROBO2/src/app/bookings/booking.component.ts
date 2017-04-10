import {Component} from '@angular/core';

@Component({
  selector:"booking",
  templateUrl:"./booking.component.html"
})
export class BookingComponent{
  teamName:string;
  startTime:number;
  endTime:number;
  status:string;
  bookingTime:number;
  bookedBy:string;

  constructor(){
    this.fetch();
  }

  fetch():void{
    this.teamName = "Avengers";
    this.startTime = Date.now();
    this.endTime = Date.now() + 500000;
    this.status = "BOOKED";
    this.bookedBy = "Iron Man";
    this.bookingTime = Date.now() - 500000;
  }

}
