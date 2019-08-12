import { Place } from '../place.model';

export class Offer {
    constructor(
        public id: string,
        public place: Place,
        public bookings: string[]
    ) {}

}
