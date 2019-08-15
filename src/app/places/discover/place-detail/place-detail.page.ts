import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private router: Router,
    private navController: NavController,
    private route: ActivatedRoute,
    private svcPlaces: PlacesService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if ( !paramMap.has('placeId') ) {
        // reroute
        this.navController.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.svcPlaces.getPlace(paramMap.get('placeId'));
    });
  }


  onBookPlace() {

    this.actionSheetController.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {this.openBookingModal('select')}
        },
        {
          text: 'Random Date',
          handler: () => {this.openBookingModal('random')}
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    }).then(
      actionEl => {
        actionEl.present();
      }
    );

  }

  // Params must be one of those two strings.
  openBookingModal(mode: 'select' | 'random') {

    this.modalController.create(
      {
        component: CreateBookingComponent, 
        componentProps:
        {
          selectedPlace: this.place
        }
      })
      .then( modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();

      })
      .then( resultData => {
        console.log(resultData);
      });

  }

}
