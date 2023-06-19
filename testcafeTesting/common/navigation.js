import { t, Selector } from "testcafe";

class NavigationHelper {
    constructor(){
        this.incomeDetailsBtn = Selector('#incometab');
        this.deductionsBtn = Selector('#deductionstab');
        this.exemptionsBtn = Selector('#exemptionstab');
        this.taxSummaryBtn = Selector('#summarytab');
        this.chatBotBtn = Selector('#chatbottab');
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
