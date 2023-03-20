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
