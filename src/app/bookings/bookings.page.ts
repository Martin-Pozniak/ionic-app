import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[] = [];
  constructor(private svcBookings: BookingService) { }

  ngOnInit() {
    // Uses the getter inside the thing
    this.loadedBookings = this.svcBookings.bookings;
  }

  onCancelBooking(id: string) {
    console.log(this.loadedBookings);
    console.log("Removing " +id)

    this.loadedBookings = this.loadedBookings.filter(booking => {
      console.log(id + " vs " + booking.id);
      return booking.id !== id;
    });

    console.log(this.loadedBookings);

  }

}
