import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeFormComponent } from './income-form/income-form.component';
import { DeductionFormComponent } from './deduction-form/deduction-form.component';
import { ExemptionFormComponent } from './exemption-form/exemption-form.component';
import { CompareTaxesComponent } from './compare-taxes/compare-taxes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComparisionTableComponent } from './comparision-table/comparision-table.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeFormComponent,
    DeductionFormComponent,
    ExemptionFormComponent,
    CompareTaxesComponent,
    NavbarComponent,
    ComparisionTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
