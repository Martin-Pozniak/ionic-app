import { Injectable } from '@angular/core';
import { Offer } from './offer.model';
import { Place } from '../place.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private _offers: Offer[] = [
    new Offer(
      'o1',
      new Place(
         'mp1',
          "Martin\'s place",
          'A Nice Place Offered By Martin',
          'https://media.treehugger.com/assets/images/2017/01/cob-house-geodesic-dome-hjertefolgers-10.jpg.600x315_q90_crop-smart.jpg',
          49
      ),
      ["John\'s Booking", "Phil's Booking"]
    )
  ];

  constructor() { }

  getAllOffers() {
    return [...this._offers];
  }

  getOffer(id: string) {
    return {...this._offers.find(o => o.id === id)};
  }

}
