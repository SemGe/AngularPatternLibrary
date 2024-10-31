(self["webpackChunkmy_angular_project"] = self["webpackChunkmy_angular_project"] || []).push([["stories-text-field-stories"],{

/***/ "./src/app/text-field/text-field.component.ts":
/*!****************************************************!*\
  !*** ./src/app/text-field/text-field.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __esDecorate = this && this.__esDecorate || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers = this && this.__runInitializers || function (thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TextFieldComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");
let TextFieldComponent = (() => {
  let _classDecorators = [(0, core_1.Component)({
    selector: 'app-text-field',
    standalone: true,
    template: __webpack_require__(/*! ./text-field.component.html?ngResource */ "./src/app/text-field/text-field.component.html?ngResource"),
    styles: [__webpack_require__(/*! ./text-field.component.css?ngResource */ "./src/app/text-field/text-field.component.css?ngResource")]
  })];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  var TextFieldComponent = class {
    static {
      _classThis = this;
    }
    constructor() {
      this.value = '';
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
      __esDecorate(null, _classDescriptor = {
        value: _classThis
      }, _classDecorators, {
        kind: "class",
        name: _classThis.name,
        metadata: _metadata
      }, null, _classExtraInitializers);
      TextFieldComponent = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
      __runInitializers(_classThis, _classExtraInitializers);
    }
    onInput(event) {
      this.value = event.target.value;
    }
  };
  return TextFieldComponent = _classThis;
})();
exports.TextFieldComponent = TextFieldComponent;

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
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Default = void 0;
const text_field_component_1 = __webpack_require__(/*! ../app/text-field/text-field.component */ "./src/app/text-field/text-field.component.ts");
exports["default"] = {
  title: 'Components/TextField',
  component: text_field_component_1.TextFieldComponent,
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
};
const Template = args => ({
  props: args
});
exports.Default = Template.bind({});
exports.Default.args = {
  value: 'Standardwert'
};;module.exports.__namedExportsOrder = ["Default"];

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
module.exports = "<div class=\"text-field\">\n  <label class=\"text-field__label\" for=\"inputField\">Label\n      <span class=\"text-field__label-icon\">i</span>\n      <span>optional</span>\n  </label>\n  <input class=\"text-field__input\" id=\"inputField\" type=\"text\" placeholder=\"Placeholder\" (input)=\"onInput($event)\" />\n  <p class=\"text-field__hint\">Hint text2</p>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=stories-text-field-stories.iframe.bundle.js.map