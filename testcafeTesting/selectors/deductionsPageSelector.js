import { Selector, t } from 'testcafe';

const deductionformSelectors = {
  ppf: Selector("#ppf"),
  elss: Selector("#elss"),
  others: Selector("#others"),
  nps: Selector("#nps"),
  yourParentsAge: Selector("#yourAge"),
  parentsInsurance: Selector("#parentsInsurance"),
  selfInsurance: Selector("#selfInsurance"),
  section80G: Selector("#section80G"),
  errors: Selector("small.text-danger")
};

export { deductionformSelectors };
