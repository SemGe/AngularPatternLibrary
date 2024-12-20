"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-tooltip-stories",{

/***/ "./src/app/tooltip/tooltip.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tooltip/tooltip.component.ts ***!
  \**********************************************/
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
exports.TooltipComponent = void 0;
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2022/core.mjs");
let TooltipComponent = (() => {
  let _classDecorators = [(0, core_1.Component)({
    selector: 'app-tooltip',
    template: __webpack_require__(/*! ./tooltip.component.html?ngResource */ "./src/app/tooltip/tooltip.component.html?ngResource"),
    standalone: true,
    styles: [__webpack_require__(/*! ./tooltip.component.css?ngResource */ "./src/app/tooltip/tooltip.component.css?ngResource")]
  })];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  var TooltipComponent = class {
    static {
      _classThis = this;
    }
    constructor() {
      this.text = 'Tooltip Text';
      this.isVisible = false;
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
      TooltipComponent = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    showTooltip() {
      this.isVisible = true;
    }
    hideTooltip() {
      this.isVisible = false;
    }
    static {
      this.propDecorators = {
        text: [{
          type: core_1.Input
        }],
        showTooltip: [{
          type: core_1.HostListener,
          args: ['mouseenter']
        }],
        hideTooltip: [{
          type: core_1.HostListener,
          args: ['mouseleave']
        }]
      };
    }
    static {
      __runInitializers(_classThis, _classExtraInitializers);
    }
  };
  return TooltipComponent = _classThis;
})();
exports.TooltipComponent = TooltipComponent;

/***/ }),

/***/ "./src/stories/tooltip.stories.ts":
/*!****************************************!*\
  !*** ./src/stories/tooltip.stories.ts ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Default = void 0;
const angular_1 = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/index.mjs");
const tooltip_component_1 = __webpack_require__(/*! ../app/tooltip/tooltip.component */ "./src/app/tooltip/tooltip.component.ts");
const meta = {
  title: 'Components/Tooltip',
  component: tooltip_component_1.TooltipComponent,
  decorators: [(0, angular_1.moduleMetadata)({
    imports: [tooltip_component_1.TooltipComponent]
  })],
  argTypes: {
    text: {
      control: 'text'
    }
  }
};
exports["default"] = meta;
exports.Default = {
  args: {
    text: 'Tooltip Text'
  },
  render: args => ({
    props: args,
    template: `<app-tooltip [text]="text">Hover over me!</app-tooltip>`
  })
};;module.exports.__namedExportsOrder = ["Default"];

/***/ })

});
//# sourceMappingURL=stories-tooltip-stories.0aca8e096bff7ac2c945.hot-update.js.map