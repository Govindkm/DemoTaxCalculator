import { Component, OnDestroy } from '@angular/core';
import { IncomeDataService } from '../income-data.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-compare-taxes',
  templateUrl: './compare-taxes.component.html',
  styleUrls: ['./compare-taxes.component.css']
})
export class CompareTaxesComponent implements OnDestroy {
  data: any = undefined;
  constructor(public dataService: IncomeDataService, private alertService: AlertService) { 
    dataService.isLoading = true;
    this.dataService.submitForms().subscribe((data: any) => {
      alertService.info('Loading data...');
      this.data = data.data;
      this.dataService.isLoading = false;
      alertService.info('The data has been loaded successfully');
    }, (error: any) => { 
      this.dataService.isLoading = false;
      this.alertService.error(error.error.message);
    });   
   }

  ngOnDestroy() {
    this.dataService.isLoading = false;
  }

  public getAbsoluteTaxDifference() {
    return Math.abs(this.data.oldRegimeTax.tax - this.data.newRegimeTax.tax);
  }

}
