"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-button-textfield-stories",{

/***/ "./src/stories/button-textfield.stories.ts":
/*!*************************************************!*\
  !*** ./src/stories/button-textfield.stories.ts ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Default = void 0;
const angular_1 = __webpack_require__(/*! @storybook/angular */ "./node_modules/@storybook/angular/dist/index.mjs");
const button_textfield_component_1 = __webpack_require__(/*! ../app/button-textfield/button-textfield.component */ "./src/app/button-textfield/button-textfield.component.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2022/forms.mjs");
exports["default"] = {
  title: 'Components/ButtonTextfield',
  component: button_textfield_component_1.ButtonTextfieldComponent,
  decorators: [(0, angular_1.moduleMetadata)({
    imports: [button_textfield_component_1.ButtonTextfieldComponent, forms_1.FormsModule] // Füge die Komponente in das imports-Array hinzu
  })]
};
const Template = args => ({
  props: args
});
exports.Default = Template.bind({});
exports.Default.args = {
  inputValue: ''
};;module.exports.__namedExportsOrder = ["Default"];

/***/ })

});
//# sourceMappingURL=stories-button-textfield-stories.1342b7bdc9dc04decc19.hot-update.js.map