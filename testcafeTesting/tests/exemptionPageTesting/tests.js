import { EnvironmentConfigs, Pages } from "../../config";
import incomedetails from "../../pageModels/incomedetails";

import {
    exemptionsNegativeData,
  exemptionsPositveData,
  incomePositiveData,
} from "../../mockData/mockData";
import {
  getNegativeValue,
  getNonNegativeNumber,
  getZero,
} from "../../common/valuesGenerator";
import { deductionformSelectors } from "../../selectors/deductionsPageSelector";
import NavigationHelper from "../../common/navigation";
import { errorSelectors } from "../../selectors/navbarSelectors";
import { exemptionformSelectors } from "../../selectors/exemptionPageSelector";

fixture("Exemption Page").page(`${Pages.incomeDetails}`);

test.meta("Description", "User should be able to input valid values for HRA and LTA")
("Accept Valid Input", async t => {
    await incomedetails.basicPayInput(incomePositiveData.basicpay);
    await incomedetails.hraInput(incomePositiveData.hra);
    await incomedetails.ltaInput(incomePositiveData.lta);

    //Move to navigation tab
    await NavigationHelper.clickOnExemptionsTab();
    
    await t.typeText(exemptionformSelectors.hra, exemptionsPositveData.salaryComponents.hra.toString());
    await t.typeText(exemptionformSelectors.lta, exemptionsPositveData.salaryComponents.lta.toString());

    await t.expect(exemptionformSelectors.errors.exists).notOk();
    await NavigationHelper.clickOnTaxSummaryTab();
    await t.expect(errorSelectors.toastErrors.exists).notOk();
});

test.meta("Description", "User should be getting validation errors for invalid lta and hra exemptions")
("Show error messages for invalid inputs", async t => {
    await incomedetails.basicPayInput(exemptionsNegativeData.incomeForm.basicpay);
    await incomedetails.hraInput(exemptionsNegativeData.incomeForm.hra);
    await incomedetails.ltaInput(exemptionsNegativeData.incomeForm.lta);

    //Move to navigation tab
    await NavigationHelper.clickOnExemptionsTab();
    
    await t.typeText(exemptionformSelectors.hra, exemptionsNegativeData.exemptionForm.salaryComponents.hra.toString());
    await t.typeText(exemptionformSelectors.lta, exemptionsNegativeData.exemptionForm.salaryComponents.lta.toString());
    await t.expect(exemptionformSelectors.errors.exists).ok();
    await NavigationHelper.clickOnTaxSummaryTab();
    await t.expect(errorSelectors.toastErrors.exists).notOk();
});


