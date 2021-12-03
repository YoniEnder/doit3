"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_creatUrqlClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/creatUrqlClient */ \"./src/utils/creatUrqlClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar createItem1 = function(param1) {\n    var param1 = param1 !== null ? param1 : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s1();\n    var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_7__.useCreateItemMutation)(), 2), createItem = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n        variant: \"small\",\n        __source: {\n            fileName: \"C:\\\\projects\\\\doit3\\\\web\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                name: \"\"\n            },\n            onSubmit: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {\n                var error;\n                return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return createItem(values);\n                        case 2:\n                            error = _ctx.sent.error;\n                            if (!error) {\n                                router.push(\"/\");\n                            }\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            })),\n            __source: {\n                fileName: \"C:\\\\projects\\\\doit3\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: function(param) {\n                var isSubmitting = param.isSubmitting;\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                    __source: {\n                        fileName: \"C:\\\\projects\\\\doit3\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                            mt: 4,\n                            __source: {\n                                fileName: \"C:\\\\projects\\\\doit3\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_InputField__WEBPACK_IMPORTED_MODULE_5__.InputField, {\n                                name: \"text\",\n                                placeholder: \"text...\",\n                                label: \"Enter text:\",\n                                textarea: true,\n                                __source: {\n                                    fileName: \"C:\\\\projects\\\\doit3\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                },\n                                __self: _this1\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                            mt: 4,\n                            type: \"submit\",\n                            isLoading: isSubmitting,\n                            colorScheme: \"teal\",\n                            __source: {\n                                fileName: \"C:\\\\projects\\\\doit3\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: \"add text to the database\"\n                        })\n                    ]\n                });\n            }\n        })\n    }));\n};\n_s1(createItem1, \"8qFyd0zUamwp8t7LUCkCPgpQD2c=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_7__.useCreateItemMutation\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_11__.withUrqlClient)(_utils_creatUrqlClient__WEBPACK_IMPORTED_MODULE_8__.createUrqlClient)(createItem1));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0U7QUFDSjtBQUNLO0FBQ1M7QUFDMUI7QUFDNEI7QUFDUjtBQUNlO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUczRCxHQUFLLENBQUNXLFdBQVUsR0FBaUIsUUFBUSxVQUFDOzs7O0lBQ3hDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHUCxrRUFBUztJQUN4QixHQUFLLENBQWtCSSxHQUF1QixrQkFBdkJBLHlFQUFxQixRQUFuQ0UsVUFBVSxHQUFJRixHQUF1QjtJQUM5QyxNQUFNLHNFQUNIRCxzREFBTTtRQUFDSyxPQUFPLEVBQUMsQ0FBTzs7Ozs7Ozt1RkFDcEJWLDBDQUFNO1lBQ0xXLGFBQWEsRUFBRSxDQUFDO2dCQUFDQyxJQUFJLEVBQUUsQ0FBRTtZQUFDLENBQUM7WUFDM0JDLFFBQVEsb0ZBQUUsUUFBUSxTQUFEQyxNQUFNLEVBQUssQ0FBQztvQkFDbkJDLEtBQUs7Ozs7O21DQUFXUCxVQUFVLENBQUNNLE1BQU07OzRCQUFqQ0MsS0FBSyxhQUFMQSxLQUFLOzRCQUNiLEVBQUUsR0FBR0EsS0FBSyxFQUFFLENBQUM7Z0NBQ1hOLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLENBQUc7NEJBQ2pCLENBQUM7Ozs7OztZQUNILENBQUM7Ozs7Ozs7c0JBRUEsUUFBUTtvQkFBTEMsWUFBWSxTQUFaQSxZQUFZOzhCQUNkLE1BQU0seURBQUxsQix3Q0FBSTs7Ozs7Ozs7NkZBQ0ZGLGtEQUFHOzRCQUFDcUIsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7MkdBQ1BkLDhEQUFVO2dDQUNUUSxJQUFJLEVBQUMsQ0FBTTtnQ0FDWE8sV0FBVyxFQUFDLENBQVM7Z0NBQ3JCQyxLQUFLLEVBQUMsQ0FBYTtnQ0FDbkJDLFFBQVE7Ozs7Ozs7Ozs2RkFHWHZCLHFEQUFNOzRCQUNMb0IsRUFBRSxFQUFFLENBQUM7NEJBQ0xJLElBQUksRUFBQyxDQUFROzRCQUNiQyxTQUFTLEVBQUVOLFlBQVk7NEJBQ3ZCTyxXQUFXLEVBQUMsQ0FBTTs7Ozs7OztzQ0FDbkIsQ0FFRDs7Ozs7OztBQU1aLENBQUM7SUFyQ0toQixXQUFVOztRQUNDTiw4REFBUztRQUNESSxxRUFBcUI7OztBQW9DOUMsK0RBQWVMLDBEQUFjLENBQUNNLG9FQUFnQixFQUFFQyxXQUFVLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VDcmVhdGVJdGVtTXV0YXRpb24gfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdFVycWxDbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlSXNBdXRoIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUlzQXV0aFwiO1xyXG5cclxuY29uc3QgY3JlYXRlSXRlbTogUmVhY3QuRkM8e30+ID0gKHt9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgWywgY3JlYXRlSXRlbV0gPSB1c2VDcmVhdGVJdGVtTXV0YXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB2YXJpYW50PVwic21hbGxcIj5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogXCJcIiB9fVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBjcmVhdGVJdGVtKHZhbHVlcyk7XHJcbiAgICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEJveCBtdD17NH0+XHJcbiAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGV4dC4uLlwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVudGVyIHRleHQ6XCJcclxuICAgICAgICAgICAgICAgIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgPjwvSW5wdXRGaWVsZD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBtdD17NH1cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgYWRkIHRleHQgdG8gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCkoY3JlYXRlSXRlbSk7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGb3JtIiwiRm9ybWlrIiwid2l0aFVycWxDbGllbnQiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIklucHV0RmllbGQiLCJMYXlvdXQiLCJ1c2VDcmVhdGVJdGVtTXV0YXRpb24iLCJjcmVhdGVVcnFsQ2xpZW50IiwiY3JlYXRlSXRlbSIsInJvdXRlciIsInZhcmlhbnQiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsIm9uU3VibWl0IiwidmFsdWVzIiwiZXJyb3IiLCJwdXNoIiwiaXNTdWJtaXR0aW5nIiwibXQiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwidGV4dGFyZWEiLCJ0eXBlIiwiaXNMb2FkaW5nIiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});