self["webpackHotUpdatemy_angular_project"]("stories-dropdown-stories",{

/***/ "./src/app/dropdown/dropdown.component.ts":
/*!************************************************!*\
  !*** ./src/app/dropdown/dropdown.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownComponent: () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _dropdown_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.component.css?ngResource */ "./src/app/dropdown/dropdown.component.css?ngResource");
/* harmony import */ var _dropdown_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dropdown_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");



let DropdownComponent = class DropdownComponent {
  label = 'Select an option';
  options = [];
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
    <label>{{ label }}</label>
    <select>
      <option *ngFor="let option of options" [value]="option">{{ option }}</option>
    </select>
  `,
  standalone: true,
  styles: [(_dropdown_component_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default())]
})], DropdownComponent);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/stories/dropdown.stories.ts":
/*!*****************************************!*\
  !*** ./src/stories/dropdown.stories.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/dropdown/dropdown.component */ "./src/app/dropdown/dropdown.component.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Dropdown',
  component: _app_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.DropdownComponent,
  argTypes: {
    label: {
      control: 'text'
    },
    options: {
      control: 'array'
    }
  }
});
const Default = {
  args: {
    label: 'Select an option',
    options: ['Option 1', 'Option 2', 'Option 3']
  }
};
;
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Select an option',\n    options: ['Option 1', 'Option 2', 'Option 3']\n  }\n}",
      ...Default.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "./src/app/dropdown/dropdown.component.css?ngResource":
/*!************************************************************!*\
  !*** ./src/app/dropdown/dropdown.component.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Für ein einheitliches Design wie bei den anderen Komponenten */
.dropdown-container {
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  
  select {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #333;
    appearance: none;
  }
  
  select:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  `, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

});
//# sourceMappingURL=stories-dropdown-stories.a19b74dee74d578600c8.hot-update.js.map