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
    if (this.dataService.incomeform.get('basicpay')?.value <= 0) {
      this.alertService.error('Please fill in your income details first.');
      this.router.navigate(['/income-details']);
      return false;
    } else {
      return true;
    }
  }
}
