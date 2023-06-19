const EnvironmentConfigs = {
    production: process.env.isLocal,
    baseURL: process.env.isLocal ? "http://localhost:4200/#/" : "https://govindkm.github.io/DemoTaxCalculator/#/"
};

const Pages = {
    incomeDetails: EnvironmentConfigs.baseURL + "income-details",
    deductions: EnvironmentConfigs.baseURL + "deductions",
    exemptions: EnvironmentConfigs.baseURL + "exemptions",
    taxSummary: EnvironmentConfigs.baseURL + "summary"
}

const tokens= {
    TEToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZkMGE5NGVjLWY5MGQtNDExOC04Yzk1LTU0NmU3NmIyNzhkYi0xNjg3MDg4MjA0MDI3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiM2NlZDQzZTUtZGE4MC00ZmE4LWI2NGYtOTc4MTQwOTZlYjY3IiwidHlwZSI6InQifQ.y7s-0lfVLE2eVXCVqdtGElBOhQb1osQnep9_yDrmxtc",
}


export {EnvironmentConfigs, Pages};