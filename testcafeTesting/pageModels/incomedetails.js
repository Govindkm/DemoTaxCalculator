import { Selector, t } from 'testcafe';

class IncomeDetailsPage {
  constructor() {
    this.myForm = Selector('form.container.mt-3');
    this.basicPayInput = Selector('#basicpay');
    this.dearnessAllowanceInput = Selector('#da');
    this.hraInput = Selector('#hra');
    this.ltaInput = Selector('#lta');
    this.cityAllowanceInput = Selector('#cityallowance');
    this.miscellaneousInput = Selector('#miscellaneous');
    this.monthlyBonusInput = Selector('#monthlybonus');
    this.quarterlyBonusInput = Selector('#quaterlybonus');
    this.annualBonusInput = Selector('#annualbonus');
    this.basicPayError = Selector('small.text-danger');
    this.alert = Selector('div[role="alert"]');
  }

  async inputBasicPay(value) {
    await t.typeText(this.basicPayInput, value.toString());
  }

  async inputDearnessAllowance(value) {
    await t.typeText(this.dearnessAllowanceInput, value.toString());
  }

  async inputHRA(value) {
    await t.typeText(this.hraInput, value.toString());
  }

  async inputLTA(value) {
    await t.typeText(this.ltaInput, value.toString());
  }

  async inputCityAllowance(value) {
    await t.typeText(this.cityAllowanceInput, value.toString());
  }

  async inputMiscellaneous(value) {
    await t.typeText(this.miscellaneousInput, value.toString());
  }

  async inputMonthlyBonus(value) {
    await t.typeText(this.monthlyBonusInput, value.toString());
  }

  async inputQuarterlyBonus(value) {
    await t.typeText(this.quarterlyBonusInput, value.toString());
  }

  async inputAnnualBonus(value) {
    await t.typeText(this.annualBonusInput, value.toString());
  }

  async clearBasicPay() {
    await t.selectText(this.basicPayInput).pressKey('delete');
  }

  async clearDearnessAllowance() {
    await t.selectText(this.dearnessAllowanceInput).pressKey('delete');
  }

  async clearHRA() {
    await t.selectText(this.hraInput).pressKey('delete');
  }

  async clearLTA() {
    await t.selectText(this.ltaInput).pressKey('delete');
  }

  async clearCityAllowance() {
    await t.selectText(this.cityAllowanceInput).pressKey('delete');
  }

  async clearMiscellaneous() {
    await t.selectText(this.miscellaneousInput).pressKey('delete');
  }

  async clearMonthlyBonus() {
    await t.selectText(this.monthlyBonusInput).pressKey('delete');
  }

  async clearQuarterlyBonus() {
    await t.selectText(this.quarterlyBonusInput).pressKey('delete');
  }

  async clearAnnualBonus() {
    await t.selectText(this.annualBonusInput).pressKey('delete');
  }

  async getBasicPayErrorMessage() {
    return await this.basicPayError.innerText;
  }

  async getAlertMessage() {
    return await this.alert.innerText;
  }
}

export default new IncomeDetailsPage();
