import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plan } from '../models/Plan';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http:HttpClient) { }

  getPlans():Observable<Plan[]> {
    return this.http.get<Plan[]>(`${environment.tripPlannerServiceURL}/plan`)
  }

  createPlan(plan:Plan): Observable<any> {
    const {id, ...createPlanPayload} = plan;
    return this.http.post(`${environment.tripPlannerServiceURL}/plan`, createPlanPayload, httpOptions);
  }

  updatePlan(plan:Plan): Observable<any> {
    return this.http.patch(`${environment.tripPlannerServiceURL}/plan/${plan.id}`, plan, httpOptions);
  }

  deletePlan(id:String): Observable<any> {
    return this.http.delete(`${environment.tripPlannerServiceURL}/plan/${id}`, httpOptions);
  }

  getPlanByTripID(tripID:String):Observable<Plan[]> {
    return this.http.get<Plan[]>(`${environment.tripPlannerServiceURL}/plan/trip/${tripID}`);
  }
}
