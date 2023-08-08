import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IncomeFormComponent } from './income-form/income-form.component';
import { DeductionFormComponent } from './deduction-form/deduction-form.component';
import { ExemptionFormComponent } from './exemption-form/exemption-form.component';
import { CompareTaxesComponent } from './compare-taxes/compare-taxes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComparisionTableComponent } from './compare-taxes/comparision-table/comparision-table.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { DocumentManagerComponent } from './document-manager/document-manager.component';
import { DocumentViewerComponent } from './document-manager/document-viewer/document-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    IncomeFormComponent,
    DeductionFormComponent,
    ExemptionFormComponent,
    CompareTaxesComponent,
    NavbarComponent,
    ComparisionTableComponent,
    ChatbotComponent,
    DocumentManagerComponent,
    DocumentViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
