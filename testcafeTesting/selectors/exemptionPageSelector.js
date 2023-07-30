import { Selector, t } from 'testcafe';
const exemptionformSelectors = {
    exemptionForm: Selector('form.container.mt-3'),
    hra: Selector('#hra'),
    lta: Selector('#lta'),
    errors: Selector('#exemptionError')
  };

  export{exemptionformSelectors}
  