"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-accordion-stories",{

/***/ "./src/stories/accordion.stories.ts":
/*!******************************************!*\
  !*** ./src/stories/accordion.stories.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/accordion/accordion.component */ "./src/app/accordion/accordion.component.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Accordion',
  component: _app_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_0__.AccordionComponent,
  argTypes: {
    title: {
      control: 'text'
    },
    content: {
      control: 'text'
    }
  }
});
const Template = args => ({
  props: args
});
const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  content: 'Accordion content goes here'
};
;
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "(args: AccordionComponent) => ({\n  props: args\n})",
      ...Default.parameters?.docs?.source
    }
  }
};

/***/ })

});
//# sourceMappingURL=stories-accordion-stories.e67d31d847bb0a2e46d0.hot-update.js.map