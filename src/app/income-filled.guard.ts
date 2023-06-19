import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IncomeDataService } from './income-data.service';
import { AlertService } from './services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeFilledGuard implements CanActivate {
  constructor(private dataService: IncomeDataService, private alertService: AlertService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currenNavigation = this.router.getCurrentNavigation()?.extractedUrl.toString();
    if (this.dataService.incomeform.get('basicpay')?.value <= 0 && currenNavigation!="/income-details") {
      this.alertService.error('Please fill in your income details first.');
      this.router.navigate(['/income-details']);
      return false;
    }

    if((this.dataService.deductionForm.get("section80C")?.errors || this.dataService.deductionForm.get('section80D')?.errors || this.dataService.deductionForm.get('section80G')?.errors) && currenNavigation!="/deductions"){
      this.alertService.error('Please fill in your deduction details correctly.');
      this.router.navigate(['/deductions'])
      return false;
    }
    
    if(this.dataService.exemptionForm.get('salaryComponents')?.errors && currenNavigation!="/exemptions"){
      this.alertService.error('Please fill in your exemption details correctly.');
      this.router.navigate(['/exemptions'])
      return false;
    }

    return true;
  }
}
