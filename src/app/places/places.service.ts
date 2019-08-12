import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "Central park views",
      "https://static2.mansionglobal.com/production/media/article-images/2f6a5dc3d80ef19f3bc23ddc1e911adf/large_Screen-Shot-2017-12-07-at-12.11.10-PM.png",
      200
    ),
    new Place(
      "p2",
      "L\'Amour Toujours",
      "French ass place",
      "https://candysdirt.com/wp-content/uploads/2019/04/4047CochranChapel_002-2-1024x683.jpg",
      100
    ),
    new Place(
      "p3",
      "Broken Shack",
      "High Quality Shack",
      "https://img.sfist.com/2019/05/shack-potrero.jpg",
      100
    )
  ];

  constructor() {}

  getPlaces() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(place => place.id === id )};
  }
}
