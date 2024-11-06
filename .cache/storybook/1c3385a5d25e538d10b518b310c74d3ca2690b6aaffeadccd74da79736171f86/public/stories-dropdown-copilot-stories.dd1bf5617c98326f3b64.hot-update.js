"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-dropdown-copilot-stories",{

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
//# sourceMappingURL=stories-dropdown-copilot-stories.dd1bf5617c98326f3b64.hot-update.js.map