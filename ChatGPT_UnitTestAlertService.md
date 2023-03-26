## You

I have a service wih following code:

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _options: { 
    closeButton: boolean;
    positionClass: string;
  }

  constructor(private toastr: ToastrService) {
    this._options = {
      closeButton: true,
      positionClass: 'toast-top-right'
    }
   }

  success(message: string, title?: string) {
    this.toastr.success(message, title, this.options);
  }

  error(message: string, title?: string) {
    this.toastr.error(message, title, this.options);
  }

  warning(message: string, title?: string) {
    this.toastr.warning(message, title, this.options);
  }

  info(message: string, title?: string) {
    this.toastr.info(message, title, this.options);
  }

  get options() {
    return this._options;
  }

  set options(options: { closeButton: boolean; positionClass: string; }) {
    this._options = options;
  }

}

and I have setup test bench like this:

import { TestBed, inject } from '@angular/core/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let alertService: AlertService;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [AlertService, ToastrService]
    });
  });

  beforeEach(inject([AlertService, ToastrService], (_alertService: AlertService, _toastrService: ToastrService) => {
    alertService = _alertService;
    toastrService = _toastrService;
  }));
 
});


Write unit tests for the service.

## Genie

Sure, I can help you with that. We can write unit tests for the `AlertService` using Jasmine testing framework. Here's an example:

```
describe('AlertService', () => {
  let alertService: AlertService;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [AlertService, ToastrService]
    });

    alertService = TestBed.get(AlertService);
    toastrService = TestBed.get(ToastrService);
  });

  it('should create the service', () => {
    expect(alertService).toBeTruthy();
  });

  it('should have default options', () => {
    expect(alertService.options).toEqual({ closeButton: true, positionClass: 'toast-top-right' });
  });

  describe('success', () => {
    it('should call toastr success method with message and title', () => {
      spyOn(toastrService, 'success');
      alertService.success('Test Message', 'Test Title');
      expect(toastrService.success).toHaveBeenCalledWith('Test Message', 'Test Title', alertService.options);
    });

    it('should call toastr success method with message only', () => {
      spyOn(toastrService, 'success');
      alertService.success('Test Message');
      expect(toastrService.success).toHaveBeenCalledWith('Test Message', undefined, alertService.options);
    });
  });

  describe('error', () => {
    it('should call toastr error method with message and title', () => {
      spyOn(toastrService, 'error');
      alertService.error('Test Message', 'Test Title');
      expect(toastrService.error).toHaveBeenCalledWith('Test Message', 'Test Title', alertService.options);
    });

    it('should call toastr error method with message only', () => {
      spyOn(toastrService, 'error');
      alertService.error('Test Message');
      expect(toastrService.error).toHaveBeenCalledWith('Test Message', undefined, alertService.options);
    });
  });

  describe('warning', () => {
    it('should call toastr warning method with message and title', () => {
      spyOn(toastrService, 'warning');
      alertService.warning('Test Message', 'Test Title');
      expect(toastrService.warning).toHaveBeenCalledWith('Test Message', 'Test Title', alertService.options);
    });

    it('should call toastr warning method with message only', () => {
      spyOn(toastrService, 'warning');
      alertService.warning('Test Message');
      expect(toastrService.warning).toHaveBeenCalledWith('Test Message', undefined, alertService.options);
    });
  });

  describe('info', () => {
    it('should call toastr info method with message and title', () => {
      spyOn(toastrService, 'info');
      alertService.info('Test Message', 'Test Title');
      expect(toastrService.info).toHaveBeenCalledWith('Test Message', 'Test Title', alertService.options);
    });

    it('should call toastr info method with message only', () => {
      spyOn(toastrService, 'info');
      alertService.info('Test Message');
      expect(toastrService.info).toHaveBeenCalledWith('Test Message', undefined, alertService.options);
    });
  });

  describe('options', () => {
    it('should set options', () => {
      alertService.options = { closeButton: false, positionClass: 'toast-top-left' };
      expect(alertService.options).toEqual({ closeButton: false, positionClass: 'toast-top-left' });
    });
  });
});

```

In the above example, we have covered all the methods in the `AlertService` along with the default options. We have used Jasmine's `spyOn` function to spy on the `ToastrService` methods and checked if they were called with the correct parameters.

I hope this helps you in writing unit tests for your service. Let me know if you have any more questions or need any further assistance.