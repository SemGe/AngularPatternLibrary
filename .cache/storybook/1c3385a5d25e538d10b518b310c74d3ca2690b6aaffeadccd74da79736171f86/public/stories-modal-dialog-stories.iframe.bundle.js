(self["webpackChunkmy_angular_project"] = self["webpackChunkmy_angular_project"] || []).push([["stories-modal-dialog-stories"],{

/***/ "./src/app/modal-dialog/modal-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modal-dialog/modal-dialog.component.ts ***!
  \********************************************************/
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
exports.ModalDialogComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");
let ModalDialogComponent = (() => {
  let _classDecorators = [(0, core_1.Component)({
    selector: 'app-modal-dialog',
    template: __webpack_require__(/*! ./modal-dialog.component.html?ngResource */ "./src/app/modal-dialog/modal-dialog.component.html?ngResource"),
    styles: [__webpack_require__(/*! ./modal-dialog.component.css?ngResource */ "./src/app/modal-dialog/modal-dialog.component.css?ngResource")]
  })];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  var ModalDialogComponent = class {
    static {
      _classThis = this;
    }
    constructor() {
      this.isOpen = false;
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
      ModalDialogComponent = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
      __runInitializers(_classThis, _classExtraInitializers);
    }
    open() {
      this.isOpen = true;
    }
    close() {
      this.isOpen = false;
    }
  };
  return ModalDialogComponent = _classThis;
})();
exports.ModalDialogComponent = ModalDialogComponent;

/***/ }),

/***/ "./src/stories/modal-dialog.stories.ts":
/*!*********************************************!*\
  !*** ./src/stories/modal-dialog.stories.ts ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Default = void 0;
const angular_1 = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/index.mjs");
const modal_dialog_component_1 = __webpack_require__(/*! ../app/modal-dialog/modal-dialog.component */ "./src/app/modal-dialog/modal-dialog.component.ts");
exports["default"] = {
  title: 'ModalDialog',
  component: modal_dialog_component_1.ModalDialogComponent,
  decorators: [(0, angular_1.moduleMetadata)({
    declarations: [modal_dialog_component_1.ModalDialogComponent]
  })]
};
const Default = () => ({
  component: modal_dialog_component_1.ModalDialogComponent
});
exports.Default = Default;;module.exports.__namedExportsOrder = ["Default"];

/***/ }),

/***/ "./src/app/modal-dialog/modal-dialog.component.css?ngResource":
/*!********************************************************************!*\
  !*** ./src/app/modal-dialog/modal-dialog.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 400px;
    max-width: 90%;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
  }
  `, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ "./src/app/modal-dialog/modal-dialog.component.html?ngResource":
/*!*********************************************************************!*\
  !*** ./src/app/modal-dialog/modal-dialog.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<button (click)=\"open()\">Open Modal</button>\n\n<div class=\"modal\" *ngIf=\"isOpen\">\n  <div class=\"modal-content\">\n    <span class=\"close-button\" (click)=\"close()\">×</span>\n    <p>Hier ist der Inhalt des Modals</p>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=stories-modal-dialog-stories.iframe.bundle.js.map