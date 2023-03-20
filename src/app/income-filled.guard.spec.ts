import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { IncomeFilledGuard } from './income-filled.guard';
import { IncomeDataService } from './income-data.service';
import { AlertService } from './services/alert.service';

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
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        IncomeFilledGuard,
        { provide: IncomeDataService, useValue: incomeDataServiceSpy },
        { provide: AlertService, useValue: alertServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
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
    it('should return true if income form has basicpay value greater than 0', () => {
      incomeDataService.incomeform = {
        get: jasmine.createSpy().and.returnValue({ value: 1000 })
      } as any;

      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(result).toBeTrue();
      expect(incomeDataService.incomeform.get).toHaveBeenCalledWith('basicpay');
    });

    it('should return false and navigate to income-details route if income form has basicpay value less than or equal to 0', () => {
      incomeDataService.incomeform = {
        get: jasmine.createSpy().and.returnValue({ value: 0 })
      } as any;

      const result = guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot);

      expect(result).toBeFalse();
      expect(incomeDataService.incomeform.get).toHaveBeenCalledWith('basicpay');
      expect(alertService.error).toHaveBeenCalledWith('Please fill in your income details first.');
      expect(router.navigate).toHaveBeenCalledWith(['/income-details']);
    });
  });
});
