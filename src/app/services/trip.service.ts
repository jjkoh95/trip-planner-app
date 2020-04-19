import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Trip } from '../models/Trip';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http:HttpClient) { }

  getTrips():Observable<Trip[]> {
    return this.http.get<Trip[]>(`${environment.tripPlannerServiceURL}/trip`)
  }

  createTrip(trip:Trip): Observable<any> {
    const {id, createdAt, updatedAt, ...createTripPayload} = trip;
    return this.http.post(`${environment.tripPlannerServiceURL}/trip`, createTripPayload, httpOptions);
  }

  updateTrip(trip:Trip): Observable<any> {
    const {id, createdAt, updatedAt, ...updateTripPayload} = trip;
    return this.http.patch(`${environment.tripPlannerServiceURL}/trip/${trip.id}`, updateTripPayload, httpOptions);
  }

  deleteTrip(id:String): Observable<any> {
    return this.http.delete(`${environment.tripPlannerServiceURL}/trip/${id}`, httpOptions);
  }
}
