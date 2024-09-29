import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
