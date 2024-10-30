"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-text-field-stories",{

/***/ "./src/stories/ text-field.stories.ts":
/*!********************************************!*\
  !*** ./src/stories/ text-field.stories.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        component: `
### HTML
\`\`\`html
<div class="text-field">
  <label for="inputField">Textfeld:</label>
  <input id="inputField" type="text" placeholder="Geben Sie Text ein" />
  <p class="text-field__info-text">Hier können Sie Ihren Text eingeben.</p>
</div>
\`\`\`

### CSS
\`\`\`css
.text-field {
  display: flex;
  flex-direction: column;
}
input {
  padding: 8px;
  font-size: 16px;
  margin-top: 5px;
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
      originalSource: "(args: TextFieldComponent) => ({\n  props: args\n})",
      ...Default.parameters?.docs?.source
    }
  }
};

/***/ })

});
//# sourceMappingURL=stories-text-field-stories.6722f04e43b5e4b6ff96.hot-update.js.map