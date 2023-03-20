import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { IncomeDataService } from '../income-data.service';
import { AlertService } from '../services/alert.service';
import { IncomeFormComponent } from './income-form.component';

describe('IncomeFormComponent', () => {
  let component: IncomeFormComponent;
  let fixture: ComponentFixture<IncomeFormComponent>;
  let incomeDataService: IncomeDataService;
  let toastrService: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncomeFormComponent],
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      providers: [AlertService, ToastrService, IncomeDataService, HttpClient]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeFormComponent);
    component = fixture.componentInstance;
    incomeDataService = TestBed.inject(IncomeDataService);
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve income form from service', () => {
    expect(component.myForm).toEqual(incomeDataService.getIncomeForm());
  });

  it('basicpay control should be required', () => {
    const basicpayControl = component.myForm.get('basicpay') as FormControl;
    expect(basicpayControl.valid).toBeFalsy();
    expect(basicpayControl.errors?.['required']).toBeTruthy();

    basicpayControl.setValue(1000);
    expect(basicpayControl.valid).toBeTruthy();
    expect(basicpayControl.errors).toBeNull();
  });

  it('basicpay control should have minimum value of 1', () => {
    const basicpayControl = component.myForm.get('basicpay') as FormControl;
    basicpayControl.setValue(0);
    expect(basicpayControl.valid).toBeFalsy();
    expect(basicpayControl.errors?.['min']).toBeTruthy();

    basicpayControl.setValue(1);
    expect(basicpayControl.valid).toBeTruthy();
    expect(basicpayControl.errors).toBeNull();
  });
});
