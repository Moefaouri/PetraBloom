/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/TotalContext.tsx":
/*!********************************!*\
  !*** ./pages/TotalContext.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// CartContext.tsx\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst CartProvider = ({ children })=>{\n    const [totalItems, setTotalItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        1: 0,\n        2: 0,\n        3: 0\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            totalItems,\n            setTotalItems,\n            cart,\n            setCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mohammad.Elfauri\\\\Desktop\\\\react_projects\\\\PetraBloom\\\\pages\\\\TotalContext.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) {\n        throw new Error(\"useCart must be used within a CartProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ub3RhbENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQkFBa0I7O0FBQ2lEO0FBYTVELE1BQU1JLDRCQUFjSCxvREFBYUEsQ0FBOEJJLFdBQVc7QUFFMUUsTUFBTUMsZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBaUM7SUFDdEUsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBWTtRQUFFLEdBQUc7UUFBRyxHQUFHO1FBQUcsR0FBRztJQUFFO0lBRS9ELHFCQUNFLDhEQUFDRSxZQUFZUSxRQUFRO1FBQUNDLE9BQU87WUFBRUw7WUFBWUM7WUFBZUM7WUFBTUM7UUFBUTtrQkFDckVKOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTU8sVUFBVTtJQUNyQixNQUFNQyxVQUFVWixpREFBVUEsQ0FBQ0M7SUFDM0IsSUFBSSxDQUFDVyxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1vaGFtbWFkLkVsZmF1cmlcXERlc2t0b3BcXHJlYWN0X3Byb2plY3RzXFxQZXRyYUJsb29tXFxwYWdlc1xcVG90YWxDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDYXJ0Q29udGV4dC50c3hcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FydFN0YXRlIHtcclxuICBbcHJvZHVjdElkOiBudW1iZXJdOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXJ0Q29udGV4dFR5cGUge1xyXG4gIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICBzZXRUb3RhbEl0ZW1zOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+PjtcclxuICBjYXJ0OiBDYXJ0U3RhdGU7XHJcbiAgc2V0Q2FydDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Q2FydFN0YXRlPj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q2FydENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3RvdGFsSXRlbXMsIHNldFRvdGFsSXRlbXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8Q2FydFN0YXRlPih7IDE6IDAsIDI6IDAsIDM6IDAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdG90YWxJdGVtcywgc2V0VG90YWxJdGVtcywgY2FydCwgc2V0Q2FydCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydFByb3ZpZGVyXCIpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJ1bmRlZmluZWQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInRvdGFsSXRlbXMiLCJzZXRUb3RhbEl0ZW1zIiwiY2FydCIsInNldENhcnQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/TotalContext.tsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TotalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TotalContext */ \"./pages/TotalContext.tsx\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_media_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/media.css */ \"./styles/media.css\");\n/* harmony import */ var _styles_media_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_media_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n // Adjusted to match your context file\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammad.Elfauri\\\\Desktop\\\\react_projects\\\\PetraBloom\\\\pages\\\\_app.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammad.Elfauri\\\\Desktop\\\\react_projects\\\\PetraBloom\\\\pages\\\\_app.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammad.Elfauri\\\\Desktop\\\\react_projects\\\\PetraBloom\\\\pages\\\\_app.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohammad.Elfauri\\\\Desktop\\\\react_projects\\\\PetraBloom\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TotalContext__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mohammad.Elfauri\\\\Desktop\\\\react_projects\\\\PetraBloom\\\\pages\\\\_app.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammad.Elfauri\\\\Desktop\\\\react_projects\\\\PetraBloom\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\",\n                integrity: \"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\",\n                crossOrigin: \"anonymous\",\n                async: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammad.Elfauri\\\\Desktop\\\\react_projects\\\\PetraBloom\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDaUIsQ0FBQyxzQ0FBc0M7QUFDdkM7QUFDakI7QUFDQztBQUNEO0FBQ2lCO0FBRzlDLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7O2tDQUNILDhEQUFDSzt3QkFBS0MsU0FBUTs7Ozs7O2tDQUNkLDhEQUFDRDt3QkFBS0UsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLEtBQUk7Ozs7Ozs7Ozs7OzswQkFJUiw4REFBQ1YsdURBQVlBOzBCQUNYLDRFQUFDRTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OzswQkFJMUIsOERBQUNRO2dCQUNDQyxLQUFJO2dCQUNKQyxXQUFVO2dCQUNWQyxhQUFZO2dCQUNaQyxLQUFLOzs7Ozs7OztBQUliO0FBRUEsaUVBQWVkLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTW9oYW1tYWQuRWxmYXVyaVxcRGVza3RvcFxccmVhY3RfcHJvamVjdHNcXFBldHJhQmxvb21cXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi9Ub3RhbENvbnRleHRcIjsgLy8gQWRqdXN0ZWQgdG8gbWF0Y2ggeW91ciBjb250ZXh0IGZpbGVcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9yZXNldC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL21lZGlhLmNzc1wiO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGFqYXdhbDp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxyXG5cclxuICAgICAgey8qIEFkZCBCb290c3RyYXAgSlMgKi99XHJcbiAgICAgIDxzY3JpcHQgXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiIFxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1rYTdTazBHbG40Z210ejJNbFFuaWtUMXdYZ1lzT2crT01odVArSWxSSDlzRU5CTzBMUm41cSs4bmJUb3Y0KzFwXCIgXHJcbiAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgIGFzeW5jXHJcbiAgICAgID48L3NjcmlwdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJDYXJ0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1ldGEiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwiaHJlZiIsInJlbCIsInNjcmlwdCIsInNyYyIsImludGVncml0eSIsImNyb3NzT3JpZ2luIiwiYXN5bmMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/media.css":
/*!**************************!*\
  !*** ./styles/media.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();