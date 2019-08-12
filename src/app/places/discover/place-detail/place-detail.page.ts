import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

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
    private svcPlaces: PlacesService
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
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navController.navigateBack('/places/tabs/discover');
  }

}
