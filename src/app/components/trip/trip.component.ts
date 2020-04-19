import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';

import { Trip } from '../../models/Trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trips: Trip[];

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrips().subscribe((trips) => this.trips = trips);
  }

  deleteTrip(id:String) {
    this.tripService.deleteTrip(id).subscribe(() => {
      this.trips = this.trips.filter((trip) => trip.id !== id)
    });
  }

  createTrip(trip:Trip) {
    this.tripService.createTrip(trip).subscribe((newTrip) => {
      this.trips.push(newTrip);
    });
  }

  updateTrip(trip: Trip) {
    // remove metadata
    this.tripService.updateTrip(trip).subscribe((updatedTrip) => {
      alert('Successfully updated');
      this.trips = this.trips.map((currentTrip) => {
        if (currentTrip.id === updatedTrip.id) return updatedTrip;
        return currentTrip;
      });
    });
  }
}
