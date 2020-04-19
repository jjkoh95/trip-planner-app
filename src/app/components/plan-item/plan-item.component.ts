import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from 'src/app/models/Plan';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})
export class PlanItemComponent implements OnInit {
  @Input() plan: Plan;
  @Output() deletePlan: EventEmitter<String> = new EventEmitter();
  @Output() updatePlan: EventEmitter<Plan> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(id: String) {
    this.deletePlan.emit(id);
  }

  onUpdate(plan: Plan) {
    this.updatePlan.emit(plan);
  }
}
