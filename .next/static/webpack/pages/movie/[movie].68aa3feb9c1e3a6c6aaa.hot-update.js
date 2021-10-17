"use strict";
self["webpackHotUpdate_N_E"]("pages/movie/[movie]",{

/***/ "./src/pages/movie/[movie].js":
/*!************************************!*\
  !*** ./src/pages/movie/[movie].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/style */ "./src/styles/style.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action */ "./src/redux/action.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\herberth\\OneDrive\\Documents\\promobitchallenge\\promobitchallenge\\src\\pages\\movie\\[movie].js";







class movie extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Topbar, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Menu, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Title, {
            children: this.props.router.query.movie
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.SearchContainer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.SearchInput, {
              type: "text",
              placeholder: "Buscar",
              readOnly: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Section, {
          style: {
            alignContent: "center"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.SubTitle, {
            children: "Carregando..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
  getDetail: _redux_action__WEBPACK_IMPORTED_MODULE_4__.getDetail
})((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(movie)));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWUvW21vdmllXS42OGFhM2ZlYjljMWUzYTZjNmFhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNNEIsS0FBTixTQUFvQjNCLDRDQUFwQixDQUE4QjtBQUUxQjRCLEVBQUFBLE1BQU0sR0FBRztBQUNMLHdCQUNJLDhEQUFDLG9EQUFEO0FBQUEsOEJBQ0ksOERBQUMsaURBQUQ7QUFBQSwrQkFDTiw4REFBQywrQ0FBRDtBQUFBLGtDQUNFLDhEQUFDLGdEQUFEO0FBQUEsc0JBQVEsS0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxLQUFsQixDQUF3Qko7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUdFLDhEQUFDLDBEQUFEO0FBQUEsbUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSx5QkFBVyxFQUFDLFFBRmQ7QUFHRSxzQkFBUTtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQWNKLDhEQUFDLCtDQUFEO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBUyxlQUFLLEVBQUU7QUFBRUssWUFBQUEsWUFBWSxFQUFFO0FBQWhCLFdBQWhCO0FBQUEsaUNBRUksOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBeUJIOztBQTVCeUI7O0FBK0I5QiwrREFBZVAsb0RBQU8sQ0FBQyxJQUFELEVBQU07QUFBQ0MsRUFBQUEsU0FBU0Esc0RBQUFBO0FBQVYsQ0FBTixDQUFQLENBQTBCRix1REFBVSxDQUFDRyxLQUFELENBQXBDLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21vdmllL1ttb3ZpZV0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBCb3gsXHJcbiAgU2VjdGlvbixcclxuICBHcmlkLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgVG9wYmFyLFxyXG4gIEF1ZGlvUGxheWVyLFxyXG4gIFRpdGxlLFxyXG4gIE1lbnUsXHJcbiAgU2VhcmNoQ29udGFpbmVyLFxyXG4gIFNlYXJjaElucHV0LFxyXG4gIFN1YlRpdGxlLFxyXG4gIExhYmVsLFxyXG4gIFRhZyxcclxuICBDYXJkQ29udGFpbmVyLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIE1vdmllUG9zdGVyLFxyXG4gIEJ1dHRvbixcclxuICBGaWx0ZXJDb250YWluZXIsXHJcbiAgRmlsdGVyQ29sdW1uLFxyXG4gIEZpbHRlckxhYmVsLFxyXG4gIEZpbHRlckNoZWNrQm94LFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvc3R5bGVcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBnZXREZXRhaWwgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uXCJcclxuXHJcbmNsYXNzIG1vdmllIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxUb3BiYXI+XHJcbiAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgPFRpdGxlPnt0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5tb3ZpZX08L1RpdGxlPlxyXG5cclxuICAgICAgICAgICAgPFNlYXJjaENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyXCJcclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9Ub3BiYXI+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8U2VjdGlvbiBzdHlsZT17eyBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8U3ViVGl0bGU+Q2FycmVnYW5kby4uLjwvU3ViVGl0bGU+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwse2dldERldGFpbH0pKHdpdGhSb3V0ZXIobW92aWUpKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiQm94IiwiU2VjdGlvbiIsIkdyaWQiLCJMaXN0IiwiTGlzdEl0ZW0iLCJUb3BiYXIiLCJBdWRpb1BsYXllciIsIlRpdGxlIiwiTWVudSIsIlNlYXJjaENvbnRhaW5lciIsIlNlYXJjaElucHV0IiwiU3ViVGl0bGUiLCJMYWJlbCIsIlRhZyIsIkNhcmRDb250YWluZXIiLCJDYXJkQ29udGVudCIsIk1vdmllUG9zdGVyIiwiQnV0dG9uIiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyQ29sdW1uIiwiRmlsdGVyTGFiZWwiLCJGaWx0ZXJDaGVja0JveCIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwiZ2V0RGV0YWlsIiwibW92aWUiLCJyZW5kZXIiLCJwcm9wcyIsInJvdXRlciIsInF1ZXJ5IiwiYWxpZ25Db250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==