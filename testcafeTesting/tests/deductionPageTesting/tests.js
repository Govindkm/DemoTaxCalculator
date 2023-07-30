import { EnvironmentConfigs, Pages } from "../../config";
import {
  incomeformSelectors,
  incomeformInputs,
} from "../../selectors/incomeDetailsPageSelector";

import incomedetails from "../../pageModels/incomedetails";

import {
  deductionMessages,
  deductionsNegativeData,
  deductionsPositiveData,
} from "../../mockData/mockData";
import {
  getNegativeValue,
  getNonNegativeNumber,
  getZero,
} from "../../common/valuesGenerator";
import { deductionformSelectors } from "../../selectors/deductionsPageSelector";
import NavigationHelper from "../../common/navigation";
import { errorSelectors } from "../../selectors/navbarSelectors";

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
    try{
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
    } catch (error){
      console.log(error);
      throw error;
    }
  }
);

test.meta(
  "Description",
  "Validate NPS input with valid data and invalid data")
("Verify NPS input", async t=>{

  await incomedetails.inputBasicPay(70000);
  await NavigationHelper.clickOnDeductionsTab();

  //With valid data

  await t.typeText(deductionformSelectors.nps, deductionsPositiveData.nps.toString());
  await t.expect(deductionformSelectors.errors.section80C.exists).notOk();
  await NavigationHelper.clickOnTaxSummaryTab();
  console.log("Valid NPS test successful");

  await NavigationHelper.clickOnDeductionsTab();
  await t.click(deductionformSelectors.nps).pressKey('ctrl+a delete');
  await t.typeText(deductionformSelectors.nps, deductionsNegativeData.invalidNPS.nps.toString());
  await t.expect(deductionformSelectors.errors.nps.innerText).contains(deductionMessages.deductionsNPSerror);
  await NavigationHelper.clickOnTaxSummaryTab();
  await t.expect(errorSelectors.toastErrors.exists).ok();
  console.log("Invalid NPS test successful");
});

test.meta(
  "Description", 
  "This test is meant to ensure that the application is correctly calculating the deductions for senior citizen parents under Section 80D of the Income Tax Act."
)
('Verify Section 80D deductions for Senior Citizen Parents', async t => {

  await incomedetails.inputBasicPay(70000);
  await NavigationHelper.clickOnDeductionsTab();

  // Step 1: Check the "Are your parents senior citizen with Age>60?" checkbox.
  await t.click(deductionformSelectors.yourParentsAge);

  // Step 2: Enter valid values in the Parents Health Insurance Schemes and Self Health Insurance Schemes fields.
  await t.typeText(deductionformSelectors.parentsInsurance, deductionsPositiveData.section80D.parentsHIS.toString());
  await t.typeText(deductionformSelectors.selfInsurance, deductionsPositiveData.section80D.selfHIS.toString());

  // verify expected result
  await NavigationHelper.clickOnTaxSummaryTab();
  await t.expect(errorSelectors.toastErrors.exists).eql(false);
});

test.meta(
  "Description",
  "This negative test is meant to verify that the application correctly displays an error message when invalid values are entered in the Parent Health Insurance Scheme field for non-senior citizen parents."
  )
  ('Verify Section 80D deductions for Non-Senior Citizen Parents with Invalid Parent Health Insurance Scheme', async t => {
  
  //Step 1: Add basic pay and navigate to deductions tab
  await incomedetails.inputBasicPay(50000);
  await NavigationHelper.clickOnDeductionsTab();
  
  
  // Step 2: Enter invalid value in the Parent Health Insurance Schemes field for non-senior citizen parents.
  await t.typeText(deductionformSelectors.parentsInsurance, deductionsNegativeData.invalidParentHIS.nonSeniorCitizen.section80D.parentsHIS.toString());
  
  // Verify expected result
  await NavigationHelper.clickOnTaxSummaryTab();
  await t.expect(errorSelectors.toastErrors.exists).eql(true);
  await t.expect(errorSelectors.toastErrors.innerText).contains(deductionMessages.nonSeniorCitizen80D);
});

test.meta(
  "Description", 
  "This test is meant to ensure that the application is correctly calculating Section 80G deductions."
);

test("Verify Section 80G deductions", async t => {

  //Add basic pay and navigate to deductions tab
  await incomedetails.inputBasicPay(50000);
  await NavigationHelper.clickOnDeductionsTab();

  // Step 1: Enter a valid value (e.g., 8000) in the Section 80G field.
  await t.typeText(deductionformSelectors.section80G, deductionsPositiveData.section80G.toString());

  // verify expected result
  await NavigationHelper.clickOnTaxSummaryTab();
  await t.expect(errorSelectors.toastErrors.exists).notOk();
  console.log("80G positive scenario passed");

  // navigate back to deduction tab and clear the field
  await NavigationHelper.clickOnDeductionsTab();
  await t.click(deductionformSelectors.section80G).pressKey('ctrl+a delete');

  // Step 2: Ensure that the 80G deduction does not exceed the maximum limit of Rs 10,000.
  await t.typeText(deductionformSelectors.section80G, deductionsNegativeData.invalid80G.section80G.toString());
  await t.expect(deductionformSelectors.errors.section80G.exists).ok;
  await t.expect(deductionformSelectors.errors.section80G.innerText).contains(deductionMessages.deductions80Gerror);
  console.log("80G negative scenario passed");
});
