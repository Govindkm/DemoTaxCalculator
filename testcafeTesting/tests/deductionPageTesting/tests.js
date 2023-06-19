import { Selector, t } from 'testcafe';
import { EnvironmentConfigs, Pages } from '../../config';
import { incomeformSelectors, incomeformInputs } from '../../selectors/incomeDetailsPageSelector';
import { deductionsNegativeData } from '../../mockData/mockData';
import { createHtmlReport } from 'testcafe-reporter-html';
import { getNonNegativeNumber } from '../../common/valuesGenerator';
import { deductionformSelectors } from '../../selectors/deductionsPageSelector';
import NavigationHelper from "../../common/navigation";

fixture('Deductions Page').page(`${Pages.incomeDetails}`);

test.meta("Description", "Verify that all input fields have default values 0.")
("Verify default values", async t => {

  //First input basic pay and click deductions tab
  await t.typeText(incomeformInputs.basicPayInput, getNonNegativeNumber(2500).toString());
  await NavigationHelper.clickOnDeductionsTab();

  await t.expect(deductionformSelectors.elss.value).eql('0');
  await t.expect(deductionformSelectors.ppf.value).eql('0');
  await t.expect(deductionformSelectors.others.value).eql('0');
  await t.expect(deductionformSelectors.nps.value).eql('0');
  await t.expect(deductionformSelectors.parentsInsurance.value).eql('0');
  await t.expect(deductionformSelectors.selfInsurance.value).eql('0');
  await t.expect(deductionformSelectors.section80G.value).eql('0');
});

test('Form should show error when sum of section80C is greater than 150000', async (t) => {

  //First input basic pay and click deductions tab
  await t.typeText(incomeformInputs.basicPayInput, getNonNegativeNumber(2500).toString());
  await NavigationHelper.clickOnDeductionsTab();

  // Find the input fields for section80C and enter values that exceed the limit
  const ppfInput = deductionformSelectors.ppf;
  const elssInput = deductionformSelectors.elss;
  const othersInput = deductionformSelectors.others;

  await t
      .click(ppfInput)
      .pressKey('ctrl+a delete')
      .typeText(ppfInput, deductionsNegativeData.invalid80C.section80C.ppf.toString())
      .click(elssInput)
      .pressKey('ctrl+a delete')
      .typeText(elssInput, deductionsNegativeData.invalid80C.section80C.elss.toString())
      .click(othersInput)
      .pressKey('ctrl+a delete')
      .typeText(othersInput, deductionsNegativeData.invalid80C.section80C.others.toString());

  const errorMessage = deductionformSelectors.errors;

  await t
      .expect(errorMessage.innerText).contains('Deduction under 80C cannot be more than ₹150000');
});