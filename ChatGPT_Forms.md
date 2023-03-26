## You

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncomeDataService } from '../income-data.service';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.css']
})
export class IncomeFormComponent {
}


Create IncomeFormComponent with two sections of input:
1. Fixed Monthly Components having form field:
    Basic Pay, HRA, LTA, City Allowance, Miscellaneous
2. Varialble Components:
    Monthly Bonus, Quaterly Bonus, Annual Bonus

Use bootstrap to style the html and place components side by side

## Genie

Sure, here's an updated code for the `IncomeFormComponent` that meets your requirements:

```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncomeDataService } from '../income-data.service';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.css']
})
export class IncomeFormComponent {
  fixedComponentsForm = new FormGroup({
    basicPay: new FormControl('', Validators.required),
    hra: new FormControl('', Validators.required),
    lta: new FormControl('', Validators.required),
    cityAllowance: new FormControl('', Validators.required),
    miscellaneous: new FormControl('', Validators.required)
  });

  variableComponentsForm = new FormGroup({
    monthlyBonus: new FormControl(''),
    quaterlyBonus: new FormControl(''),
    annualBonus: new FormControl('')
  });
}
```

In your `income-form.component.html` file, you can use Bootstrap to create a two-column layout for the input sections:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h3>Fixed Monthly Components</h3>
      <form [formGroup]="fixedComponentsForm">
        <div class="form-group">
          <label for="basicPay">Basic Pay</label>
          <input type="number" class="form-control" id="basicPay" formControlName="basicPay">
        </div>
        <div class="form-group">
          <label for="hra">HRA</label>
          <input type="number" class="form-control" id="hra" formControlName="hra">
        </div>
        <div class="form-group">
          <label for="lta">LTA</label>
          <input type="number" class="form-control" id="lta" formControlName="lta">
        </div>
        <div class="form-group">
          <label for="cityAllowance">City Allowance</label>
          <input type="number" class="form-control" id="cityAllowance" formControlName="cityAllowance">
        </div>
        <div class="form-group">
          <label for="miscellaneous">Miscellaneous</label>
          <input type="number" class="form-control" id="miscellaneous" formControlName="miscellaneous">
        </div>
      </form>
    </div>
    <div class="col-md-6">
      <h3>Variable Components</h3>
      <form [formGroup]="variableComponentsForm">
        <div class="form-group">
          <label for="monthlyBonus">Monthly Bonus</label>
          <input type="number" class="form-control" id="monthlyBonus" formControlName="monthlyBonus">
        </div>
        <div class="form-group">
          <label for="quaterlyBonus">Quaterly Bonus</label>
          <input type="number" class="form-control" id="quaterlyBonus" formControlName="quaterlyBonus">
        </div>
        <div class="form-group">
          <label for="annualBonus">Annual Bonus</label>
          <input type="number" class="form-control" id="annualBonus" formControlName="annualBonus">
        </div>
      </form>
    </div>
  </div>
</div>
```

This should give you a two-column layout with the fixed components on the left and variable components on the right. Let me know if you have any further questions!

## You

I have multiple forms components and I want to manage all forms at one common place in Angular. These forms should be able to communicate with each other. How can I acheive that?

## Genie

To manage multiple forms and enable communication between them in Angular, you can make use of a parent component to handle the form data and pass it down to the child components using `@Input` bindings. 

Here are the general steps you can take:

1. Create a parent component that will hold all of the child forms.
2. In the parent component, create a FormGroup instance using FormBuilder class and define the structure of the form controls for all the child components.
3. Bind the FormGroup instance to each child component's form using `@Input` decorators.
4. Implement event emitters in the child components and emit events to notify the parent component about any changes to the form data.
5. Use the `@Output` decorator to emit an event when a child form is submitted.
6. In the parent component, subscribe to the child form events and update the state of the FormGroup instance.
7. Use the FormGroup instance to retrieve and modify the form data as needed.

By using this approach, you can easily manage and communicate between multiple forms in your application.

## You

Is there any better way to handle than parent child communication. All forms are at same level

## Genie

One way to manage multiple forms at the same level in Angular is by using a shared service to communicate between them. 

You can create a service that has methods and properties for each form that needs to be managed, then inject this service into each of your form components. By doing so, each component will have access to the same instance of the service, which they can use to share data and communicate with each other.

Here's an example of how you could implement this:

1. Create a new Angular service using the `ng generate service` command:
```
ng generate service FormService
```

2. In your FormService class, define properties for each form you want to manage:
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  fixedMonthlyForm: FormGroup;
  variableComponentsForm: FormGroup;

  constructor() { }

}
```

3. In each of your form components, inject the FormService and set the corresponding property to the form group instance:
```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-fixed-monthly-form',
  templateUrl: './fixed-monthly-form.component.html',
  styleUrls: ['./fixed-monthly-form.component.css']
})
export class FixedMonthlyFormComponent implements OnInit {

  fixedMonthlyForm: FormGroup;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.fixedMonthlyForm = new FormGroup({
      basicPay: new FormControl('', Validators.required),
      hra: new FormControl('', Validators.required),
      lta: new FormControl('', Validators.required),
      cityAllowance: new FormControl('', Validators.required),
      miscellaneous: new FormControl('', Validators.required)
    });

    this.formService.fixedMonthlyForm = this.fixedMonthlyForm;
  }

}
```
```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-variable-components-form',
  templateUrl: './variable-components-form.component.html',
  styleUrls: ['./variable-components-form.component.css']
})
export class VariableComponentsFormComponent implements OnInit {

  variableComponentsForm: FormGroup;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.variableComponentsForm = new FormGroup({
      monthlyBonus: new FormControl('', Validators.required),
      quaterlyBonus: new FormControl('', Validators.required),
      annualBonus: new FormControl('', Validators.required)
    });

    this.formService.variableComponentsForm = this.variableComponentsForm;
  }

}
```

4. In your template files, you can use the `formGroup` directive to bind each form to its corresponding property in the FormService:
```html
<!-- fixed-monthly-form.component.html -->
<div [formGroup]="formService.fixedMonthlyForm">
  <!-- form fields here -->
</div>
```
```html
<!-- variable-components-form.component.html -->
<div [formGroup]="formService.variableComponentsForm">
  <!-- form fields here -->
</div>
```

Now, any changes made to one form will be reflected in the other form through the shared FormService instance. You can also add additional methods to the FormService to handle communication between the forms as needed.