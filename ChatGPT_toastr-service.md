You
---

 

I want to add a alert service in my angular form which I can use anywhere from the application to show toastr alerts. It should be customizable with respect to types of alert message and icons to be used and position of the alert message coming on the screen.

ChatGPT
-------

To add alert service in your Angular application to show toastr alerts, follow the below steps:

1.  Install Toastr NPM package for Angular by running following command:

```bash
npm install ngx-toastr --save
```

2.  Import `ToastrModule` and `BrowserAnimationsModule` modules in your AppModule as below:

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ]
})
export class AppModule { }
```

3.  Create a service called `AlertService` using angular CLI command `ng g s services/alert`. This will create a new directory structure under `src/app/services` for alert service.

```typescript
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title?: string) {
    this.toastr.success(message, title);
  }

  error(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  warning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

  info(message: string, title?: string) {
    this.toastr.info(message, title);
  }

}
```

4.  Now you can use `AlertService` in any component by importing it and injecting in the constructor.

```typescript
import { Component } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-my-component',
  template: `
    <button (click)="showSuccess()">Show Success Alert</button>
    <button (click)="showError()">Show Error Alert</button>
    <button (click)="showWarning()">Show Warning Alert</button>
    <button (click)="showInfo()">Show Info Alert</button>
  `,
  styleUrls: ['./my.component.css']
})
export class MyComponent {
  
  constructor(private alertService: AlertService) {}

  showSuccess() {
    this.alertService.success('This is success message', 'Success');
  }

  showError() {
    this.alertService.error('This is error message', 'Error');
  }

  showWarning() {
    this.alertService.warning('This is warning message', 'Warning');
  }

  showInfo() {
    this.alertService.info('This is info message', 'Info');
  }

}
```

5.  You can customize toastr alert message by passing additional options as an argument.

```typescript
this.toastr.success(message, title, {
    closeButton: true,
    positionClass: 'toast-top-right'
});
```

In above example, `closeButton` option helps to display close button on toast message so user can dismiss it manually. `positionClass` option helps to set location of the toastr with respect to screen.

That's it! You have successfully implemented your own customizable toastr alert service in Angular application.