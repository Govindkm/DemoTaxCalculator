import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeFormComponent } from './income-form/income-form.component';
import { DeductionFormComponent } from './deduction-form/deduction-form.component';
import { ExemptionFormComponent } from './exemption-form/exemption-form.component';
import { CompareTaxesComponent } from './compare-taxes/compare-taxes.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeFormComponent,
    DeductionFormComponent,
    ExemptionFormComponent,
    CompareTaxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
