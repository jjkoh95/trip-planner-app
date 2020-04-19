import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Trip } from '../../models/Trip';
import { TripService } from '../../services/trip.service';
import { PlanComponent } from '../plan/plan.component';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.css']
})
export class TripItemComponent implements OnInit {
  @Input() trip: Trip;
  @Output() deleteTrip: EventEmitter<String> = new EventEmitter();
  @Output() updateTrip: EventEmitter<Trip> = new EventEmitter();

  constructor(private tripService: TripService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onDelete(id: String) {
    this.deleteTrip.emit(id);
  }

  onUpdate(trip: Trip) {
    this.updateTrip.emit(trip);
  }

  openPlanDialog() {
    this.dialog.open(PlanComponent, {
      data: this.trip.id,
    });
  }
}
