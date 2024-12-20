(self["webpackChunkmy_angular_project"] = self["webpackChunkmy_angular_project"] || []).push([["stories-button-stories"],{

/***/ "./src/stories/button.component.ts":
/*!*****************************************!*\
  !*** ./src/stories/button.component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonComponent: () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _button_css_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css?ngResource */ "./src/stories/button.css?ngResource");
/* harmony import */ var _button_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2022/common.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");




let ButtonComponent = class ButtonComponent {
  primary = false;
  backgroundColor;
  size = 'medium';
  label = 'Button';
  onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  get classes() {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
  static propDecorators = {
    primary: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  };
};
ButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'storybook-button',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  template: ` <button
  type="button"
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor }"
>
  {{ label }}
</button>`,
  styles: [(_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default())]
})], ButtonComponent);


/***/ }),

/***/ "./src/stories/button.stories.ts":
/*!***************************************!*\
  !*** ./src/stories/button.stories.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Large: () => (/* binding */ Large),
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   Secondary: () => (/* binding */ Secondary),
/* harmony export */   Small: () => (/* binding */ Small),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/test */ "./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.component */ "./src/stories/button.component.ts");


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: _button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Primary = {
  args: {
    primary: true,
    label: 'Button'
  }
};
const Secondary = {
  args: {
    label: 'Button'
  }
};
const Large = {
  args: {
    size: 'large',
    label: 'Button'
  }
};
const Small = {
  args: {
    size: 'small',
    label: 'Button'
  }
};
;
const __namedExportsOrder = ["Primary", "Secondary", "Large", "Small"];
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...Secondary.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Button'\n  }\n}",
      ...Secondary.parameters?.docs?.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",
      ...Large.parameters?.docs?.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...Small.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",
      ...Small.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "./node_modules/@storybook/instrumenter/dist sync recursive":
/*!*********************************************************!*\
  !*** ./node_modules/@storybook/instrumenter/dist/ sync ***!
  \*********************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/instrumenter/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/@storybook/test/dist sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/@storybook/test/dist/ sync ***!
  \*************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@storybook/test/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/stories/button.css?ngResource":
/*!*******************************************!*\
  !*** ./src/stories/button.css?ngResource ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.storybook-button {
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.storybook-button--primary {
  background-color: #1ea7fd;
  color: white;
}
.storybook-button--secondary {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  background-color: transparent;
  color: #333;
}
.storybook-button--small {
  padding: 10px 16px;
  font-size: 12px;
}
.storybook-button--medium {
  padding: 11px 20px;
  font-size: 14px;
}
.storybook-button--large {
  padding: 12px 24px;
  font-size: 16px;
}
`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=stories-button-stories.iframe.bundle.js.map