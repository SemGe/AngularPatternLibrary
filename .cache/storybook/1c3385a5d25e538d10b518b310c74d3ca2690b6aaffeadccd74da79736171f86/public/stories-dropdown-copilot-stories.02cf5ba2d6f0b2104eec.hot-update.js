"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-dropdown-copilot-stories",{

/***/ "./src/app/dropdown-copilot/dropdown-copilot.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dropdown-copilot/dropdown-copilot.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
exports.DropdownCopilotComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");
let DropdownCopilotComponent = (() => {
  let _classDecorators = [(0, core_1.Component)({
    selector: 'app-dropdown-copilot',
    template: __webpack_require__(/*! ./dropdown-copilot.component.html?ngResource */ "./src/app/dropdown-copilot/dropdown-copilot.component.html?ngResource"),
    styles: [__webpack_require__(/*! ./dropdown-copilot.component.css?ngResource */ "./src/app/dropdown-copilot/dropdown-copilot.component.css?ngResource")]
  })];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  var DropdownCopilotComponent = class {
    static {
      _classThis = this;
    }
    constructor() {
      this.isDropdownOpen = false;
      this.options = [];
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
      DropdownCopilotComponent = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
    static {
      this.propDecorators = {
        isDropdownOpen: [{
          type: core_1.Input
        }],
        options: [{
          type: core_1.Input
        }]
      };
    }
    static {
      __runInitializers(_classThis, _classExtraInitializers);
    }
  };
  return DropdownCopilotComponent = _classThis;
})();
exports.DropdownCopilotComponent = DropdownCopilotComponent;

/***/ }),

/***/ "./src/stories/dropdown-copilot.stories.ts":
/*!*************************************************!*\
  !*** ./src/stories/dropdown-copilot.stories.ts ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OpenInDocs = exports.Default = void 0;
// dropdown-copilot.stories.ts
const angular_1 = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/index.mjs");
const dropdown_copilot_component_1 = __webpack_require__(/*! ../app/dropdown-copilot/dropdown-copilot.component */ "./src/app/dropdown-copilot/dropdown-copilot.component.ts");
exports["default"] = {
  title: 'DropdownCopilot',
  component: dropdown_copilot_component_1.DropdownCopilotComponent,
  decorators: [(0, angular_1.moduleMetadata)({
    declarations: [dropdown_copilot_component_1.DropdownCopilotComponent]
  })]
};
const Default = () => ({
  component: dropdown_copilot_component_1.DropdownCopilotComponent,
  props: {
    options: ['Option A', 'Option B', 'Option C'] // Optionen für das Dropdown
  }
});
exports.Default = Default;
// Füge diese neue Story hinzu
const OpenInDocs = () => ({
  component: dropdown_copilot_component_1.DropdownCopilotComponent,
  props: {
    isDropdownOpen: true,
    // Setze den Dropdown-Zustand auf geöffnet
    options: ['Option A', 'Option B', 'Option C'] // Optionen für das Dropdown
  }
});
exports.OpenInDocs = OpenInDocs;
exports.OpenInDocs.parameters = {
  docs: {
    source: {
      code: `<app-dropdown-copilot [isDropdownOpen]="true" [options]="['Option A', 'Option B', 'Option C']"></app-dropdown-copilot>`
    }
  }
};;module.exports.__namedExportsOrder = ["OpenInDocs","Default"];

/***/ })

});
//# sourceMappingURL=stories-dropdown-copilot-stories.02cf5ba2d6f0b2104eec.hot-update.js.map