import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TripComponent } from './components/trip/trip.component';
import { TripItemComponent } from './components/trip-item/trip-item.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { PlanComponent } from './components/plan/plan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanItemComponent } from './components/plan-item/plan-item.component';
import { CreatePlanComponent } from './components/create-plan/create-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    TripItemComponent,
    CreateTripComponent,
    PlanComponent,
    PlanItemComponent,
    CreatePlanComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    PlanComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
