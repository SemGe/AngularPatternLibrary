"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-dropdown-stories",{

/***/ "./src/stories/dropdown.stories.ts":
/*!*****************************************!*\
  !*** ./src/stories/dropdown.stories.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/dropdown/dropdown.component */ "./src/app/dropdown/dropdown.component.ts");

const meta = {
  title: 'Components/Dropdown',
  component: _app_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.DropdownComponent,
  argTypes: {
    label: {
      control: 'text'
    },
    options: {
      control: {
        type: 'object'
      }
    } // 'object' akzeptiert Arrays und sollte kompatibler sein
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
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

/***/ })

});
//# sourceMappingURL=stories-dropdown-stories.be35350b3c9716bb085d.hot-update.js.map