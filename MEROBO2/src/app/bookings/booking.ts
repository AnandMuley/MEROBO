export class Booking{

  teamName:string;
  startTime:number;
  endTime:number;
  status:string;
  bookingTime:number;
  bookedBy:string;

  constructor(
  teamName:string,
  startTime:number,
  endTime:number,
  status:string,
  bookingTime:number,
  bookedBy:string
){
this.teamName = teamName;
this.startTime = startTime;
this.endTime = endTime;
this.status = status;
this.bookingTime = bookingTime;
this.bookedBy = bookedBy;
}
}
