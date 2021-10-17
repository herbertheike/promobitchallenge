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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Box, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWUvW21vdmllXS5kMjhhOTA0ZGJhNTIzYjQ0N2Q3OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNNEIsS0FBTixTQUFvQjNCLDRDQUFwQixDQUE4QjtBQUUxQjRCLEVBQUFBLE1BQU0sR0FBRztBQUNMLHdCQUNJLDhEQUFDLG9EQUFEO0FBQUEsOEJBQ0ksOERBQUMsaURBQUQ7QUFBQSwrQkFDTiw4REFBQywrQ0FBRDtBQUFBLGtDQUNFLDhEQUFDLGdEQUFEO0FBQUEsc0JBQVEsS0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxLQUFsQixDQUF3Qko7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUdFLDhEQUFDLDBEQUFEO0FBQUEsbUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSx5QkFBVyxFQUFDLFFBRmQ7QUFHRSxzQkFBUTtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQWNKLDhEQUFDLCtDQUFEO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBUyxlQUFLLEVBQUU7QUFBRUssWUFBQUEsWUFBWSxFQUFFO0FBQWhCLFdBQWhCO0FBQUEsaUNBQ0EsOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF5Qkg7O0FBNUJ5Qjs7QUErQjlCLCtEQUFlUCxvREFBTyxDQUFDLElBQUQsRUFBTTtBQUFDQyxFQUFBQSxTQUFTQSxzREFBQUE7QUFBVixDQUFOLENBQVAsQ0FBMEJGLHVEQUFVLENBQUNHLEtBQUQsQ0FBcEMsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbW92aWUvW21vdmllXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEJveCxcclxuICBTZWN0aW9uLFxyXG4gIEdyaWQsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBUb3BiYXIsXHJcbiAgQXVkaW9QbGF5ZXIsXHJcbiAgVGl0bGUsXHJcbiAgTWVudSxcclxuICBTZWFyY2hDb250YWluZXIsXHJcbiAgU2VhcmNoSW5wdXQsXHJcbiAgU3ViVGl0bGUsXHJcbiAgTGFiZWwsXHJcbiAgVGFnLFxyXG4gIENhcmRDb250YWluZXIsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgTW92aWVQb3N0ZXIsXHJcbiAgQnV0dG9uLFxyXG4gIEZpbHRlckNvbnRhaW5lcixcclxuICBGaWx0ZXJDb2x1bW4sXHJcbiAgRmlsdGVyTGFiZWwsXHJcbiAgRmlsdGVyQ2hlY2tCb3gsXHJcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zdHlsZVwiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGdldERldGFpbCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25cIlxyXG5cclxuY2xhc3MgbW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRvcGJhcj5cclxuICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICA8VGl0bGU+e3RoaXMucHJvcHMucm91dGVyLnF1ZXJ5Lm1vdmllfTwvVGl0bGU+XHJcblxyXG4gICAgICAgICAgICA8U2VhcmNoQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNjYXJcIlxyXG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NlYXJjaENvbnRhaW5lcj5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L1RvcGJhcj5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxTZWN0aW9uIHN0eWxlPXt7IGFsaWduQ29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwse2dldERldGFpbH0pKHdpdGhSb3V0ZXIobW92aWUpKTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiQm94IiwiU2VjdGlvbiIsIkdyaWQiLCJMaXN0IiwiTGlzdEl0ZW0iLCJUb3BiYXIiLCJBdWRpb1BsYXllciIsIlRpdGxlIiwiTWVudSIsIlNlYXJjaENvbnRhaW5lciIsIlNlYXJjaElucHV0IiwiU3ViVGl0bGUiLCJMYWJlbCIsIlRhZyIsIkNhcmRDb250YWluZXIiLCJDYXJkQ29udGVudCIsIk1vdmllUG9zdGVyIiwiQnV0dG9uIiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyQ29sdW1uIiwiRmlsdGVyTGFiZWwiLCJGaWx0ZXJDaGVja0JveCIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwiZ2V0RGV0YWlsIiwibW92aWUiLCJyZW5kZXIiLCJwcm9wcyIsInJvdXRlciIsInF1ZXJ5IiwiYWxpZ25Db250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==