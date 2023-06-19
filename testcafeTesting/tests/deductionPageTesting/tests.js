import { EnvironmentConfigs, Pages } from "../../config";
import {
  incomeformSelectors,
  incomeformInputs,
} from "../../selectors/incomeDetailsPageSelector";
import {
  deductionsNegativeData,
  deductionsPositiveData,
} from "../../mockData/mockData";
import { createHtmlReport } from "testcafe-reporter-html";
import {
  getNegativeValue,
  getNonNegativeNumber,
  getZero,
} from "../../common/valuesGenerator";
import { deductionformSelectors } from "../../selectors/deductionsPageSelector";
import NavigationHelper from "../../common/navigation";

fixture("Deductions Page").page(`${Pages.incomeDetails}`);

test.meta("Description", "Verify that all input fields have default values 0.")(
  "Verify default values",
  async (t) => {
    //First input basic pay and click deductions tab
    await t.typeText(
      incomeformInputs.basicPayInput,
      getNonNegativeNumber(2500).toString()
    );
    await NavigationHelper.clickOnDeductionsTab();

    await t.expect(deductionformSelectors.elss.value).eql("0");
    await t.expect(deductionformSelectors.ppf.value).eql("0");
    await t.expect(deductionformSelectors.others.value).eql("0");
    await t.expect(deductionformSelectors.nps.value).eql("0");
    await t.expect(deductionformSelectors.parentsInsurance.value).eql("0");
    await t.expect(deductionformSelectors.selfInsurance.value).eql("0");
    await t.expect(deductionformSelectors.section80G.value).eql("0");
  }
);

test.meta(
  "Description",
  " Verify that users are not able to add negative values."
)("Verify input validation - Negative values", async (t) => {
  // First input valid basic pay
  await t.typeText(
    incomeformInputs.basicPayInput,
    getNonNegativeNumber(2500).toString()
  );
  await NavigationHelper.clickOnDeductionsTab();

  const negative = getNegativeValue(2500).toString();
  const positive = 0 + (+negative * -1).toString();

  // Attempt to enter invalid input in each deduction field
  await t.typeText(deductionformSelectors.elss, negative);
  await t.typeText(deductionformSelectors.ppf, negative);
  await t.typeText(deductionformSelectors.others, negative);
  await t.typeText(deductionformSelectors.nps, negative);
  await t.typeText(deductionformSelectors.selfInsurance, negative);
  await t.typeText(deductionformSelectors.section80G, negative);

  // Verify that all deduction input fields have been reset to 0
  await t.expect(deductionformSelectors.elss.value).eql(positive);
  await t.expect(deductionformSelectors.ppf.value).eql(positive);
  await t.expect(deductionformSelectors.others.value).eql(positive);
  await t.expect(deductionformSelectors.nps.value).eql(positive);
  await t.expect(deductionformSelectors.selfInsurance.value).eql(positive);
  await t.expect(deductionformSelectors.section80G.value).eql(positive);
});

test.meta(
  "Description",
  " Verify that users are not able to add invalid characters."
)("Verify input validation - Non Numeric Characters", async (t) => {
  // First input valid basic pay
  await t.typeText(
    incomeformInputs.basicPayInput,
    getNonNegativeNumber(2500).toString()
  );
  await NavigationHelper.clickOnDeductionsTab();

  const alpha = "abc";
  const characters = ">?:";
  // Attempt to enter invalid input in each deduction field
  await t.typeText(deductionformSelectors.elss, alpha);
  await t.typeText(deductionformSelectors.ppf, characters);
  await t.typeText(deductionformSelectors.others, alpha);
  await t.typeText(deductionformSelectors.nps, characters);
  await t.typeText(deductionformSelectors.selfInsurance, alpha);
  await t.typeText(deductionformSelectors.section80G, characters);

  // Verify that all deduction input fields have been reset to 0
  await t.expect(deductionformSelectors.elss.value).eql("0");
  await t.expect(deductionformSelectors.ppf.value).eql("0");
  await t.expect(deductionformSelectors.others.value).eql("0");
  await t.expect(deductionformSelectors.nps.value).eql("0");
  await t.expect(deductionformSelectors.selfInsurance.value).eql("0");
  await t.expect(deductionformSelectors.section80G.value).eql("0");
});

test.meta(
  "Description",
  "Verify the calculation and validation of Section 80C deductions."
)(
  "Form should show error when sum of section80C is greater than 150000",
  async (t) => {
    //First input basic pay and click deductions tab
    await t.typeText(
      incomeformInputs.basicPayInput,
      getNonNegativeNumber(2500).toString()
    );
    await NavigationHelper.clickOnDeductionsTab();

    // Find the input fields for section80C and enter values that exceed the limit
    const ppfInput = deductionformSelectors.ppf;
    const elssInput = deductionformSelectors.elss;
    const othersInput = deductionformSelectors.others;

    await t
      .click(ppfInput)
      .pressKey("ctrl+a delete")
      .typeText(
        ppfInput,
        deductionsNegativeData.invalid80C.section80C.ppf.toString()
      )
      .click(elssInput)
      .pressKey("ctrl+a delete")
      .typeText(
        elssInput,
        deductionsNegativeData.invalid80C.section80C.elss.toString()
      )
      .click(othersInput)
      .pressKey("ctrl+a delete")
      .typeText(
        othersInput,
        deductionsNegativeData.invalid80C.section80C.others.toString()
      );

    let errorMessage = deductionformSelectors.errors.section80C;

    await t
      .expect(errorMessage.innerText)
      .contains("Deduction under 80C cannot be more than ₹150000");

    await t
      .click(ppfInput)
      .pressKey("ctrl+a delete")
      .typeText(ppfInput, deductionsPositiveData.section80C.ppf.toString())
      .click(elssInput)
      .pressKey("ctrl+a delete")
      .typeText(elssInput, deductionsPositiveData.section80C.elss.toString())
      .click(othersInput)
      .pressKey("ctrl+a delete")
      .typeText(
        othersInput,
        deductionsPositiveData.section80C.others.toString()
      );
    errorMessage = deductionformSelectors.errors.section80C;
    await t.expect(errorMessage.exists).eql(false);
  }
);

test('Verify Section 80D deductions', async t => {

  // Step 1: Check the "Are your parents senior citizen with Age>60?" checkbox.
  await t.click(deductionformSelectors.yourParentsAge);

  // Step 2: Enter valid values in the Parents Health Insurance Schemes and Self Health Insurance Schemes fields.
  await t.typeText(deductionformSelectors.parentsInsurance, deductionsPositiveData.section80D.parentsHIS);
  await t.typeText(deductionformSelectors.selfInsurance, deductionsPositiveData.section80D.selfHIS);

  // verify expected result
  await t.expect(deductionformSelectors.errors.section80D.exists).eql(false);
  
  //Reset senior citizen selector
  await t
      .click(deductionformSelectors.yourParentsAge)
      .click(deductionformSelectors.parentsInsurance)
      .pressKey('ctrl+a delete')
      .typeText(deductionformSelectors.parentsInsurance, deductionsNegativeData.invalidParentHIS.nonSeniorCitizen);
  
  await t.expect(deductionformSelectors.errors.section80D.exists).eql(true);
  await t.expect(deductionformSelectors.errors.section80D.innerText).contains('')
});