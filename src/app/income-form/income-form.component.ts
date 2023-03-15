import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncomeDataService } from '../income-data.service';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.css']
})
export class IncomeFormComponent {
  myForm: FormGroup = this.incomeDataService.getIncomeForm();
  constructor(private incomeDataService: IncomeDataService) {}
  submitForm() {
    console.log(this.myForm.value);
  }
}
