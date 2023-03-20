import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { deductionFormInterface, exemptionFormInterface, incomeFormInterface } from './models/forms.Interface';
import { AlertService } from './services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeDataService {

  incomeform!: FormGroup<incomeFormInterface>;
  deductionForm!: FormGroup<deductionFormInterface>;
  exemptionForm!: FormGroup<exemptionFormInterface>;

  isLoading: boolean = false; 

  // The gross income of the user.
  grossAnnualIncome: number = 0;

  // The taxable income of the user using the old tax rules. 
  oldTaxableIncome: number = 0;

  // The taxable income of the user using the new tax rules. 
  newTaxableIncome: number = 0;

  apiURL: string = 'http://localhost:3000/api/';

  constructor(private fb: FormBuilder, private alertService: AlertService, private router: Router, private http: HttpClient) {
    this.createIncomeForm();
    this.createDeductionForm();
    this.createExemptionForm();
    this.alertService.options = {closeButton: true, positionClass: "toast-bottom-center"};
    this.apiURL = environment.apiUrl + 'calculation/';
  }

  submitForms() {
    const url = this.apiURL+'/getTaxes';
    const data = {
      incomeForm: this.incomeform?.value,
      deductionForm: this.deductionForm?.value,
      exemptionForm: this.exemptionForm?.value
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    return this.http.post(url, data);
  } 


  createIncomeForm() {
    this.incomeform = new FormGroup({
      basicpay: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
      da: new FormControl(),
      hra: new FormControl(),
      lta: new FormControl(),
      cityallowance: new FormControl(),
      miscellaneous: new FormControl(),
      monthlybonus: new FormControl(),
      quaterlybonus: new FormControl(),
      annualbonus: new FormControl()
    });
  }

  getIncomeForm() {
    return this.incomeform;
  }

  createDeductionForm() {
    this.deductionForm = this.fb.group({
      section80C: this.fb.group({
        ppf: [0],
        nps: [0],
        elss: [0],
        others: [0]
      }, { validator: this.sum80Cvalidator }),
      section80D: this.fb.group({
        yourParentsAge: [false, Validators.requiredTrue],
        parentsHIS: [0],
        selfHIS: [0]
      }, { validator: this.sum80Dvalidator }),
      section80G: [0, Validators.max(10000)]
    });
  }

  sum80Dvalidator(group: FormGroup): any {
    const sum = Object.keys(group.controls)
      .map(key => {
        if(key=="yourAge")
        {
          return 0;
        }
        var value = parseInt(group.get(key)?.value);
        return value;
      })
      .reduce((sum, val) => sum + val, 0);
      return sum > 100000 ? { sumTooLarge: true } : null;
  }

  sum80Cvalidator(group: FormGroup): any {
    const sum = Object.keys(group.controls)
      .map(key => {
        var value = parseInt(group.get(key)?.value);
        return value;
      })
      .reduce((sum, val) => sum + val, 0);
    return sum > 150000 ? { sumTooLarge: true } : null;
  }

  getDeductionForm(): FormGroup {
    return this.deductionForm;
  }

  createExemptionForm() {
    this.exemptionForm = this.fb.group({
      salaryComponents: this.fb.group({
        hra: [0],
        lta: [0],
      }, { validator: this.exemptionValidators.bind(this) }),
    });
  }

  exemptionValidators(form: FormGroup) {
    const hra = this.incomeform?.get('hra')?.value;
    const lta = this.incomeform?.get('lta')?.value;

    const annualHra = hra ? hra * 12: 0;
    const annualLta = lta ? lta * 12: 0;
    var errors = { hraTooLarge: false, ltaTooLarge: false };

    
    if (annualHra < form.value.hra) {
      errors.hraTooLarge = true;
    }

    if (annualLta < form.value.lta){
      errors.ltaTooLarge = true;
    }
    return errors.hraTooLarge || errors.ltaTooLarge ? errors : null;
  }

  getExemptionForm(): FormGroup {
    return this.exemptionForm;
  }
}
