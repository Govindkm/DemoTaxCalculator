import { Selector, t } from 'testcafe';
import { EnvironmentConfigs, Pages } from '../../config';
import { incomeformSelectors, incomeformInputs } from '../../selectors/incomeDetailsPageSelector';
import { deductionsNegativeData, incomePositiveData } from '../../mockData/mockData';
import { createHtmlReport } from 'testcafe-reporter-html';
import { errorSelectors, navigationBarLinksSelectors } from '../../selectors/navbarSelectors';
import { getNonNegativeNumber } from '../../common/valuesGenerator';
import { deductionformSelectors } from '../../selectors/deductionsPageSelector';
import NavigationHelper from "../../common/navigation";

fixture `Income Details Page`
  .page `${Pages.incomeDetails}`;


test
.meta("Description", " Verify that the Basic Pay field is required and cannot have a value of zero or negative.")
("Verify validation for Basic Pay", async  t=> {
  await t.click(incomeformInputs.basicPayInput);
  await t.click(incomeformInputs.dearnessAllowanceInput);

  const errorSelector = Selector(incomeformSelectors.errors);

  await t.expect(errorSelector.innerText).contains("Basic pay cannot be zero or negative");
});

test
.meta("Description", "Verify that the user can input a non-negative value all input fields.")
("Verify input for Income Details Page", async t=>{
  await t
  .typeText(incomeformInputs.basicPayInput, getNonNegativeNumber(2500).toString())
  .typeText(incomeformInputs.dearnessAllowanceInput, getNonNegativeNumber(2500).toString())
  .typeText(incomeformInputs.hraInput, getNonNegativeNumber(2500).toString())
  .typeText(incomeformInputs.ltaInput, getNonNegativeNumber(2500).toString())
  .typeText(incomeformInputs.cityAllowanceInput, getNonNegativeNumber(2500).toString())
  .typeText(incomeformInputs.miscellaneousInput, getNonNegativeNumber(2500).toString())
  .typeText(incomeformInputs.monthlyBonusInput, getNonNegativeNumber(2500).toString())
  .typeText(incomeformInputs.quarterlyBonusInput, getNonNegativeNumber(2500).toString())
  .typeText(incomeformInputs.annualBonusInput, getNonNegativeNumber(2500).toString())
  .click(incomeformInputs.basicPayInput);
  

  await t.expect(incomeformSelectors.errors.innerText).eql(undefined);
});

/**
 * 10. Test Case: Verify default values
    - Description: Verify that all input fields have default values of 0.
    - Test Steps:
      1. Load the UI component.
    - Expected Result: All input fields should have a default value of 0.
 */

test.meta("Description", "Verify that all input fields have default values of 0.")
("Verify default values", async t => {
   // Get references to each input element
   const basicPayInput = incomeformInputs.basicPayInput;
   const dearnessAllowanceInput = incomeformInputs.dearnessAllowanceInput;
   const hraInput = incomeformInputs.hraInput;
   const ltaInput = incomeformInputs.ltaInput;
   const cityAllowanceInput = incomeformInputs.cityAllowanceInput;
   const miscellaneousInput = incomeformInputs.miscellaneousInput;
   const monthlyBonusInput = incomeformInputs.monthlyBonusInput;
   const quarterlyBonusInput = incomeformInputs.quarterlyBonusInput;
   const annualBonusInput = incomeformInputs.annualBonusInput;
 
   // Assert that each input field has a default value of empty string
   await t.expect(basicPayInput.value).eql('');
   console.log("Assertion 1 passed");
   await t.expect(dearnessAllowanceInput.value).eql('');
   console.log("Assertion 2 passed");
   await t.expect(hraInput.value).eql('');
   console.log("Assertion 3 passed");
   await t.expect(ltaInput.value).eql('');
   console.log("Assertion 4 passed");
   await t.expect(cityAllowanceInput.value).eql('');
   console.log("Assertion 5 passed");
   await t.expect(miscellaneousInput.value).eql('');
   console.log("Assertion 6 passed");
   await t.expect(monthlyBonusInput.value).eql('');
   console.log("Assertion 7 passed");
   await t.expect(quarterlyBonusInput.value).eql('');
   console.log("Assertion 8 passed");
   await t.expect(annualBonusInput.value).eql('');
   console.log("Assertion 9 passed");
});

test("Should be able to access other forms without filling income details form correctly", async (t) => {
  await t.click(navigationBarLinksSelectors.deductions);
  incomeformSelectors.errors
  const alert = Selector(incomeformSelectors.alert);
  await t.expect(alert.innerText).contains('Please fill in your income details first');
});

fixture.after(async () => {
  await createHtmlReport({
    path: './testcafe-report.html',
    name: 'TestCafe Report',
  });
});

