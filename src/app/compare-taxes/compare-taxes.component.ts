import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeDataService } from '../income-data.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-compare-taxes',
  templateUrl: './compare-taxes.component.html',
  styleUrls: ['./compare-taxes.component.css']
})
export class CompareTaxesComponent implements OnDestroy {
  data: any = undefined;
  constructor(public dataService: IncomeDataService, private alertService: AlertService, private router: Router) { 
    dataService.isLoading = true;
    this.dataService.submitForms().subscribe((data: any) => {
      this.data = data.data;
      this.dataService.isLoading = false;
      alertService.info('The data has been loaded successfully');
    }, (error: any) => { 
      this.dataService.isLoading = false;
      if(error.status === 422){
        console.error(error);
        this.alertService.error('Form validation error: ' + JSON.stringify(error.error.formErrors) || 'An error has occurred');
        this.router.navigate(['/income-details']);
        return;
      }
      this.alertService.error(error.error.message || 'An error has occurred');
    });   
   }

  ngOnDestroy() {
    this.dataService.isLoading = false;
  }

  public getAbsoluteTaxDifference() {
    return Math.abs(this.data.oldRegimeTax.tax - this.data.newRegimeTax.tax);
  }

}
