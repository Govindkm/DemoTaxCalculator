import { Selector, t } from 'testcafe';

const incomeformSelectors = {
    myForm: 'form.container.mt-3',
    basicpay: '#basicpay',
    da: '#da',
    hra: '#hra',
    lta: '#lta',
    cityallowance: '#cityallowance',
    miscellaneous: '#miscellaneous',
    monthlybonus: '#monthlybonus',
    quaterlybonus: '#quaterlybonus',
    annualbonus: '#annualbonus',
    errors: "small.text-danger",
    alert: 'div[role="alert"]'
  };

  const basicPayInput = Selector(incomeformSelectors.basicpay);
  const dearnessAllowanceInput = Selector(incomeformSelectors.da);
  const hraInput = Selector(incomeformSelectors.hra);
  const ltaInput = Selector(incomeformSelectors.lta);
  const cityAllowanceInput = Selector(incomeformSelectors.cityallowance);
  const miscellaneousInput = Selector(incomeformSelectors.miscellaneous);
  const monthlyBonusInput = Selector(incomeformSelectors.monthlybonus);
  const quarterlyBonusInput = Selector(incomeformSelectors.quaterlybonus);
  const annualBonusInput = Selector(incomeformSelectors.annualbonus);

  const incomeformInputs = {basicPayInput, dearnessAllowanceInput, hraInput, ltaInput, cityAllowanceInput, miscellaneousInput, monthlyBonusInput, quarterlyBonusInput, annualBonusInput};

  export{incomeformSelectors, incomeformInputs};
  