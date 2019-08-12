import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';
import { Offer } from './offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedOffers: Offer[] = [];
  constructor(private svcOffers: OffersService) { }

  ngOnInit() {
    this.loadedOffers = this.svcOffers.getAllOffers();
  }

}
