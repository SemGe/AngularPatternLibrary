self["webpackHotUpdatemy_angular_project"]("stories-button-textfield-stories",{

/***/ "./src/app/button-textfield/button-textfield.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/button-textfield/button-textfield.component.ts ***!
  \****************************************************************/
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
exports.ButtonTextfieldComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2022/forms.mjs");
let ButtonTextfieldComponent = (() => {
  let _classDecorators = [(0, core_1.Component)({
    selector: 'app-button-textfield',
    standalone: true,
    // Macht die Komponente eigenständig
    imports: [forms_1.FormsModule],
    // Hier wird FormsModule direkt importiert
    template: __webpack_require__(/*! ./button-textfield.component.html?ngResource */ "./src/app/button-textfield/button-textfield.component.html?ngResource"),
    styles: [__webpack_require__(/*! ./button-textfield.component.css?ngResource */ "./src/app/button-textfield/button-textfield.component.css?ngResource")]
  })];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  var ButtonTextfieldComponent = class {
    static {
      _classThis = this;
    }
    constructor() {
      this.inputValue = '';
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
      ButtonTextfieldComponent = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
      __runInitializers(_classThis, _classExtraInitializers);
    }
    onButtonClick() {
      console.log('Button clicked with input:', this.inputValue);
      // Fügen Sie hier die gewünschte Funktionalität hinzu
    }
  };
  return ButtonTextfieldComponent = _classThis;
})();
exports.ButtonTextfieldComponent = ButtonTextfieldComponent;

/***/ }),

/***/ "./src/stories/button-textfield.stories.ts":
/*!*************************************************!*\
  !*** ./src/stories/button-textfield.stories.ts ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Default = void 0;
const angular_1 = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/index.mjs");
const button_textfield_component_1 = __webpack_require__(/*! ../app/button-textfield/button-textfield.component */ "./src/app/button-textfield/button-textfield.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2022/forms.mjs");
exports["default"] = {
  title: 'ButtonTextfield',
  component: button_textfield_component_1.ButtonTextfieldComponent,
  decorators: [(0, angular_1.moduleMetadata)({
    declarations: [button_textfield_component_1.ButtonTextfieldComponent],
    imports: [forms_1.FormsModule] // Import FormsModule to use ngModel
  })]
};
const Default = () => ({
  component: button_textfield_component_1.ButtonTextfieldComponent,
  props: {
    inputValue: '',
    onButtonClick: () => {
      console.log('Button clicked');
    }
  }
});
exports.Default = Default;
exports.Default.parameters = {
  docs: {
    source: {
      code: `<app-button-textfield></app-button-textfield>`
    }
  }
};;module.exports.__namedExportsOrder = ["Default"];

/***/ }),

/***/ "./src/app/button-textfield/button-textfield.component.css?ngResource":
/*!****************************************************************************!*\
  !*** ./src/app/button-textfield/button-textfield.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button-textfield {
    display: flex;
    align-items: center;
  }
  
  .button-textfield input {
    margin-right: 10px;
    padding: 8px;
    font-size: 14px;
  }
  
  .button-textfield button {
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
  }`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ "./src/app/button-textfield/button-textfield.component.html?ngResource":
/*!*****************************************************************************!*\
  !*** ./src/app/button-textfield/button-textfield.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"button-textfield\">\n    <input type=\"text\" [(ngModel)]=\"inputValue\" placeholder=\"Enter text here\">\n    <button (click)=\"onButtonClick()\">Submit</button>\n  </div>";

/***/ })

});
//# sourceMappingURL=stories-button-textfield-stories.82acb0e9a292f0396fa3.hot-update.js.map