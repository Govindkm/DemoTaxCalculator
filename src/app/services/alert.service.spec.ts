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

  it('should be created', () => {
    expect(alertService).toBeTruthy();
  });

  it('should call success method of toastr', () => {
    spyOn(toastrService, 'success');
    alertService.success('Test message', 'Test title');
    expect(toastrService.success).toHaveBeenCalled();
  });

  it('should call error method of toastr', () => {
    spyOn(toastrService, 'error');
    alertService.error('Test message', 'Test title');
    expect(toastrService.error).toHaveBeenCalled();
  });

  it('should call warning method of toastr', () => {
    spyOn(toastrService, 'warning');
    alertService.warning('Test message', 'Test title');
    expect(toastrService.warning).toHaveBeenCalled();
  });

  it('should call info method of toastr', () => {
    spyOn(toastrService, 'info');
    alertService.info('Test message', 'Test title');
    expect(toastrService.info).toHaveBeenCalled();
  });
});
