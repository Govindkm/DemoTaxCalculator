import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncomeDataService } from 'src/app/income-data.service';
import { ComparisionTableComponent } from './comparision-table.component';

describe('ComparisionTableComponent', () => {
  let component: ComparisionTableComponent;
  let fixture: ComponentFixture<ComparisionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisionTableComponent ],
      providers: [ IncomeDataService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an empty array if data is undefined', () => {
    component.data = undefined;
    expect(component.getRowsData()).toEqual([]);
  });

  it('should return an array of data if data is defined', () => {
    const newData = {
      "Gross Annual Income": 10000,
      "Taxable Income": 8000,
      deductions: {
        total: 2000,
        deductions: {
          "Chapter VI A deductions": 1000,
          "Exempt Allowances": 500,
          "Standard Deduction": 500,
        },
      },
      tax: 1000,
    };
    const oldData = {
      "Gross Annual Income": 10000,
      "Taxable Income": 9000,
      deductions: {
        total: 1000,
        deductions: {
          "Chapter VI A deductions": 500,
          "Exempt Allowances": 200,
          "Standard Deduction": 300,
        },
      },
      tax: 900,
    };
    component.data = {
      newRegimeTax: newData,
      oldRegimeTax: oldData,
    };
    expect(component.getRowsData()).toEqual([      ['Gross Annual Income', newData['Gross Annual Income'], oldData['Gross Annual Income']],
      ['Taxable Income', newData['Taxable Income'], oldData['Taxable Income']],
      ['Chapter VI A deductions', newData.deductions.deductions['Chapter VI A deductions'], oldData.deductions.deductions['Chapter VI A deductions']],
      ['Exempt Allowances', newData.deductions.deductions['Exempt Allowances'], oldData.deductions.deductions['Exempt Allowances']],
      ['Standard Deduction', newData.deductions.deductions['Standard Deduction'], oldData.deductions.deductions['Standard Deduction']],
      ['Total Tax', newData.tax, oldData.tax]
    ]);
  });
});
