"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-accordion-stories",{

/***/ "./src/app/accordion/accordion.component.ts":
/*!**************************************************!*\
  !*** ./src/app/accordion/accordion.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionComponent: () => (/* binding */ AccordionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _accordion_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.component.css?ngResource */ "./src/app/accordion/accordion.component.css?ngResource");
/* harmony import */ var _accordion_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accordion_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");



let AccordionComponent = class AccordionComponent {
  title = 'Accordion Title';
  content = 'Accordion content goes here';
  isOpen = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  static propDecorators = {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
AccordionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-accordion',
  template: `
    <div class="accordion" (click)="toggle()">
      <h3 class="accordion__title">
        {{ title }}
        <span class="accordion__icon">{{ isOpen ? '▼' : '▲' }}</span>
      </h3>
      <div *ngIf="isOpen" class="accordion__content">{{ content }}</div>
    </div>
  `,
  styles: [(_accordion_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default())]
})], AccordionComponent);


/***/ })

});
//# sourceMappingURL=stories-accordion-stories.bcd1314a8a32c15b4d0c.hot-update.js.map