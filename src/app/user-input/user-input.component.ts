import { Component, output, signal } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>()
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });
    this.annualInvestment.set('0')
    this.initialInvestment.set('0')
    this.expectedReturn.set('5')
    this.duration.set('10')
  }
}
