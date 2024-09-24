import { Component } from '@angular/core';
import { calculateInvestmentResults } from '../investment-results';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: number = 0
  annualInvestment: number = 0
  expectedReturn: number = 0
  duration: number = 0
  annualData = {}
  

  onSubmit() {
    this.annualData = calculateInvestmentResults(this.initialInvestment, this.annualInvestment, this.expectedReturn, this.duration)
    console.log(this.annualData);
    
  }
 }
