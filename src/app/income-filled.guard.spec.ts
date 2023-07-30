import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { IncomeFilledGuard } from './income-filled.guard';
import { IncomeDataService } from './income-data.service';
import { AlertService } from './services/alert.service';
import { of } from 'rxjs';

describe('IncomeFilledGuard', () => {
  let guard: IncomeFilledGuard;
  let incomeDataService: jasmine.SpyObj<IncomeDataService>;
  let alertService: jasmine.SpyObj<AlertService>;
  let router: jasmine.SpyObj<Router>;
  const mockActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
  const mockRouterStateSnapshot = {} as RouterStateSnapshot;

  beforeEach(() => {
    const incomeDataServiceSpy = jasmine.createSpyObj('IncomeDataService', ['get']);
    const alertServiceSpy = jasmine.createSpyObj('AlertService', ['error']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);

    TestBed.configureTestingModule({
      providers: [
        IncomeFilledGuard,
        { provide: IncomeDataService, useValue: incomeDataServiceSpy },
        { provide: AlertService, useValue: alertServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    guard = TestBed.inject(IncomeFilledGuard);
    incomeDataService = TestBed.inject(IncomeDataService) as jasmine.SpyObj<IncomeDataService>;
    alertService = TestBed.inject(AlertService) as jasmine.SpyObj<AlertService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate', () => {
    beforeEach(() => {
      incomeDataService.deductionForm = {
        get: jasmine.createSpy().and.returnValue({ value: 1000 }),
        get errors() {
          return null; // Mocking the errors property
        },
      } as any;

      incomeDataService.exemptionForm = {
        get: jasmine.createSpy().and.returnValue({ value: 1000 }),
        get errors() {
          return null; // Mocking the errors property
        },
      } as any;
    });

    it('should return true if income form has basicpay value greater than 0', () => {
      incomeDataService.incomeform = {
        get: jasmine.createSpy().and.returnValue({ value: 1000 }),
      } as any;

      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(result).toBeTrue();
      expect(incomeDataService.incomeform.get).toHaveBeenCalledWith('basicpay');
    });

    it('should return false and navigate to income-details route if income form has basicpay value less than or equal to 0', () => {
      incomeDataService.incomeform = {
        get: jasmine.createSpy().and.returnValue({ value: 0 }),
      } as any;

      router.getCurrentNavigation.and.returnValue({
        extractedUrl: { toString: () => '/some-other-page' },
      } as any);

      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(result).toBeFalse();
      expect(incomeDataService.incomeform.get).toHaveBeenCalledWith('basicpay');
      expect(alertService.error).toHaveBeenCalledWith('Please fill in your income details first.');
      expect(router.navigate).toHaveBeenCalledWith(['/income-details']);
    });

    it('should return true if deduction form and exemption form do not have errors', () => {
      incomeDataService.incomeform = {
        get: jasmine.createSpy().and.returnValue({ value: 1000 }),
      } as any;

      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(result).toBeTrue();
      expect(incomeDataService.deductionForm.get).toHaveBeenCalled();
      expect(incomeDataService.exemptionForm.get).toHaveBeenCalled();
    });

    it('should return false and navigate to deductions route if deduction form has errors', () => {
      incomeDataService.incomeform = {
        get: jasmine.createSpy().and.returnValue({ value: 1000 }),
      } as any;

      incomeDataService.deductionForm = {
        get: jasmine.createSpy().and.returnValue({ errors: true })
      } as any;

      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(result).toBeFalse();
      expect(alertService.error).toHaveBeenCalledWith('Please fill in your deduction details correctly.');
      expect(router.navigate).toHaveBeenCalledWith(['/deductions']);
    });

    it('should return false and navigate to exemptions route if exemption form has errors', () => {
      incomeDataService.incomeform = {
        get: jasmine.createSpy().and.returnValue({ value: 1000 }),
      } as any;

      incomeDataService.exemptionForm = {
        get: jasmine.createSpy().and.returnValue({ errors: true })
      } as any;

      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(result).toBeFalse();
      expect(alertService.error).toHaveBeenCalledWith('Please fill in your exemption details correctly.');
      expect(router.navigate).toHaveBeenCalledWith(['/exemptions']);
    });
  });
});
