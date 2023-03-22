import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DeductionFormComponent } from './deduction-form.component';
import { IncomeDataService } from '../income-data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

describe('DeductionFormComponent', () => {
  let component: DeductionFormComponent;
  let fixture: ComponentFixture<DeductionFormComponent>;
  let incomeDataService: IncomeDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductionFormComponent ],
      imports: [ReactiveFormsModule, FormsModule, ToastrModule.forRoot(), HttpClientModule],
      providers: [ IncomeDataService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductionFormComponent);
    component = fixture.componentInstance;
    incomeDataService = TestBed.inject(IncomeDataService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getDeductionForm method of IncomeDataService',() => {
    spyOn(incomeDataService, 'getDeductionForm');
    component.ngOnInit();
    expect(incomeDataService.getDeductionForm).toHaveBeenCalled();
  });

  it('should log deductionForm value on submitForm', () => {
    spyOn(console, 'log');
    const deductionFormValue = { //example data for testing purpose
      section80C: {
        ppf: 1000,
        elss: 1000,
        others: 1000
      },
    nps: 1000,
    section80D: {
      yourParentsAge: false,
      parentsHIS: 0,
      selfHIS: 0,
    },
    section80G: 0
    };
    component.deductionForm.setValue(deductionFormValue);
    component.submitForm();
    expect(console.log).toHaveBeenCalledWith(deductionFormValue);
  });
});
