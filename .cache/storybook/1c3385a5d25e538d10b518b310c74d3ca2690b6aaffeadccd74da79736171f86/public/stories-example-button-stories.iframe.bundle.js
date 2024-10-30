"use strict";
(self["webpackChunkmy_angular_project"] = self["webpackChunkmy_angular_project"] || []).push([["stories-example-button-stories"],{

/***/ "./src/app/example-button.component.ts":
/*!*********************************************!*\
  !*** ./src/app/example-button.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleButtonComponent: () => (/* binding */ ExampleButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");


let ExampleButtonComponent = class ExampleButtonComponent {
  label = 'Klick mich';
};
ExampleButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-example-button',
  template: `<button>{{ label }}</button>`,
  standalone: true
})], ExampleButtonComponent);


/***/ }),

/***/ "./src/stories/example-button.stories.ts":
/*!***********************************************!*\
  !*** ./src/stories/example-button.stories.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_example_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/example-button.component */ "./src/app/example-button.component.ts");

const meta = {
  title: 'Example/Button',
  component: _app_example_button_component__WEBPACK_IMPORTED_MODULE_0__.ExampleButtonComponent,
  tags: ['autodocs']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Default = {
  args: {
    label: 'Klick mich'
  }
};
;
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Klick mich'\n  }\n}",
      ...Default.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=stories-example-button-stories.iframe.bundle.js.map