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
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.SearchContainer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.SearchInput, {
              type: "text",
              placeholder: "Buscar",
              readOnly: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.Section, {
          style: {
            alignContent: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
              children: "nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              children: "Adipisicing id irure sunt veniam occaecat culpa ea ipsum cillum magna fugiat. Cupidatat excepteur fugiat velit cupidatat culpa sunt minim est culpa. Ut et adipisicing et consectetur incididunt anim aliqua excepteur excepteur quis culpa. Ullamco cupidatat minim dolor minim aute adipisicing elit ipsum aliquip. Id tempor quis reprehenderit ut sunt reprehenderit ullamco mollit pariatur deserunt dolor esse. Eu ad sit reprehenderit nostrud aliquip quis laboris."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            href: "https://lumiere-a.akamaihd.net/v1/images/image_a89e70e8.jpeg?region=0%2C0%2C540%2C810"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWUvW21vdmllXS5jN2M4MmZmZjQ3ZDc0ZDY2MGEzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNa0IsS0FBTixTQUFvQmpCLDRDQUFwQixDQUE4QjtBQUUxQmtCLEVBQUFBLE1BQU0sR0FBRztBQUNMLHdCQUNJLDhEQUFDLG9EQUFEO0FBQUEsOEJBQ0ksOERBQUMsaURBQUQ7QUFBQSwrQkFDTiw4REFBQywrQ0FBRDtBQUFBLGtDQUNFLDhEQUFDLGdEQUFEO0FBQUEsc0JBQVEsS0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxLQUFsQixDQUF3Qko7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUdFLDhEQUFDLDBEQUFEO0FBQUEsbUNBQ0UsOERBQUMsc0RBQUQ7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSx5QkFBVyxFQUFDLFFBRmQ7QUFHRSxzQkFBUTtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQWNKLDhEQUFDLCtDQUFEO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBUyxlQUFLLEVBQUU7QUFBRUssWUFBQUEsWUFBWSxFQUFFO0FBQWhCLFdBQWhCO0FBQUEsa0NBQ0k7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVVJO0FBQUssZ0JBQUksRUFBRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZ0NIOztBQW5DeUI7O0FBc0M5QiwrREFBZVAsb0RBQU8sQ0FBQyxJQUFELEVBQU07QUFBQ0MsRUFBQUEsU0FBU0Esc0RBQUFBO0FBQVYsQ0FBTixDQUFQLENBQTBCRix1REFBVSxDQUFDRyxLQUFELENBQXBDLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21vdmllL1ttb3ZpZV0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBCb3gsXHJcbiAgU2VjdGlvbixcclxuICBHcmlkLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgVG9wYmFyLFxyXG4gIEF1ZGlvUGxheWVyLFxyXG4gIFRpdGxlLFxyXG4gIE1lbnUsXHJcbiAgU2VhcmNoQ29udGFpbmVyLFxyXG4gIFNlYXJjaElucHV0LFxyXG4gIFN1YlRpdGxlLFxyXG5cclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxlXCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZ2V0RGV0YWlsIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiXHJcblxyXG5jbGFzcyBtb3ZpZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8VG9wYmFyPlxyXG4gICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgIDxUaXRsZT57dGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubW92aWV9PC9UaXRsZT5cclxuXHJcbiAgICAgICAgICAgIDxTZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvVG9wYmFyPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPFNlY3Rpb24gc3R5bGU9e3sgYWxpZ25Db250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bm9tZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBBZGlwaXNpY2luZyBpZCBpcnVyZSBzdW50IHZlbmlhbSBvY2NhZWNhdCBjdWxwYSBlYSBpcHN1bSBjaWxsdW0gbWFnbmEgZnVnaWF0LiBDdXBpZGF0YXQgZXhjZXB0ZXVyIGZ1Z2lhdCB2ZWxpdFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cGlkYXRhdCBjdWxwYSBzdW50IG1pbmltIGVzdCBjdWxwYS4gVXQgZXQgYWRpcGlzaWNpbmcgZXQgY29uc2VjdGV0dXIgaW5jaWRpZHVudCBhbmltIGFsaXF1YSBleGNlcHRldXIgZXhjZXB0ZXVyIHF1aXMgY3VscGEuXHJcbiAgICAgICAgICAgICAgICAgICAgVWxsYW1jbyBjdXBpZGF0YXQgbWluaW0gZG9sb3IgbWluaW0gYXV0ZSBhZGlwaXNpY2luZyBlbGl0IGlwc3VtIGFsaXF1aXAuIElkIHRlbXBvciBxdWlzIHJlcHJlaGVuZGVyaXQgdXQgc3VudCByZXByZWhlbmRlcml0IHVsbGFtY29cclxuICAgICAgICAgICAgICAgICAgICBtb2xsaXQgcGFyaWF0dXIgZGVzZXJ1bnQgZG9sb3IgZXNzZS4gRXUgYWQgc2l0IHJlcHJlaGVuZGVyaXQgbm9zdHJ1ZCBhbGlxdWlwIHF1aXMgbGFib3Jpcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nIGhyZWY9e1wiaHR0cHM6Ly9sdW1pZXJlLWEuYWthbWFpaGQubmV0L3YxL2ltYWdlcy9pbWFnZV9hODllNzBlOC5qcGVnP3JlZ2lvbj0wJTJDMCUyQzU0MCUyQzgxMFwifS8+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLHtnZXREZXRhaWx9KSh3aXRoUm91dGVyKG1vdmllKSk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIkJveCIsIlNlY3Rpb24iLCJHcmlkIiwiTGlzdCIsIkxpc3RJdGVtIiwiVG9wYmFyIiwiQXVkaW9QbGF5ZXIiLCJUaXRsZSIsIk1lbnUiLCJTZWFyY2hDb250YWluZXIiLCJTZWFyY2hJbnB1dCIsIlN1YlRpdGxlIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJnZXREZXRhaWwiLCJtb3ZpZSIsInJlbmRlciIsInByb3BzIiwicm91dGVyIiwicXVlcnkiLCJhbGlnbkNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9