self["webpackHotUpdatemy_angular_project"]("main",{

/***/ "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.(mdx%7Cstories\\.(js%7Cjsx%7Cts%7Ctsx)))$":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/ lazy ^\.\/.*$ include: (?%21.*node_modules)(?:\/src(?:\/(?%21\.)(?:(?:(?%21(?:^%7C\/)\.).)*?)\/%7C\/%7C$)(?%21\.)(?=.)[^/]*?\.(mdx%7Cstories\.(js%7Cjsx%7Cts%7Ctsx)))$ chunkName: [request] namespace object ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./stories/ text-field.stories": [
		"./src/stories/ text-field.stories.ts",
		"stories-text-field-stories"
	],
	"./stories/ text-field.stories.ts": [
		"./src/stories/ text-field.stories.ts",
		"stories-text-field-stories"
	],
	"./stories/Configure.mdx": [
		"./src/stories/Configure.mdx",
		"vendors-node_modules_storybook_blocks_dist_index_mjs",
		"stories-Configure-mdx"
	],
	"./stories/accordion.stories": [
		"./src/stories/accordion.stories.ts",
		"stories-accordion-stories"
	],
	"./stories/accordion.stories.ts": [
		"./src/stories/accordion.stories.ts",
		"stories-accordion-stories"
	],
	"./stories/dropdown-copilot.stories": [
		"./src/stories/dropdown-copilot.stories.ts",
		"stories-dropdown-copilot-stories"
	],
	"./stories/dropdown-copilot.stories.ts": [
		"./src/stories/dropdown-copilot.stories.ts",
		"stories-dropdown-copilot-stories"
	],
	"./stories/dropdown.stories": [
		"./src/stories/dropdown.stories.ts",
		"stories-dropdown-stories"
	],
	"./stories/dropdown.stories.ts": [
		"./src/stories/dropdown.stories.ts",
		"stories-dropdown-stories"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.(mdx%7Cstories\\.(js%7Cjsx%7Cts%7Ctsx)))$";
module.exports = webpackAsyncContext;

/***/ })

});
//# sourceMappingURL=main.b72c7ff3e21c30090f36.hot-update.js.map