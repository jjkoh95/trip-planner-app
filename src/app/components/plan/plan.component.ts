import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanService } from 'src/app/services/plan.service';
import { Plan } from '../../models/Plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plans: Plan[];

  constructor(
    private planService: PlanService,
    private dialogRef: MatDialogRef<PlanComponent>,
    @Inject(MAT_DIALOG_DATA) public tripID: string
  ) { }

  ngOnInit() {
    this.planService.getPlanByTripID(this.tripID).subscribe((plans) => this.plans = plans);
  }

  deletePlan(id:String) {
    this.planService.deletePlan(id).subscribe(() => {
      this.plans = this.plans.filter((plan) => plan.id !== id)
    });
  }

  createPlan(plan:Plan) {
    this.planService.createPlan(plan).subscribe((newPlan) => {
      this.plans.push(newPlan);
    });
  }

  updatePlan(plan: Plan) {
    // remove metadata
    this.planService.updatePlan(plan).subscribe((updatedPlan) => {
      alert('Successfully updated');
      this.plans = this.plans.map((currentPlan) => {
        if (currentPlan.id === updatedPlan.id) return updatedPlan;
        return currentPlan;
      });
    });
  }
}
