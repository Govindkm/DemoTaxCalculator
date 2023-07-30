import { t, Selector } from "testcafe";
import { navigationBarLinksSelectors } from "../selectors/navbarSelectors";

class NavigationHelper {
    constructor(){
        this.incomeDetailsBtn = Selector(navigationBarLinksSelectors.incomeDetails);
        this.deductionsBtn = Selector(navigationBarLinksSelectors.deductions);
        this.exemptionsBtn = Selector(navigationBarLinksSelectors.exemptions);
        this.taxSummaryBtn = Selector(navigationBarLinksSelectors.taxSummary);
        this.chatBotBtn = Selector(navigationBarLinksSelectors.chatbot);
    }

    async clickOnIncomeTab(){
        await t.click(this.incomeDetailsBtn);
    }

    async clickOnDeductionsTab(){
        await t.click(this.deductionsBtn);
    }

    async clickOnExemptionsTab(){
        await t.click(this.exemptionsBtn);
    }

    async clickOnTaxSummaryTab(){
        await t.click(this.taxSummaryBtn);
    }

    async clickOnChatBotTab(){
        await t.click(this.chatBotBtn);
    }
}

export default new NavigationHelper();
