import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncomeDataService } from '../income-data.service';

@Component({
  selector: 'app-deduction-form',
  templateUrl: './deduction-form.component.html',
  styleUrls: ['./deduction-form.component.css']
})
export class DeductionFormComponent {
  deductionForm: any;
  constructor(private incomeDataService: IncomeDataService) {
    this.deductionForm = this.incomeDataService.getDeductionForm();
  }

  submitForm() {
    console.log(this.deductionForm.value);
  }
  
}
