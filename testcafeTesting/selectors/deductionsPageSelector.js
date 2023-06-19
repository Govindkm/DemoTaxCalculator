import { Selector, t } from 'testcafe';

const deductionformSelectors = {
  ppf: Selector("#ppf"),
  elss: Selector("#elss"),
  others: Selector("#others"),
  nps: Selector("#nps"),
  yourParentsAge: Selector("#yourParentsAge"),
  parentsInsurance: Selector("#parentsInsurance"),
  selfInsurance: Selector("#selfInsurance"),
  section80G: Selector("#section80G"),
  errors: {
    section80C: Selector('#text-danger-80C'),
    section80G: Selector('#text-danger-80G'),
    section80D: Selector('#text-danger-80D'),
    nps: Selector('#text-danger-nps')
  }
};

export { deductionformSelectors };
