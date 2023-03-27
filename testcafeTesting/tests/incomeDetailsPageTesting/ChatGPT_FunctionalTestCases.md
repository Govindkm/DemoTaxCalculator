---
Crafted by [Genie](https://marketplace.visualstudio.com/items?itemName=genieai.chatgpt-vscode)

---

## You

I have a demo applications for income tax calculations. The application has 3 pages with 3 forms. 
1. Inome Details page with input fields
    a. Fixed Monthly Components with fields Basic Pay(which is not null and not negative field), Dearness Allowances, HRA, LTA, City Allowance, Miscellaneous
       Allowance, HRA 
    b. Variable Components with fields monthly bonus, quaterly bonus, annual bonus
2. Deductions Page: For income tax deductions under various sections. The fields have validations.
3. Exemptions: For various exempted salary component.

Based on calculations from backend service the application generates comparision data which is used to render a summary table with comparision between the different income tax regimes in India.

Write all functional test cases. Include negative tests as well.

## ChatGPT

## Functional Test Cases for Income Tax Calculation Application

### Page 1: Income Details
#### Positive Test Cases
1. Verify that all input fields are present on the page.
2. Verify that all input fields accept valid inputs.
3. Verify that the Basic Pay field is not null and not negative.
4. Verify that the application calculates the correct income tax based on the user's input.

#### Negative Test Cases
1. Verify that the application throws an error message if the Basic Pay field is left blank.
2. Verify that the application throws an error message if the Basic Pay field is negative.
3. Verify that the application throws an error message if any of the other fields are left blank or contain invalid inputs.

### Page 2: Deductions
#### Positive Test Cases
1. Verify that all input fields are present on the page.
2. Verify that all input fields accept valid inputs.
3. Verify that the application calculates the correct income tax based on the user's input.

#### Negative Test Cases
1. Verify that the application throws an error message if any of the fields are left blank or contain invalid inputs.
2. Verify that the application throws an error message if the user tries to enter a deduction amount greater than the total income.

### Page 3: Exemptions
#### Positive Test Cases
1. Verify that all input fields are present on the page.
2. Verify that all input fields accept valid inputs.
3. Verify that the application calculates the correct income tax based on the user's input.

#### Negative Test Cases
1. Verify that the application throws an error message if any of the fields are left blank or contain invalid inputs.
2. Verify that the application throws an error message if the user tries to enter an exemption amount greater than the total income.

### Summary Table
#### Positive Test Cases
1. Verify that the summary table is generated after the user submits all required inputs on each page.
2. Verify that the summary table displays the correct income tax calculations for each income tax regime.

#### Negative Test Cases
1. Verify that the application throws an error message if any of the required input fields are left blank or contain invalid inputs.
2. Verify that the application throws an error message if the user tries to submit incomplete or incorrect information.