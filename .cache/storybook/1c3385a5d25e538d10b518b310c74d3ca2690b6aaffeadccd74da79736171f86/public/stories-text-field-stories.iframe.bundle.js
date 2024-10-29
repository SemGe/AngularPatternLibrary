(self["webpackChunkmy_angular_project"] = self["webpackChunkmy_angular_project"] || []).push([["stories-text-field-stories"],{

/***/ "./src/app/text-field/text-field.component.ts":
/*!****************************************************!*\
  !*** ./src/app/text-field/text-field.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextFieldComponent: () => (/* binding */ TextFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _text_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-field.component.html?ngResource */ "./src/app/text-field/text-field.component.html?ngResource");
/* harmony import */ var _text_field_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-field.component.css?ngResource */ "./src/app/text-field/text-field.component.css?ngResource");
/* harmony import */ var _text_field_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_text_field_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");




let TextFieldComponent = class TextFieldComponent {
  value = '';
  onInput(event) {
    this.value = event.target.value;
  }
};
TextFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-text-field',
  standalone: true,
  template: _text_field_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_text_field_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TextFieldComponent);


/***/ }),

/***/ "./src/stories/ text-field.stories.ts":
/*!********************************************!*\
  !*** ./src/stories/ text-field.stories.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/index.mjs");
/* harmony import */ var _app_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/text-field/text-field.component */ "./src/app/text-field/text-field.component.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/TextField',
  component: _app_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_1__.TextFieldComponent,
  decorators: [(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({
    imports: [_app_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_1__.TextFieldComponent] // Hier importieren, statt deklarieren
  })]
});
const Default = {
  render: args => ({
    props: args
  })
};
;
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  render: (args: TextFieldComponent) => ({\n    props: args\n  })\n}",
      ...Default.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "./src/app/text-field/text-field.component.css?ngResource":
/*!****************************************************************!*\
  !*** ./src/app/text-field/text-field.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.text-field {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  margin-bottom: 1rem;
}

.text-field__label {
  font-weight: bold;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}

.text-field__label span {
  color: #999;
  font-weight: normal;
  font-size: 12px;
  margin-left: 8px;
}

.text-field__label-icon {
  margin-left: 4px;
  color: #007bff;
  font-size: 12px;
  cursor: pointer;
}

.text-field__input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
}

.text-field__input::placeholder {
  color: #ccc;
}

.text-field__hint {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
  font-style: italic;
}
`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ "./src/app/text-field/text-field.component.html?ngResource":
/*!*****************************************************************!*\
  !*** ./src/app/text-field/text-field.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"text-field\">\n  <label class=\"text-field__label\" for=\"inputField\">Label\n      <span class=\"text-field__label-icon\">i</span>\n      <span>optional</span>\n  </label>\n  <input class=\"text-field__input\" id=\"inputField\" type=\"text\" placeholder=\"Placeholder\" (input)=\"onInput($event)\" />\n  <p class=\"text-field__hint\">Hint text</p>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=stories-text-field-stories.iframe.bundle.js.map