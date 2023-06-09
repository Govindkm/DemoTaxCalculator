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

