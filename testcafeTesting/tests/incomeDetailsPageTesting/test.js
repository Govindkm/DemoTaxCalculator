import { Selector, t } from 'testcafe';

fixture `Income Details Page`
  .page `http://192.168.31.63:4200/income-details`;

test('Validate Income Form Fields with Journeys', async (t) => {

  // Arrange 
  const basicPayInput = Selector('#basicpay');
  const dearnessAllowanceInput = Selector('#da');
  const hraInput = Selector('#hra');
  const ltaInput = Selector('#lta');
  const cityAllowanceInput = Selector('#cityallowance');
  const miscellaneousInput = Selector('#miscellaneous');
  const monthlyBonusInput = Selector('#monthlybonus');
  const quarterlyBonusInput = Selector('#quaterlybonus');
  const annualBonusInput = Selector('#annualbonus');
  

  //Act
  await t.typeText(basicPayInput, '10000')
         .typeText(dearnessAllowanceInput, '2000')
         .typeText(hraInput,'5000')
         .typeText(ltaInput, '8000')
         .typeText(cityAllowanceInput, '1500') 
         .typeText(miscellaneousInput, '3500')
         .typeText(monthlyBonusInput, '7500') 
         .typeText(quarterlyBonusInput,'6000')
         .typeText(annualBonusInput, '12000'); 

  //Assert
  await t.expect(basicPayInput.value).eql('10000')
         .expect(dearnessAllowanceInput.value).eql('2000')
         .expect(hraInput.value).eql('5000')
         .expect(ltaInput.value).eql('8000')
         .expect(cityAllowanceInput.value).eql('1500')
         .expect(miscellaneousInput.value).eql('3500')
         .expect(monthlyBonusInput.value).eql('7500')
         .expect(quarterlyBonusInput.value).eql('6000')
         .expect(annualBonusInput.value).eql('12000');
});

test("Basic pay field validation", async (t) => {
  await t
    .typeText("#basicpay", "-").click("#da")
    .expect(Selector(".text-danger").innerText)
    .contains("Basic pay cannot be zero or negative");

  await t
    .typeText("#basicpay", "0").click("#da")
    .expect(Selector(".text-danger").exists&&Selector(".text-danger").innerText)
    .contains("Basic pay cannot be zero or negative");
  
  await t
    .typeText("#basicpay", "10").click("#da")
    .expect(Selector(".text-danger").exists)
    .notOk();
});

fixture('Deductions Page').page('http://192.168.31.63:4200/deductions');
// Generate testcafe test case to check form validation for this: HTML <div class="form-group" formGroupName="section80C"> <div class="form-group"> <label for="ppf">PPF</label> <input type="number" id="ppf" class="form-control" formControlName="ppf" value="0" min="0"> </div> <div class="form-group"> <label for="nps">NPS</label> <input type="number" id="nps" class="form-control" formControlName="nps" value="0" min="0"> </div> <div class="form-group"> <label for="elss">ELSS</label> <input type="number" id="elss" class="form-control" formControlName="elss" value="0" min="0"> </div> <div class="form-group"> <label for="others">Others</label> <input type="number" id="others" class="form-control" formControlName="others" value="0" min="0"> </div> </div> Typescript form: createDeductionForm() { this.deductionForm = this.fb.group({ section80C: this.fb.group({ ppf: [0], nps: [0], elss: [0], others: [0] }, { validator: this.sum80Cvalidator }), section80D: this.fb.group({ employerHIS: [0], selfHIS: [0] }, { validator: this.sum80Dvalidator }), section80G: [0, Validators.max(10000)] }); }


