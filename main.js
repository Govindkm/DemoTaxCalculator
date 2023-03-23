"use strict";
(self["webpackChunkCalculateYourTaxWebApp"] = self["webpackChunkCalculateYourTaxWebApp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _compare_taxes_compare_taxes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare-taxes/compare-taxes.component */ 5553);
/* harmony import */ var _deduction_form_deduction_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deduction-form/deduction-form.component */ 9460);
/* harmony import */ var _exemption_form_exemption_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exemption-form/exemption-form.component */ 589);
/* harmony import */ var _income_filled_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-filled.guard */ 1887);
/* harmony import */ var _income_form_income_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-form/income-form.component */ 1005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  redirectTo: '/income-details',
  pathMatch: 'full'
}, {
  path: 'income-details',
  component: _income_form_income_form_component__WEBPACK_IMPORTED_MODULE_4__.IncomeFormComponent
}, {
  path: 'deductions',
  component: _deduction_form_deduction_form_component__WEBPACK_IMPORTED_MODULE_1__.DeductionFormComponent,
  canActivate: [_income_filled_guard__WEBPACK_IMPORTED_MODULE_3__.IncomeFilledGuard]
}, {
  path: 'exemptions',
  component: _exemption_form_exemption_form_component__WEBPACK_IMPORTED_MODULE_2__.ExemptionFormComponent,
  canActivate: [_income_filled_guard__WEBPACK_IMPORTED_MODULE_3__.IncomeFilledGuard]
}, {
  path: 'summary',
  component: _compare_taxes_compare_taxes_component__WEBPACK_IMPORTED_MODULE_0__.CompareTaxesComponent,
  canActivate: [_income_filled_guard__WEBPACK_IMPORTED_MODULE_3__.IncomeFilledGuard]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);



class AppComponent {
  constructor() {
    this.title = 'CalculateYourTax';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 9,
  vars: 0,
  consts: [[1, "container", "d-flex", "mt-5"], [1, "heading", "text-center"], ["id", "router-outlet"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Calculate Your Income Taxes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Compares your taxes under the new and old regimes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
  styles: [".d-flex[_ngcontent-%COMP%]{\n    flex-direction: column;\n}\n.heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-out;\n}\n\n.heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  transform: translateX(10px);\n}\n\n#router-outlet[_ngcontent-%COMP%] {\n    box-shadow: 8px 8px 15px #aaa;\n    padding: 2rem;\n    border-radius: 25px;\n    background-color: rgba(240, 240, 240, 0.8);\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBDQUEwQztFQUM1QyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oZWFkaW5nIHAge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLmhlYWRpbmcgcDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbn1cblxuI3JvdXRlci1vdXRsZXQge1xuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTVweCAjYWFhO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuOCk7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _income_form_income_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./income-form/income-form.component */ 1005);
/* harmony import */ var _deduction_form_deduction_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deduction-form/deduction-form.component */ 9460);
/* harmony import */ var _exemption_form_exemption_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exemption-form/exemption-form.component */ 589);
/* harmony import */ var _compare_taxes_compare_taxes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compare-taxes/compare-taxes.component */ 5553);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _compare_taxes_comparision_table_comparision_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compare-taxes/comparision-table/comparision-table.component */ 6047);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule.forRoot()]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _income_form_income_form_component__WEBPACK_IMPORTED_MODULE_2__.IncomeFormComponent, _deduction_form_deduction_form_component__WEBPACK_IMPORTED_MODULE_3__.DeductionFormComponent, _exemption_form_exemption_form_component__WEBPACK_IMPORTED_MODULE_4__.ExemptionFormComponent, _compare_taxes_compare_taxes_component__WEBPACK_IMPORTED_MODULE_5__.CompareTaxesComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__.NavbarComponent, _compare_taxes_comparision_table_comparision_table_component__WEBPACK_IMPORTED_MODULE_7__.ComparisionTableComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule]
  });
})();

/***/ }),

/***/ 5553:
/*!**********************************************************!*\
  !*** ./src/app/compare-taxes/compare-taxes.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareTaxesComponent": () => (/* binding */ CompareTaxesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _income_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../income-data.service */ 8430);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alert.service */ 5970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _comparision_table_comparision_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comparision-table/comparision-table.component */ 6047);





function CompareTaxesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CompareTaxesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Based on tax calculations we recommend you to choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " for this financial year to save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 7)(11, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Your Tax Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5)(14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-comparision-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.data.oldRegimeTax.tax < ctx_r1.data.newRegimeTax.tax ? "Old Regime" : "New Regime");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.getAbsoluteTaxDifference(), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r1.data);
  }
}
class CompareTaxesComponent {
  constructor(dataService, alertService) {
    this.dataService = dataService;
    this.alertService = alertService;
    this.data = undefined;
    dataService.isLoading = true;
    alertService.info('Loading data...');
    this.dataService.submitForms().subscribe(data => {
      this.data = data.data;
      this.dataService.isLoading = false;
      alertService.info('The data has been loaded successfully');
    }, error => {
      this.dataService.isLoading = false;
      this.alertService.error(error.error.message || 'An error has occurred');
    });
  }
  ngOnDestroy() {
    this.dataService.isLoading = false;
  }
  getAbsoluteTaxDifference() {
    return Math.abs(this.data.oldRegimeTax.tax - this.data.newRegimeTax.tax);
  }
}
CompareTaxesComponent.ɵfac = function CompareTaxesComponent_Factory(t) {
  return new (t || CompareTaxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_income_data_service__WEBPACK_IMPORTED_MODULE_0__.IncomeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService));
};
CompareTaxesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CompareTaxesComponent,
  selectors: [["app-compare-taxes"]],
  decls: 2,
  vars: 2,
  consts: [["class", "spinner-border text-primary display-5", "role", "status", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["role", "status", 1, "spinner-border", "text-primary", "display-5"], [1, "sr-only"], [1, "container"], [1, "row"], ["role", "alert", 1, "alert", "alert-primary"], [1, "col-12"], [1, "text-center"], [3, "data"]],
  template: function CompareTaxesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CompareTaxesComponent_div_0_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CompareTaxesComponent_div_1_Template, 16, 3, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataService.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.dataService.isLoading && ctx.data != undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _comparision_table_comparision_table_component__WEBPACK_IMPORTED_MODULE_2__.ComparisionTableComponent],
  styles: [".sr-only[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n}\n\n.spinner-border[_ngcontent-%COMP%]{\n    height: 10rem;\n    width: 10rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcGFyZS10YXhlcy9jb21wYXJlLXRheGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLnNyLW9ubHkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLnNwaW5uZXItYm9yZGVye1xuICAgIGhlaWdodDogMTByZW07XG4gICAgd2lkdGg6IDEwcmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6047:
/*!********************************************************************************!*\
  !*** ./src/app/compare-taxes/comparision-table/comparision-table.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisionTableComponent": () => (/* binding */ ComparisionTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ComparisionTableComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1[2]);
  }
}
class ComparisionTableComponent {
  getRowsData() {
    if (this.data === undefined) {
      console.log('Data is undefined');
      return [];
    } else {
      const newData = this.data.newRegimeTax;
      const oldData = this.data.oldRegimeTax;
      const retData = [['Gross Annual Income', newData['Gross Annual Income'], oldData['Gross Annual Income']], ['Taxable Income', newData['Taxable Income'], oldData['Taxable Income']], ['Chapter VI A deductions', newData.deductions.deductions['Chapter VI A deductions'], oldData.deductions.deductions['Chapter VI A deductions']], ['Exempt Allowances', newData.deductions.deductions['Exempt Allowances'], oldData.deductions.deductions['Exempt Allowances']], ['Standard Deduction', newData.deductions.deductions['Standard Deduction'], oldData.deductions.deductions['Standard Deduction']], ['Total Tax', newData.tax, oldData.tax]];
      console.log(retData);
      return retData;
    }
  }
  constructor() {
    this.data = undefined;
  }
}
ComparisionTableComponent.ɵfac = function ComparisionTableComponent_Factory(t) {
  return new (t || ComparisionTableComponent)();
};
ComparisionTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ComparisionTableComponent,
  selectors: [["app-comparision-table"]],
  inputs: {
    data: "data"
  },
  decls: 10,
  vars: 1,
  consts: [[1, "table"], [4, "ngFor", "ngForOf"]],
  template: function ComparisionTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Regime");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Old Regime");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ComparisionTableComponent_tr_9_Template, 8, 3, "tr", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getRowsData());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9460:
/*!************************************************************!*\
  !*** ./src/app/deduction-form/deduction-form.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeductionFormComponent": () => (/* binding */ DeductionFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _income_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../income-data.service */ 8430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function DeductionFormComponent_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deduction under 80C cannot be more than \u20B9150000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DeductionFormComponent_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " NPS deduction cannot be more than \u20B950000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DeductionFormComponent_small_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deduction under 80D cannot be more than \u20B9100000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DeductionFormComponent_small_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Deduction under 80G cannot be more than \u20B910000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class DeductionFormComponent {
  constructor(incomeDataService) {
    this.incomeDataService = incomeDataService;
  }
  ngOnInit() {
    this.deductionForm = this.incomeDataService.getDeductionForm();
  }
  submitForm() {
    console.log(this.deductionForm.value);
  }
}
DeductionFormComponent.ɵfac = function DeductionFormComponent_Factory(t) {
  return new (t || DeductionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_income_data_service__WEBPACK_IMPORTED_MODULE_0__.IncomeDataService));
};
DeductionFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DeductionFormComponent,
  selectors: [["app-deduction-form"]],
  decls: 58,
  vars: 5,
  consts: [[1, "container", "mt-3", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-6"], ["formGroupName", "section80C", 1, "form-group"], [1, "form-group"], ["for", "ppf"], ["type", "number", "id", "ppf", "formControlName", "ppf", "value", "0", "min", "0", 1, "form-control"], ["for", "elss"], ["type", "number", "id", "elss", "formControlName", "elss", "value", "0", "min", "0", 1, "form-control"], ["for", "others"], ["type", "number", "id", "others", "formControlName", "others", "value", "0", "min", "0", 1, "form-control"], ["for", "nps"], ["type", "number", "id", "nps", "formControlName", "nps", "value", "0", "min", "0", 1, "form-control"], [1, "text-info"], ["class", "text-danger", "id", "text-danger-80C", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["formGroupName", "section80D", 1, "form-group"], [1, "form-check"], ["type", "checkbox", "id", "yourAge", "name", "yourParentsAge", "formControlName", "yourParentsAge", 1, "form-check-input"], ["for", "yourAge"], ["for", "employerInsurance"], ["type", "number", "id", "parentsInsurance", "name", "parentsInsurance", "formControlName", "parentsHIS", "value", "0", "min", "0", 1, "form-control"], ["for", "selfInsurance"], ["type", "number", "id", "selfInsurance", "name", "selfInsurance", "formControlName", "selfHIS", "value", "0", "min", "0", 1, "form-control"], [1, "text-danger"], ["href", "https://cleartax.in/s/medical-insurance"], ["for", "section80G"], ["type", "number", "id", "section80G", "name", "section80G", "formControlName", "section80G", "value", "0", "min", "0", 1, "form-control"], ["id", "text-danger-80C", 1, "text-danger"]],
  template: function DeductionFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DeductionFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Annual Deductions under Section 80C (Maximum Rs 2 Lakh)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "PPF");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "ELSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4)(15, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Others");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4)(19, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "NPS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Extra upto \u20B950000 can be claimed if you are investing under NPS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DeductionFormComponent_small_25_Template, 2, 0, "small", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DeductionFormComponent_small_27_Template, 2, 0, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2)(29, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Annual Deductions under Section 80D (Maximum Rs 1 Lakh based on Age)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16)(32, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Are your parents senior citizen with Age>60?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div")(37, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Parents Health Insurance Schemes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div")(41, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Self Health Insurance Schemes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Self Health Insurance includes insurance costs for individual and dependents apart from parents");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "small", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Note: The amount exempted under 80D depends on various factors. Check: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Clear Tax: Medical Claims");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DeductionFormComponent_small_50_Template, 2, 0, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Others");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 4)(54, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Section 80G (Donations Maximum 10000)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DeductionFormComponent_small_57_Template, 2, 0, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.deductionForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deductionForm.get("section80C").errors && ctx.deductionForm.get("section80C").touched && ctx.deductionForm.get("section80C").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deductionForm.get("nps").errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deductionForm.get("section80D").errors && ctx.deductionForm.get("section80D").touched && ctx.deductionForm.get("section80D").dirty);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deductionForm.get("section80G").touched && ctx.deductionForm.get("section80G").errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 589:
/*!************************************************************!*\
  !*** ./src/app/exemption-form/exemption-form.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExemptionFormComponent": () => (/* binding */ ExemptionFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _income_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../income-data.service */ 8430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function ExemptionFormComponent_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Exemption under HRA cannot be more than \u20B950000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ExemptionFormComponent {
  constructor(incomeDataService) {
    this.incomeDataService = incomeDataService;
  }
  ngOnInit() {
    this.exemptionForm = this.incomeDataService.getExemptionForm();
  }
}
ExemptionFormComponent.ɵfac = function ExemptionFormComponent_Factory(t) {
  return new (t || ExemptionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_income_data_service__WEBPACK_IMPORTED_MODULE_0__.IncomeDataService));
};
ExemptionFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ExemptionFormComponent,
  selectors: [["app-exemption-form"]],
  decls: 17,
  vars: 2,
  consts: [[1, "container", "mt-3", 3, "formGroup"], [1, "row"], [1, "col-lg-6"], [1, "text-danger"], ["formGroupName", "salaryComponents", 1, "form-group"], [1, "form-group"], ["for", "hra"], ["type", "number", "id", "hra", "formControlName", "hra", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "lta"], ["type", "number", "id", "lta", "formControlName", "lta", 1, "form-control"]],
  template: function ExemptionFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Salary Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Note: Provide annual combined values");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Exempted HRA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ExemptionFormComponent_small_12_Template, 2, 0, "small", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Exempted LTA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.exemptionForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exemptionForm.get("salaryComponents").get("hra").touched && ctx.exemptionForm.get("salaryComponents").get("hra").errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8430:
/*!****************************************!*\
  !*** ./src/app/income-data.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeDataService": () => (/* binding */ IncomeDataService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/alert.service */ 5970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);







class IncomeDataService {
  constructor(fb, alertService, router, http) {
    this.fb = fb;
    this.alertService = alertService;
    this.router = router;
    this.http = http;
    this.isLoading = false;
    // The gross income of the user.
    this.grossAnnualIncome = 0;
    // The taxable income of the user using the old tax rules. 
    this.oldTaxableIncome = 0;
    // The taxable income of the user using the new tax rules. 
    this.newTaxableIncome = 0;
    this.apiURL = 'http://localhost:3000/api/';
    this.createIncomeForm();
    this.createDeductionForm();
    this.createExemptionForm();
    this.alertService.options = {
      closeButton: true,
      positionClass: "toast-bottom-center"
    };
    this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'calculation/';
  }
  submitForms() {
    const url = this.apiURL + '/getTaxes';
    const data = {
      incomeForm: this.incomeform?.value,
      deductionForm: this.deductionForm?.value,
      exemptionForm: this.exemptionForm?.value
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    return this.http.post(url, data);
  }
  createIncomeForm() {
    this.incomeform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      basicpay: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]),
      da: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
      hra: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
      lta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
      cityallowance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
      miscellaneous: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
      monthlybonus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
      quaterlybonus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
      annualbonus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl()
    });
  }
  getIncomeForm() {
    return this.incomeform;
  }
  createDeductionForm() {
    this.deductionForm = this.fb.group({
      section80C: this.fb.group({
        ppf: [0],
        elss: [0],
        others: [0]
      }, {
        validator: this.sum80Cvalidator
      }),
      nps: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(50000)],
      section80D: this.fb.group({
        yourParentsAge: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue],
        parentsHIS: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(50000)],
        selfHIS: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(25000)]
      }, {
        validator: this.sum80Dvalidator
      }),
      section80G: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(10000)]
    });
  }
  sum80Dvalidator(group) {
    const sum = Object.keys(group.controls).map(key => {
      if (key == "yourParentAge") {
        return 0;
      }
      var value = parseInt(group.get(key)?.value);
      return value;
    }).reduce((sum, val) => sum + val, 0);
    if (group.get('yourParentsAge')?.value) {
      return sum > 75000 ? {
        sumTooLarge: true
      } : null;
    } else {
      return sum > 50000 ? {
        sumTooLarge: true
      } : null;
    }
  }
  sum80Cvalidator(group) {
    const sum = Object.keys(group.controls).map(key => {
      var value = parseInt(group.get(key)?.value);
      console.log(key, value);
      return value;
    }).reduce((sum, val) => sum + val, 0);
    return sum > 150000 ? {
      sumTooLarge: true
    } : null;
  }
  getDeductionForm() {
    return this.deductionForm;
  }
  createExemptionForm() {
    this.exemptionForm = this.fb.group({
      salaryComponents: this.fb.group({
        hra: [0],
        lta: [0]
      }, {
        validator: this.exemptionValidators.bind(this)
      })
    });
  }
  exemptionValidators(form) {
    const hra = this.incomeform?.get('hra')?.value;
    const lta = this.incomeform?.get('lta')?.value;
    const annualHra = hra ? hra * 12 : 0;
    const annualLta = lta ? lta * 12 : 0;
    var errors = {
      hraTooLarge: false,
      ltaTooLarge: false
    };
    if (annualHra < form.value.hra) {
      errors.hraTooLarge = true;
    }
    if (annualLta < form.value.lta) {
      errors.ltaTooLarge = true;
    }
    return errors.hraTooLarge || errors.ltaTooLarge ? errors : null;
  }
  getExemptionForm() {
    return this.exemptionForm;
  }
}
IncomeDataService.ɵfac = function IncomeDataService_Factory(t) {
  return new (t || IncomeDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
IncomeDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: IncomeDataService,
  factory: IncomeDataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1887:
/*!****************************************!*\
  !*** ./src/app/income-filled.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeFilledGuard": () => (/* binding */ IncomeFilledGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _income_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income-data.service */ 8430);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/alert.service */ 5970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class IncomeFilledGuard {
  constructor(dataService, alertService, router) {
    this.dataService = dataService;
    this.alertService = alertService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.dataService.incomeform.get('basicpay')?.value <= 0) {
      this.alertService.error('Please fill in your income details first.');
      this.router.navigate(['/income-details']);
      return false;
    } else {
      return true;
    }
  }
}
IncomeFilledGuard.ɵfac = function IncomeFilledGuard_Factory(t) {
  return new (t || IncomeFilledGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_income_data_service__WEBPACK_IMPORTED_MODULE_0__.IncomeDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
IncomeFilledGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: IncomeFilledGuard,
  factory: IncomeFilledGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1005:
/*!******************************************************!*\
  !*** ./src/app/income-form/income-form.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncomeFormComponent": () => (/* binding */ IncomeFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _income_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../income-data.service */ 8430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function IncomeFormComponent_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Basic pay cannot be zero or negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class IncomeFormComponent {
  constructor(incomeDataService) {
    this.incomeDataService = incomeDataService;
    this.myForm = this.incomeDataService.getIncomeForm();
  }
}
IncomeFormComponent.ɵfac = function IncomeFormComponent_Factory(t) {
  return new (t || IncomeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_income_data_service__WEBPACK_IMPORTED_MODULE_0__.IncomeDataService));
};
IncomeFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: IncomeFormComponent,
  selectors: [["app-income-form"]],
  decls: 45,
  vars: 2,
  consts: [[1, "container", "mt-3", 3, "formGroup"], [1, "row"], [1, "col-lg-6"], [1, "form-group"], ["for", "basicpay"], ["type", "number", "id", "basicpay", "name", "basicpay", "formControlName", "basicpay", "required", "", "min", "1", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "da"], ["type", "number", "id", "da", "name", "da", "formControlName", "da", "min", "0", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], ["for", "hra"], ["type", "number", "id", "hra", "name", "hra", "formControlName", "hra", "min", "0", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], ["for", "lta"], ["type", "number", "id", "lta", "name", "lta", "formControlName", "lta", "min", "0", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], ["for", "cityallowance"], ["type", "number", "id", "cityallowance", "name", "cityallowance", "formControlName", "cityallowance", "min", "0", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], ["for", "miscellaneous"], ["type", "number", "id", "miscellaneous", "name", "miscellaneous", "formControlName", "miscellaneous", "min", "0", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], ["for", "monthlybonus", 1, "form-label"], ["type", "number", "id", "monthlybonus", "name", "monthlybonus", "formControlName", "monthlybonus", "min", "0", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], ["for", "quaterlybonus", 1, "form-label"], ["type", "number", "id", "quaterlybonus", "name", "quaterlybonus", "formControlName", "quaterlybonus", "min", "0", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], ["for", "annualbonus", 1, "form-label"], ["type", "number", "id", "annualbonus", "name", "annualbonus", "formControlName", "annualbonus", "min", "0", "value", "0", "oninput", "validity.valid||(value=0);", "placeholder", "0", 1, "form-control"], [1, "text-danger"]],
  template: function IncomeFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fixed Monthly Components:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Basic Pay:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, IncomeFormComponent_small_9_Template, 2, 0, "small", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Dearness Allowance(DA):");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3)(15, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "HRA:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3)(19, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "LTA:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3)(23, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "City Allowance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3)(27, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Miscellaneous:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2)(31, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Variable Components:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 3)(34, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Monthly Bonus:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3)(38, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Quarterly Bonus:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3)(42, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Annual Bonus:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.controls["basicpay"].touched && ctx.myForm.controls["basicpay"].errors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _income_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../income-data.service */ 8430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function NavbarComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class NavbarComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_income_data_service__WEBPACK_IMPORTED_MODULE_0__.IncomeDataService));
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 10,
  vars: 1,
  consts: [[1, "nav", "nav-tabs", "nav-pills", "justify-content-center", "mt-5"], ["routerLink", "/income-details", "routerLinkActive", "active", "id", "incometab", 1, "nav-link"], ["routerLink", "/deductions", "routerLinkActive", "active", "id", "deductionstab", 1, "nav-link"], ["routerLink", "/exemptions", "routerLinkActive", "active", "id", "exemptionstab", 1, "nav-link"], ["routerLink", "/summary", "routerLinkActive", "active", "id", "summarytab", 1, "nav-link"], [4, "ngIf"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Income Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Deductions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Exemptions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_span_8_Template, 2, 0, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Tax Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataService.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
  styles: ["nav[_ngcontent-%COMP%]{\n    padding-bottom: 0.5rem;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    color: #fff;\n    border-radius: 0;\n    margin: 5px;\n    padding: 5px 10px;\n    transition: all 0.3s ease;\n    box-shadow: 2px 2px #ccc;\n  }\n  \n  .nav-link[_ngcontent-%COMP%]:hover {\n    background-color: #87cefa;\n    color: #000;\n    box-shadow: 4px 4px #ccc;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    transition: all .2s ease-in-out;\n  }\n   \n  .nav-link[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de;\n    transform: translateY(-5px);\n    font-size: 1.1em;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    border-radius: 5px;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi5uYXYtbGluayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjY2NjO1xuICB9XG4gIFxuICAubmF2LWxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4N2NlZmE7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAjY2NjO1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gICBcbiAgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlO1xuICAgIGJvcmRlci1jb2xvcjogIzViYzBkZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5970:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4817);


class AlertService {
  constructor(toastr) {
    this.toastr = toastr;
    this._options = {
      closeButton: true,
      positionClass: 'toast-top-right'
    };
  }
  success(message, title) {
    this.toastr.success(message, title, this.options);
  }
  error(message, title) {
    this.toastr.error(message, title, this.options);
  }
  warning(message, title) {
    this.toastr.warning(message, title, this.options);
  }
  info(message, title) {
    this.toastr.info(message, title, this.options);
  }
  get options() {
    return this._options;
  }
  set options(options) {
    this._options = options;
  }
}
AlertService.ɵfac = function AlertService_Factory(t) {
  return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
};
AlertService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AlertService,
  factory: AlertService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://ec2-3-145-75-78.us-east-2.compute.amazonaws.com:3000/api/'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map