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
/* harmony import */ var _app_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/text-field/text-field.component */ "./src/app/text-field/text-field.component.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/TextField',
  component: _app_text_field_text_field_component__WEBPACK_IMPORTED_MODULE_0__.TextFieldComponent,
  parameters: {
    docs: {
      description: {
        component: `### HTML Code
        \`\`\`html
        <div class="text-field">
          <label for="inputField">Textfeld:</label>
          <input id="inputField" type="text" placeholder="Geben Sie Text ein" />
          <p class="text-field__info-text">Hier können Sie Ihren Text eingeben.</p>
        </div>
        \`\`\`

        ### CSS Code
        \`\`\`css
        .text-field {
          display: flex;
          flex-direction: column;
        }
        \`\`\`
        `
      }
    }
  }
});
const Template = args => ({
  props: args
});
const Default = Template.bind({});
Default.args = {
  value: 'Standardwert'
};
;
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "(args: any) => ({\n  props: args\n})",
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