import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompareTaxesComponent } from './compare-taxes.component';
import { IncomeDataService } from '../income-data.service';
import { AlertService } from '../services/alert.service';
import { of } from 'rxjs';

describe('CompareTaxesComponent', () => {
  let component: CompareTaxesComponent;
  let fixture: ComponentFixture<CompareTaxesComponent>;
  let incomeDataServiceSpy: jasmine.SpyObj<IncomeDataService>;
  let alertServiceSpy: jasmine.SpyObj<AlertService>;

  beforeEach(async () => {
    const incomeDataServiceMock = jasmine.createSpyObj('IncomeDataService', ['submitForms']);
    const alertServiceMock = jasmine.createSpyObj('AlertService', ['info', 'error']);
    await TestBed.configureTestingModule({
      declarations: [ CompareTaxesComponent ],
      providers: [
        { provide: IncomeDataService, useValue: incomeDataServiceMock },
        { provide: AlertService, useValue: alertServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareTaxesComponent);
    component = fixture.componentInstance;
    incomeDataServiceSpy = TestBed.inject(IncomeDataService) as jasmine.SpyObj<IncomeDataService>;
    alertServiceSpy = TestBed.inject(AlertService) as jasmine.SpyObj<AlertService>;
    fixture.detectChanges();
  });

  fit('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
