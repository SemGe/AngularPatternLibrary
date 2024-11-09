"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-tooltip-stories",{

/***/ "./src/stories/tooltip.stories.ts":
/*!****************************************!*\
  !*** ./src/stories/tooltip.stories.ts ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Default = void 0;
const tooltip_component_1 = __webpack_require__(/*! ../app/tooltip/tooltip.component */ "./src/app/tooltip/tooltip.component.ts");
exports["default"] = {
  title: 'Components/Tooltip',
  component: tooltip_component_1.TooltipComponent
};
const Template = args => ({
  component: tooltip_component_1.TooltipComponent,
  props: args,
  template: `<app-tooltip [text]="text">Hover over me!</app-tooltip>`
});
exports.Default = Template.bind({});
exports.Default.args = {
  text: 'Hier ist der Tooltip-Text'
};;module.exports.__namedExportsOrder = ["Default"];

/***/ })

});
//# sourceMappingURL=stories-tooltip-stories.9a8a9a471b2679d4311a.hot-update.js.map