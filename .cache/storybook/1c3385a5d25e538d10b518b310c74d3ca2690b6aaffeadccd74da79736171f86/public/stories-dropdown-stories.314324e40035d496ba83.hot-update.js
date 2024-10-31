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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './dropdown.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Dropdown',
  component: Object(function webpackMissingModule() { var e = new Error("Cannot find module './dropdown.component'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  argTypes: {
    label: {
      control: 'text'
    },
    options: {
      control: 'array'
    }
  }
});
const Template = args => ({
  props: args
});
const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3']
};
;
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "(args: DropdownComponent) => ({\n  props: args\n})",
      ...Default.parameters?.docs?.source
    }
  }
};

/***/ })

});
//# sourceMappingURL=stories-dropdown-stories.314324e40035d496ba83.hot-update.js.map