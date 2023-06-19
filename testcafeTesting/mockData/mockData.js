// Define mock data
const incomePositiveData = {
  basicpay: 50000,
  da: 10000,
  hra: 8000,
  lta: 5000,
  cityallowance: 3000,
  miscellaneous: 2000,
  monthlybonus: 5000,
  quaterlybonus: 20000,
  annualbonus: 50000,
};

const deductionsPositiveData = {
  section80C: {
    ppf: 50000,
    elss: 10000,
    others: 20000,
  },
  nps: 40000,
  section80D: {
    yourParentsAge: true,
    parentsHIS: 30000,
    selfHIS: 50000,
  },
  section80G: 8000,
};

const deductionsNegativeData = {
  invalid80C: {
    section80C: {
      ppf: 150000,
      elss: 10000,
      others: 20000,
    },
    nps: 0,
    section80D: {
      yourParentsAge: false,
      parentsHIS: 0,
      selfHIS: 0,
    },
    section80G: 0,
  },
  invalidNPS: {
    section80C: {
      ppf: 0,
      elss: 0,
      others: 0,
    },
    nps: 51000,
    section80D: {
      yourParentsAge: false,
      parentsHIS: 0,
      selfHIS: 0,
    },
    section80G: 0,
  },
  invalidParentHIS: {
    nonSeniorCitizen: {
      section80C: {
        ppf: 0,
        elss: 0,
        others: 0,
      },
      nps: 0,
      section80D: {
        yourParentsAge: false,
        parentsHIS: 26000,
        selfHIS: 0,
      },
      section80G: 0,
    },

    seniorCitizen: {
      section80C: {
        ppf: 0,
        elss: 0,
        others: 0,
      },
      nps: 0,
      section80D: {
        yourParentsAge: true,
        parentsHIS: 51000,
        selfHIS: 0,
      },
      section80G: 0,
    },
  },
  invalidSelfHIS: {
    section80C: {
      ppf: 0,
      elss: 0,
      others: 0,
    },
    nps: 0,
    section80D: {
      yourParentsAge: false,
      parentsHIS: 0,
      selfHIS: 26000,
    },
    section80G: 0,
  },
  invalid80G: {
    section80C: {
      ppf: 0,
      elss: 0,
      others: 0,
    },
    nps: 0,
    section80D: {
      yourParentsAge: false,
      parentsHIS: 0,
      selfHIS: 0,
    },
    section80G: 10001,
  },
  invalidTotal: {
    incomeForm: {
      basicpay: 3000,
      da: 0,
      hra: 500,
      lta: 500,
      cityallowance: 0,
      miscellaneous: 0,
      monthlybonus: 0,
      quaterlybonus: 0,
      annualbonus: 0,
    },
    deductionForm: {
        section80C: {
            ppf: 25000,
            elss: 2000,
            others: 3000,
          },
          nps: 15000,
          section80D: {
            yourParentsAge: false,
            parentsHIS: 5000,
            selfHIS: 5000,
          },
          section80G: 10000,
    }
  },
};

const exemptionsPositveData = {
  salaryComponents: {
    lta: 15000,
    hra: 50000
  }
}

const exemptionsNegativeData = {
  incomeForm: {
    basicpay: 3000,
    da: 0,
    hra: 500,
    lta: 500,
    cityallowance: 0,
    miscellaneous: 0,
    monthlybonus: 0,
    quaterlybonus: 0,
    annualbonus: 0,
  }, 
  exemptionForm: {
    salaryComponents: {
      lta: 15000,
      hra: 50000
    }
  }

}

export{incomePositiveData, deductionsNegativeData, deductionsPositiveData, exemptionsNegativeData, exemptionsPositveData};


