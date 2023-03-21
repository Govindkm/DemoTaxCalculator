import { Component, OnInit } from '@angular/core';
import { IncomeDataService } from '../income-data.service';

@Component({
  selector: 'app-deduction-form',
  templateUrl: './deduction-form.component.html',
  styleUrls: ['./deduction-form.component.css']
})
export class DeductionFormComponent implements OnInit{
  deductionForm: any;
  constructor(private incomeDataService: IncomeDataService) {}
  ngOnInit(): void {
    this.deductionForm = this.incomeDataService.getDeductionForm();
  }


  submitForm() {
    console.log(this.deductionForm.value);
  }
  
}
