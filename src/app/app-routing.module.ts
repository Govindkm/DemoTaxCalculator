import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareTaxesComponent } from './compare-taxes/compare-taxes.component';
import { DeductionFormComponent } from './deduction-form/deduction-form.component';
import { ExemptionFormComponent } from './exemption-form/exemption-form.component';
import { IncomeFormComponent } from './income-form/income-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/income-details', pathMatch: 'full' },
  { path: 'income-details', component: IncomeFormComponent },
  { path: 'deductions', component: DeductionFormComponent },
  { path: 'exemptions', component: ExemptionFormComponent },
  { path: 'summary', component: CompareTaxesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
