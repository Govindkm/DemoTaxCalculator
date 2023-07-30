import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompareTaxesComponent } from './compare-taxes.component';
import { IncomeDataService } from '../income-data.service';
import { AlertService } from '../services/alert.service';
import { of, throwError } from 'rxjs';
import { ComparisionTableComponent } from './comparision-table/comparision-table.component';
import { Router } from '@angular/router';

describe('CompareTaxesComponent', () => {
  let component: CompareTaxesComponent;
  let fixture: ComponentFixture<CompareTaxesComponent>;
  let dataService: jasmine.SpyObj<IncomeDataService>;
  let alertService: jasmine.SpyObj<AlertService>;
  let router: jasmine.SpyObj<Router>;
  let mockData = {
    data: {
      newRegimeTax: {
        "Gross Annual Income": 1000000,
        "Taxable Income": 800000,
        deductions: {
          total: 120000,
          deductions: {
            "Chapter VI A deductions": 50000,
            "Exempt Allowances": 20000,
            "Standard Deduction": 50000
          }
        },
        tax: 100000
      },
      oldRegimeTax: {
        "Gross Annual Income": 1000000,
        "Taxable Income": 900000,
        deductions: {
          total: 80000,
          deductions: {
            "Chapter VI A deductions": 30000,
            "Exempt Allowances": 15000,
            "Standard Deduction": 35000
          }
        },
        tax: 90000
      }
    }
  };

  beforeEach(async(() => {
    dataService = jasmine.createSpyObj('IncomeDataService', ['submitForms']);
    alertService = jasmine.createSpyObj('AlertService', ['info', 'error']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CompareTaxesComponent, ComparisionTableComponent],
      providers: [
        { provide: IncomeDataService, useValue: dataService },
        { provide: AlertService, useValue: alertService },
        { provide: Router, useValue: router}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dataService.submitForms.and.returnValue(of(mockData));
    fixture = TestBed.createComponent(CompareTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('when submitting forms successfully', () => {
    
    it('should set the loaded data', () => {
      expect(component.data).toBeDefined();
      expect(component.data.oldRegimeTax.tax).toBe(90000);
      expect(component.data.newRegimeTax.tax).toBe(100000);
    });

    it('should call AlertService.info method', () => {
      expect(alertService.info).toHaveBeenCalledWith('The data has been loaded successfully');
    });
  });

  describe('when submitting forms with validation error', () => {
    beforeEach(() => {
      const error = {
        status: 422,
        error: {
          formErrors: { fieldA: 'Error message' }
        }
      };
      dataService.submitForms.and.returnValue(throwError(error));
      fixture = TestBed.createComponent(CompareTaxesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should call AlertService.error method', () => {
      expect(alertService.error).toHaveBeenCalledWith('Form validation error: {"fieldA":"Error message"}');
    });

    it('should navigate to income-details page', () => {
      router.navigate.and.returnValue(Promise.resolve(true));
      expect(router.navigate).toHaveBeenCalledWith(['/income-details']);
    });
  });

  describe('when submitting forms with other errors', () => {
    beforeEach(() => {
      const error = {
        error: { message: 'Server error' }
      };
      dataService.submitForms.and.returnValue(throwError(error));
      fixture = TestBed.createComponent(CompareTaxesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should call AlertService.error method', () => {
      expect(alertService.error).toHaveBeenCalledWith('Server error');
    });
  });

  describe('when getting absolute tax difference', () => {
    beforeEach(() => {
      component.data = {
        oldRegimeTax: { tax: 100 },
        newRegimeTax: { tax: 80 }
      };
    });

    it('should return the correct value', () => {
      const result = component.getAbsoluteTaxDifference();
      expect(result).toBe(20);
    });
  });

  describe('when destroying the component', () => {
    it('should set isLoading to false', () => {
      component.ngOnDestroy();
      expect(component.dataService.isLoading).toBeFalsy();
    });
  });
});
