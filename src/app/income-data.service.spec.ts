import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IncomeDataService } from './income-data.service';
import { AlertService } from './services/alert.service';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('IncomeDataService', () => {
  let service: IncomeDataService;
  let httpMock: HttpTestingController;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [
        FormBuilder,
        AlertService,
        IncomeDataService,
        HttpClient
      ]
    });
    service = TestBed.inject(IncomeDataService);
    httpMock = TestBed.inject(HttpTestingController);
    fb = TestBed.inject(FormBuilder);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create IncomeDataService', () => {
    expect(service).toBeTruthy();
  });

  describe('createIncomeForm', () => {
    it('should create the income form', () => {
      service.createIncomeForm();
      expect(service.incomeform).toBeDefined();
      expect(service.incomeform.get('basicpay')).toBeDefined();
      expect(service.incomeform.get('basicpay')?.value).toBe('');
      expect(service.incomeform.get('basicpay')?.valid).toBeFalsy();
      expect(service.incomeform.get('basicpay')?.errors).toBeTruthy();
    });
  });

  describe('createDeductionForm', () => {
    it('should create the deduction form', () => {
      service.createDeductionForm();
      expect(service.deductionForm).toBeDefined();
      expect(service.deductionForm.get('section80C')).toBeDefined();
      expect(service.deductionForm.get('section80C')?.get('ppf')).toBeDefined();
      expect(service.deductionForm.get('section80C')?.get('nps')).toBeDefined();
      expect(service.deductionForm.get('section80C')?.get('elss')).toBeDefined();
      expect(service.deductionForm.get('section80C')?.get('others')).toBeDefined();
      expect(service.deductionForm.get('section80D')).toBeDefined();
      expect(service.deductionForm.get('section80D')?.get('yourParentsAge')).toBeDefined();
      expect(service.deductionForm.get('section80D')?.get('parentsHIS')).toBeDefined();
      expect(service.deductionForm.get('section80D')?.get('selfHIS')).toBeDefined();
      expect(service.deductionForm.get('section80G')).toBeDefined();
      expect(service.deductionForm.get('section80G')?.value).toBe(0);
      expect(service.deductionForm.get('section80G')?.valid).toBeTruthy();
      expect(service.deductionForm.valid).toBeFalsy();
    });
  });

  describe('createExemptionForm', () => {
    it('should create a new exemption form', () => {
      service.createExemptionForm();
      expect(service.exemptionForm).toBeDefined();
      expect(service.exemptionForm.get('salaryComponents')).toBeDefined();
      expect(service.exemptionForm.get('salaryComponents')?.get('hra')).toBeDefined();
      expect(service.exemptionForm.get('salaryComponents')?.get('lta')).toBeDefined();
      expect(service.exemptionForm.valid).toBeTrue();
    });
  });

  describe('submitForms', () => {
    it('should make an http post request', () => {
      const url = environment.apiUrl + 'calculation/getTaxes';
      const data = {
        incomeForm: {},
        deductionForm: {},
        exemptionForm: {}
      };
      service.submitForms().subscribe();
      const req = httpMock.expectOne({ url, method: 'POST' });
      expect(req.request.method).toBe('POST');
    });
  });

  describe('sum80Cvalidator', () => {
    it('should return null if the sum of section 80C deductions is less than or equal to 150000', () => {
      const form = fb.group({
        section80C: fb.group({
          ppf: [100000],
          elss: [10000],
          others: [0]
        })
      });
      expect(service.sum80Cvalidator(form)).toBeNull();
    });

    it('should return an error object if the sum of section 80C deductions is greater than 150000', () => {
      const form =  fb.group({
          ppf: [100000],
          elss: [60000],
          others: [0]
      });
      expect(service.sum80Cvalidator(form)).toEqual({ sumTooLarge: true });
    });
  });

  describe('sum80Dvalidator', () => {
    it('should return null if the sum of section 80D deductions is less than or equal to 100000', () => {
      const form = fb.group({
        section80D: fb.group({
          yourParentsAge: [true],
          parentsHIS: [50000],
          selfHIS: [40000]
        })
      });
      expect(service.sum80Dvalidator(form)).toBeNull();
    });
  });
});

