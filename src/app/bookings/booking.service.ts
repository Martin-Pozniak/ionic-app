import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({providedIn: 'root'})
export class BookingService {
    private _bookings: Booking[] = [
        {
            id:'b1',
            placeId: 'p1',
            placeTitle: 'Manhatten Mansiony',
            guestNumber: 2,
            userId: 'u1'
        },
        {
            id:'b2',
            placeId: 'p2',
            placeTitle: 'Poo Palace',
            guestNumber: 3,
            userId: 'u2'
        }
    ];

    get bookings() {
        return [...this._bookings];
    }
}