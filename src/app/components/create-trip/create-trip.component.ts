import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trip } from 'src/app/models/Trip';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
  @Output() createTrip: EventEmitter<Trip> = new EventEmitter();

  trip: Trip = {
    title: '',
    description: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.createTrip.emit(this.trip);
  }
}
