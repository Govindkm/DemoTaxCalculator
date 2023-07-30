import { Selector } from "testcafe";

const navigationBarLinksSelectors = {
    incomeDetails: 'a#incometab',
    deductions: 'a#deductionstab',
    exemptions: 'a#exemptionstab',
    taxSummary: 'a#summarytab',
    chatbot: 'a#chatbottab',
  };

const errorSelectors = {
    toastErrors: Selector('.toast-error'),
}


export{navigationBarLinksSelectors, errorSelectors};
  