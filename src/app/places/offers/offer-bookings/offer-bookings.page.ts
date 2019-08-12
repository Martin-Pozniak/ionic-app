import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Offer } from '../offer.model';
import { NavController } from '@ionic/angular';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  
  offer: Offer;

  constructor(
    private route: ActivatedRoute, 
    private navController: NavController,
    private svcOffer: OffersService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if ( !paramMap.has('offerId') ) {
        //reroute
        this.navController.navigateBack('/places/tabs/offers');
        return;
      }
      this.offer = this.svcOffer.getOffer(paramMap.get('offerId'));
    });
  }

}
