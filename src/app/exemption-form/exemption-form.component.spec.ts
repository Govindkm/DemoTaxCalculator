import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { IncomeDataService } from '../income-data.service';

import { ExemptionFormComponent } from './exemption-form.component';

describe('ExemptionFormComponent', () => {
  let component: ExemptionFormComponent;
  let fixture: ComponentFixture<ExemptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemptionFormComponent ],
      imports: [ ReactiveFormsModule, FormsModule, ToastrModule.forRoot(), HttpClientModule],
      providers: [ FormBuilder, IncomeDataService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set exemptionForm after component initialized', () => {
    const incomeDataService = TestBed.inject(IncomeDataService);
    spyOn(incomeDataService, 'getExemptionForm').and.returnValue(new FormGroup({}));

    component.ngOnInit();
    
    expect(incomeDataService.getExemptionForm).toHaveBeenCalled();
  });
});
