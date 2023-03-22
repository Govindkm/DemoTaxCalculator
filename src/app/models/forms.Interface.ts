import { AbstractControl, FormControl, FormGroup } from "@angular/forms"

export interface incomeFormInterface {
    basicpay: FormControl,
    da: FormControl,
    hra: FormControl,
    lta: FormControl,
    cityallowance: FormControl,
    miscellaneous: FormControl,
    monthlybonus: FormControl,
    quaterlybonus: FormControl,
    annualbonus: FormControl
}

export interface deductionFormInterface {
    section80C: FormGroup<{
        ppf: FormControl,
        elss: FormControl,
        others: FormControl
    }>,
    nps: FormControl,
    section80D: FormGroup<{
        yourParentsAge?: FormControl,
        seniorCitizenParents?: FormControl,
        parentsHIS: FormControl,
        selfHIS: FormControl
    }>,
    section80G: FormControl
}

export interface exemptionFormInterface {
    salaryComponents: FormGroup<{
        hra: FormControl,
        lta: FormControl,
    }>
}