"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-dropdown-stories",{

/***/ "./src/stories/dropdown.stories.ts":
/*!*****************************************!*\
  !*** ./src/stories/dropdown.stories.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownComponent: () => (/* binding */ DropdownComponent),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './dropdown.component.css?ngResource'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");



let DropdownComponent = class DropdownComponent {
  label = 'Select an option';
  options = ['Option 1', 'Option 2', 'Option 3'];
  static propDecorators = {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
DropdownComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-dropdown',
  template: `
    <div class="dropdown-container">
      <label>{{ label }}</label>
      <select>
        <option *ngFor="let option of options" [value]="option">{{ option }}</option>
      </select>
    </div>
  `,
  styles: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './dropdown.component.css?ngResource'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
})], DropdownComponent);
;const __namedExportsOrder = ["DropdownComponent"];

/***/ })

});
//# sourceMappingURL=stories-dropdown-stories.03182fd62dfcbc388ebb.hot-update.js.map