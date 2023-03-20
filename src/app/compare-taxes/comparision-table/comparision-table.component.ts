import { Component, Input } from '@angular/core';
import { IncomeDataService } from 'src/app/income-data.service';

interface TaxComparision {
  newRegimeTax: RegimeTax;
  oldRegimeTax: RegimeTax;
}

interface RegimeTax {
  "Gross Annual Income": number;
  "Taxable Income": number;
  deductions: {
    total: number;
    deductions: {
      "Chapter VI A deductions": number;
      "Exempt Allowances": number;
      "Standard Deduction": number;
    };
  };
  tax: number;
}


@Component({
  selector: 'app-comparision-table',
  templateUrl: './comparision-table.component.html',
  styleUrls: ['./comparision-table.component.css']
})
export class ComparisionTableComponent {

  @Input() data: TaxComparision | undefined = undefined;

  public getRowsData() {
    if (this.data === undefined) {
      console.log('Data is undefined');
      return [];
    } else {
      const newData = this.data.newRegimeTax;
      const oldData = this.data.oldRegimeTax;

      const retData =  [
        ['Gross Annual Income', newData['Gross Annual Income'], oldData['Gross Annual Income']],
        ['Taxable Income', newData['Taxable Income'], oldData['Taxable Income']],
        ['Chapter VI A deductions', newData.deductions.deductions['Chapter VI A deductions'], oldData.deductions.deductions['Chapter VI A deductions']],
        ['Exempt Allowances', newData.deductions.deductions['Exempt Allowances'], oldData.deductions.deductions['Exempt Allowances']],
        ['Standard Deduction', newData.deductions.deductions['Standard Deduction'], oldData.deductions.deductions['Standard Deduction']],
        ['Total Tax', newData.tax, oldData.tax]
      ]
      console.log(retData);
      return retData;
    }
  }

  constructor(){}
}
