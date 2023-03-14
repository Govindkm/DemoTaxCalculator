import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTaxesComponent } from './compare-taxes.component';

describe('CompareTaxesComponent', () => {
  let component: CompareTaxesComponent;
  let fixture: ComponentFixture<CompareTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareTaxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
