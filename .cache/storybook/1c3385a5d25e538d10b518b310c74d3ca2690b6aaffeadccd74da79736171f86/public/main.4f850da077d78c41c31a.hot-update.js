self["webpackHotUpdatemy_angular_project"]("main",{

/***/ "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/ lazy ^\.\/.*$ include: (?%21.*node_modules)(?:\/src(?:\/(?%21\.)(?:(?:(?%21(?:^%7C\/)\.).)*?)\/%7C\/%7C$)(?%21\.)(?=.)[^/]*?\.stories\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$ chunkName: [request] namespace object ***!
  \*************************************************************************************************************************************************************************************************************************/
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
	"./stories/accordion.stories": [
		"./src/stories/accordion.stories.ts",
		"stories-accordion-stories"
	],
	"./stories/accordion.stories.ts": [
		"./src/stories/accordion.stories.ts",
		"stories-accordion-stories"
	],
	"./stories/example-button.stories": [
		"./src/stories/example-button.stories.ts",
		"stories-example-button-stories"
	],
	"./stories/example-button.stories.ts": [
		"./src/stories/example-button.stories.ts",
		"stories-example-button-stories"
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
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$";
module.exports = webpackAsyncContext;

/***/ })

});
//# sourceMappingURL=main.4f850da077d78c41c31a.hot-update.js.map