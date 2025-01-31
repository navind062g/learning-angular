import { Component } from '@angular/core';

@Component({
  selector: 'app-agecalculator',
  standalone: false,
  templateUrl: './agecalculator.component.html',
  styleUrl: './agecalculator.component.css'
})
export class AgecalculatorComponent {
  yearBorn: number;
  ageContext: string;
  ageNumber: number = 0;

  constructor() {
    this.ageContext = '';
    this.yearBorn = 1990;
  }

  calculateAge():void {   
    if(this.ageNumber > 0 && this.ageNumber <= 120) {
      let currentYear = 2025;
      this.yearBorn = currentYear - this.ageNumber;

      if(this.ageNumber < 13) {
        this.ageContext = 'a Kid';
      }
      else if(this.ageNumber < 18) {
        this.ageContext = 'a Teenager';
      }
      else {
        this.ageContext = 'an Adult';
      }
    }
  }
}
