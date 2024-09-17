import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: Number = 0
  annualInvestment: Number = 0
  expectedReturn: Number = 0
  duration: Number = 0

  

  onSubmit() {
    console.log(this.duration);
    console.log(this.annualInvestment);
    console.log(this.expectedReturn);
    console.log(this.duration);
  }
 }
