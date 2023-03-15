import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IncomeDataService {

  incomeform: any;
  deductionForm: FormGroup<{ section80C: FormGroup<any>; section80D: FormGroup<any>; section80G: FormControl<number | null>; }> = new FormGroup({ section80C: new FormGroup({}), section80D: new FormGroup({}), section80G: new FormControl(0, [Validators.max(10000)]) });
  exemptionForm: FormGroup<{ salaryComponents: FormGroup<{ hra: FormControl<number | null>; lta: FormControl<number | null>; }>; }> = new FormGroup({ salaryComponents: new FormGroup({ hra: new FormControl(0), lta: new FormControl(0) }) });

  // The gross income of the user.
  grossAnnualIncome: number = 0;

  // The taxable income of the user using the old tax rules. 
  oldTaxableIncome: number = 0;

  // The taxable income of the user using the new tax rules. 
  newTaxableIncome: number = 0;

  constructor(private fb: FormBuilder) {
    this.createIncomeForm();
    this.createDeductionForm();
    this.createExemptionForm();
  }

  calculateGrossIncome() {
    const basicpay = this.incomeform?.get('basicpay')?.value;
    const da = this.incomeform?.get('da')?.value;
    const hra = this.incomeform?.get('hra')?.value;
    const lta = this.incomeform?.get('lta')?.value;
    const cityallowance = this.incomeform?.get('cityallowance')?.value;
    const miscellaneous = this.incomeform?.get('miscellaneous')?.value;
    const monthlybonus = this.incomeform?.get('monthlybonus')?.value;
    const quaterlybonus = this.incomeform?.get('quaterlybonus')?.value;
    const annualbonus = this.incomeform?.get('annualbonus')?.value;

    const sum = (basicpay + da + hra + lta + cityallowance + miscellaneous + monthlybonus) * 12 + quaterlybonus * 4 + annualbonus;
    this.grossAnnualIncome = sum;
  }

  getStandardDeduction() {
    //Currently, the standard deduction is 50000. But this can be changed in the future.
    return 50000;
  }

  getDeductions() {
    const section80C = this.deductionForm?.get('section80C')?.value;
    const section80D = this.deductionForm?.get('section80D')?.value;
    const section80G = this.deductionForm?.get('section80G')?.value;
    const sum = 0
    return sum;
  }

  // We need to calculate the gross income before we can calculate the taxable income.
  calculateNewTaxableIncome() {
    const standardDeduction = this.getStandardDeduction();
    const sum = this.grossAnnualIncome - standardDeduction;
    this.newTaxableIncome = sum;
  }

  calculateOldTaxableIncome() {
    const standardDeduction = this.getStandardDeduction();
    const allDeductibles = this.getDeductions();
    const sum = this.grossAnnualIncome - standardDeduction - allDeductibles;
    this.oldTaxableIncome = sum;
  }


  createIncomeForm() {
    this.incomeform = new FormGroup({
      basicpay: new FormControl(0, [
        Validators.required,
        Validators.min(1)
      ]),
      da: new FormControl(0),
      hra: new FormControl(0),
      lta: new FormControl(0),
      cityallowance: new FormControl(0),
      miscellaneous: new FormControl(0),
      monthlybonus: new FormControl(0),
      quaterlybonus: new FormControl(0),
      annualbonus: new FormControl(0)
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
        employerHIS: [0],
        selfHIS: [0]
      }, { validator: this.sum80Dvalidator }),
      section80G: [0, Validators.max(10000)]
    });
  }

  sum80Dvalidator(group: FormGroup): any {
    const sum = Object.keys(group.controls)
      .map(key => {
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
      }, { validator: this.exemptionValidators }),
    });
  }

  exemptionValidators(form: FormGroup) {
    const hra = this.incomeform?.get('hra')?.value;
    const lta = this.incomeform?.get('lta')?.value;
    const annualHra = hra * 12;
    const annualLta = lta * 12;
    var errors = { hraTooLarge: false, ltaTooLarge: false };
    if (annualHra < form.get('salaryComponents')?.get('hra')?.value) {
      errors.hraTooLarge = true;
    }

    if (annualLta < form.get('salaryComponents')?.get('lta')?.value) {
      errors.ltaTooLarge = true;
    }
    return errors.hraTooLarge || errors.ltaTooLarge ? errors : null;
  }

  getExemptionForm(): FormGroup {
    console.log(this.incomeform);
    return this.exemptionForm;
  }
}
