import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from 'src/app/models/Plan';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {
  @Input() tripID: String;
  @Output() createPlan: EventEmitter<Plan> = new EventEmitter();

  plan: Plan = {
    tripID: '',
  }

  constructor() { }

  ngOnInit() {
    this.plan.tripID = this.tripID;
  }

  onSubmit() {
    this.createPlan.emit(this.plan);
  }
}
