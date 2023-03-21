import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IncomeDataService } from '../income-data.service';
@Component({
  selector: 'app-exemption-form',
  templateUrl: './exemption-form.component.html',
  styleUrls: ['./exemption-form.component.css']
})
export class ExemptionFormComponent implements OnInit {
  exemptionForm: any;
  constructor(private incomeDataService: IncomeDataService) {
  }
  
  ngOnInit(): void {
    this.exemptionForm = this.incomeDataService.getExemptionForm();
  }
}
