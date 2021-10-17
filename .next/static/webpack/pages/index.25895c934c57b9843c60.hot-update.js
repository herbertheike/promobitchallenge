"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "index": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var C_Users_herberth_OneDrive_Documents_promobitchallenge_promobitchallenge_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style */ "./src/styles/style.js");
/* harmony import */ var _components_moviecard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/moviecard.js */ "./src/components/moviecard.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/action */ "./src/redux/action.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\herberth\\OneDrive\\Documents\\promobitchallenge\\promobitchallenge\\src\\pages\\index.js";









class index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    (0,C_Users_herberth_OneDrive_Documents_promobitchallenge_promobitchallenge_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "state", {
      search: "",
      page: 1,
      totalPages: this.props.totalPages,
      arrg: [],
      str: ''
    });

    (0,C_Users_herberth_OneDrive_Documents_promobitchallenge_promobitchallenge_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "handlePagination", e => {
      let selected = e.selected;
      let newselected = selected + 1;
      console.log(newselected);
      console.log(e);
      this.props.getData(newselected);
    });

    (0,C_Users_herberth_OneDrive_Documents_promobitchallenge_promobitchallenge_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(this, "handleClick", e => {
      let isChecked = e.target.checked;
      let value = e.target.value;
      var str = this.state.str;

      if (isChecked === true) {
        let b = str.concat(value + ",");
        this.setState({
          str: b
        });
        this.state.arrg.push(value);
        console.log(b);
        this.props.setGenre(value);
        this.props.movieByGenre(b);
      } else {
        let c = str.replace(value + ",", '');
        this.setState({
          str: c
        });
        console.log(c);
        this.state.arrg.splice(this.state.arrg.indexOf(value), 1);
        this.props.removeGenre(value);
        this.props.movieByGenre(c);
      }
    });
  }

  componentDidMount() {
    this.props.getData(this.state.page);
    this.props.getGenre();
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Topbar, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Menu, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Title, {
            children: "Desafio promobit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.SearchContainer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.SearchInput, {
              type: "text",
              placeholder: "Buscar",
              value: this.state.search,
              readOnly: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Section, {
          style: {
            alignContent: "center"
          },
          children: [!this.props.movielist.results ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.List, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Box, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.SubTitle, {
                      children: "Carregando..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Label, {
                      children: "Carregando..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Label, {
                      style: {
                        fontStyle: "italic",
                        fontSize: "0.8rem"
                      },
                      children: "Carregando..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Tag, {
                      children: "Carregando..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.AudioPlayer, {
                      controls: true,
                      name: "media"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.MoviePoster, {
                  src: "https://cdn-icons-png.flaticon.com/512/1384/1384061.png",
                  alt: "Album cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.Title, {
              style: {
                display: "grid"
              },
              children: "Buscar por genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.FilterContainer, {
              children: !this.props.moviegenre.genres ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.FilterLabel, {
                children: "Loading..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 21
              }, this) : this.props.moviegenre.genres.map(item => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.FilterColumn, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.FilterCheckBox, {
                    value: item.id,
                    onClick: e => this.handleClick(e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.FilterLabel, {
                    children: [" ", item.name]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 29
                  }, this)]
                }, item.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 27
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.List, {
              children: [console.log(this.props.movielist), console.log(this.props.totalPages), this.props.movielist.results.map(item => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_moviecard_js__WEBPACK_IMPORTED_MODULE_4__.default, {
                    id: item.id,
                    title: item.title,
                    overview: item.overview,
                    vote: item.vote_average,
                    duration: item.release_date,
                    moviecover: item.poster_path,
                    link: item.original_language
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 25
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: "/movie/" + item.title,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
                      children: "Go to pages/movie/[movie-name].js"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 25
                  }, this)]
                }, item.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 23
                }, this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, this)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_6___default()), {
            pageCount: this.state.totalPages,
            pageRange: 1,
            marginPagesDisplayed: 1,
            onPageChange: this.handlePagination,
            containerClassName: "container",
            previousLinkClassName: "page",
            breakClassName: "page",
            nextLinkClassName: "page",
            pageClassName: "page",
            disabledClassNme: "disabled",
            activeClassName: "active",
            previousLabel: "<",
            nextLabel: ">"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this);
  }

}

const mapStateToProps = state => ({
  movielist: state.movielist,
  totalPages: state.totalPages,
  moviegenre: state.moviegenre,
  id: state.id
}); //const mapDispatchToProps = {
//    this.props.getDataSuccess}


/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {
  getData: _redux_action__WEBPACK_IMPORTED_MODULE_5__.getData,
  getDetail: _redux_action__WEBPACK_IMPORTED_MODULE_5__.getDetail,
  getGenre: _redux_action__WEBPACK_IMPORTED_MODULE_5__.getGenre,
  setGenre: _redux_action__WEBPACK_IMPORTED_MODULE_5__.setGenre,
  removeGenre: _redux_action__WEBPACK_IMPORTED_MODULE_5__.removeGenre,
  movieByGenre: _redux_action__WEBPACK_IMPORTED_MODULE_5__.movieByGenre
})(index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjU4OTVjOTM0YzU3Yjk4NDNjNjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRU8sTUFBTW1DLEtBQU4sU0FBb0JsQyw0Q0FBcEIsQ0FBOEI7QUFBQTtBQUFBOztBQUFBLDRNQUMzQjtBQUNObUMsTUFBQUEsTUFBTSxFQUFFLEVBREY7QUFFTkMsTUFBQUEsSUFBSSxFQUFFLENBRkE7QUFHTkMsTUFBQUEsVUFBVSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0QsVUFIakI7QUFJTkUsTUFBQUEsSUFBSSxFQUFDLEVBSkM7QUFLTkMsTUFBQUEsR0FBRyxFQUFDO0FBTEUsS0FEMkI7O0FBQUEsdU5BY2ZDLENBQUQsSUFBTztBQUN4QixVQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0MsUUFBakI7QUFDQSxVQUFJQyxXQUFXLEdBQUdELFFBQVEsR0FBRyxDQUE3QjtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosQ0FBWjtBQUNBLFdBQUtILEtBQUwsQ0FBV1YsT0FBWCxDQUFtQmUsV0FBbkI7QUFDRCxLQXBCa0M7O0FBQUEsa05Bc0JwQkYsQ0FBRCxJQUFNO0FBQ2xCLFVBQUlLLFNBQVMsR0FBR0wsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLE9BQXpCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHUixDQUFDLENBQUNNLE1BQUYsQ0FBU0UsS0FBckI7QUFDQSxVQUFJVCxHQUFHLEdBQUcsS0FBS1UsS0FBTCxDQUFXVixHQUFyQjs7QUFDQSxVQUFHTSxTQUFTLEtBQUssSUFBakIsRUFBc0I7QUFDcEIsWUFBSUssQ0FBQyxHQUFHWCxHQUFHLENBQUNZLE1BQUosQ0FBV0gsS0FBSyxHQUFDLEdBQWpCLENBQVI7QUFDQSxhQUFLSSxRQUFM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RUFBRSxXQUx0QjtBQU1FLGlDQUFxQixFQUFFLE1BTnpCO0FBT0UsMEJBQWMsRUFBRSxNQVBsQjtBQVFFLDZCQUFpQixFQUFFLE1BUnJCO0FBU0UseUJBQWEsRUFBRSxNQVRqQjtBQVVFLDRCQUFnQixFQUFFLFVBVnBCO0FBV0UsMkJBQWUsRUFBRSxRQVhuQjtBQVlFLHlCQUFhLEVBQUUsR0FaakI7QUFhRSxxQkFBUyxFQUFFO0FBYmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBNkdEOztBQXhKa0M7O0FBMkpyQyxNQUFNQyxlQUFlLEdBQUkvQixLQUFELEtBQVk7QUFDbENZLEVBQUFBLFNBQVMsRUFBRVosS0FBSyxDQUFDWSxTQURpQjtBQUVsQ3pCLEVBQUFBLFVBQVUsRUFBRWEsS0FBSyxDQUFDYixVQUZnQjtBQUdsQzhCLEVBQUFBLFVBQVUsRUFBRWpCLEtBQUssQ0FBQ2lCLFVBSGdCO0FBSWxDSSxFQUFBQSxFQUFFLEVBQUVyQixLQUFLLENBQUNxQjtBQUp3QixDQUFaLENBQXhCLEVBT0E7QUFDQTs7O0FBRUEsK0RBQWV0RSxvREFBTyxDQUFDZ0YsZUFBRCxFQUFrQjtBQUFFckQsRUFBQUEsT0FBRjtBQUFXRixFQUFBQSxTQUFYO0FBQXNCQyxFQUFBQSxRQUF0QjtBQUErQkUsRUFBQUEsUUFBL0I7QUFBd0NDLEVBQUFBLFdBQXhDO0FBQXFEQyxFQUFBQSxZQUFZQSx5REFBQUE7QUFBakUsQ0FBbEIsQ0FBUCxDQUNiRyxLQURhLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBCb3gsXHJcbiAgU2VjdGlvbixcclxuICBHcmlkLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgVG9wYmFyLFxyXG4gIEF1ZGlvUGxheWVyLFxyXG4gIFRpdGxlLFxyXG4gIE1lbnUsXHJcbiAgU2VhcmNoQ29udGFpbmVyLFxyXG4gIFNlYXJjaElucHV0LFxyXG4gIFN1YlRpdGxlLFxyXG4gIExhYmVsLFxyXG4gIFRhZyxcclxuICBDYXJkQ29udGFpbmVyLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIE1vdmllUG9zdGVyLFxyXG4gIEJ1dHRvbixcclxuICBGaWx0ZXJDb250YWluZXIsXHJcbiAgRmlsdGVyQ29sdW1uLFxyXG4gIEZpbHRlckxhYmVsLFxyXG4gIEZpbHRlckNoZWNrQm94LFxyXG59IGZyb20gXCIuLi9zdHlsZXMvc3R5bGVcIjtcclxuaW1wb3J0IE1vdmllY2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb3ZpZWNhcmQuanNcIjtcclxuaW1wb3J0IHsgZ2V0RGV0YWlsLCBnZXRHZW5yZSwgZ2V0RGF0YSxzZXRHZW5yZSxyZW1vdmVHZW5yZSwgbW92aWVCeUdlbnJlIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvblwiO1xyXG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNlYXJjaDogXCJcIixcclxuICAgIHBhZ2U6IDEsXHJcbiAgICB0b3RhbFBhZ2VzOiB0aGlzLnByb3BzLnRvdGFsUGFnZXMsXHJcbiAgICBhcnJnOltdLFxyXG4gICAgc3RyOicnXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmdldERhdGEodGhpcy5zdGF0ZS5wYWdlKTtcclxuICAgIHRoaXMucHJvcHMuZ2V0R2VucmUoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBhZ2luYXRpb24gPSAoZSkgPT4ge1xyXG4gICAgbGV0IHNlbGVjdGVkID0gZS5zZWxlY3RlZDtcclxuICAgIGxldCBuZXdzZWxlY3RlZCA9IHNlbGVjdGVkICsgMTtcclxuICAgIGNvbnNvbGUubG9nKG5ld3NlbGVjdGVkKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5wcm9wcy5nZXREYXRhKG5ld3NlbGVjdGVkKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGljayA9IChlKSA9PntcclxuICAgIGxldCBpc0NoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB2YXIgc3RyID0gdGhpcy5zdGF0ZS5zdHJcclxuICAgIGlmKGlzQ2hlY2tlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgIGxldCBiID0gc3RyLmNvbmNhdCh2YWx1ZStcIixcIilcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RyOmJ9KVxyXG4gICAgICB0aGlzLnN0YXRlLmFycmcucHVzaCh2YWx1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGIpXHJcbiAgICAgIHRoaXMucHJvcHMuc2V0R2VucmUodmFsdWUpXHJcbiAgICAgIHRoaXMucHJvcHMubW92aWVCeUdlbnJlKGIpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgbGV0IGMgPSBzdHIucmVwbGFjZSh2YWx1ZStcIixcIiwnJylcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RyOmN9KVxyXG4gICAgICBjb25zb2xlLmxvZyhjKVxyXG4gICAgICB0aGlzLnN0YXRlLmFycmcuc3BsaWNlKHRoaXMuc3RhdGUuYXJyZy5pbmRleE9mKHZhbHVlKSwxKVxyXG4gICAgICB0aGlzLnByb3BzLnJlbW92ZUdlbnJlKHZhbHVlKVxyXG4gICAgICB0aGlzLnByb3BzLm1vdmllQnlHZW5yZShjKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxUb3BiYXI+XHJcbiAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgPFRpdGxlPkRlc2FmaW8gcHJvbW9iaXQ8L1RpdGxlPlxyXG5cclxuICAgICAgICAgICAgPFNlYXJjaENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cclxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9Ub3BiYXI+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8U2VjdGlvbiBzdHlsZT17eyBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIHshdGhpcy5wcm9wcy5tb3ZpZWxpc3QucmVzdWx0cyA/IChcclxuICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPkNhcnJlZ2FuZG8uLi48L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+Q2FycmVnYW5kby4uLjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiwgZm9udFNpemU6IFwiMC44cmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhcnJlZ2FuZG8uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZz5DYXJyZWdhbmRvLi4uPC9UYWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1ZGlvUGxheWVyIGNvbnRyb2xzIG5hbWU9XCJtZWRpYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVQb3N0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMTM4NC8xMzg0MDYxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBbGJ1bSBjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8VGl0bGUgc3R5bGU9e3tkaXNwbGF5OlwiZ3JpZFwifX0+QnVzY2FyIHBvciBnZW5lcm88L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPEZpbHRlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLm1vdmllZ2VucmUuZ2VucmVzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWx0ZXJMYWJlbD5Mb2FkaW5nLi4uPC9GaWx0ZXJMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1vdmllZ2VucmUuZ2VucmVzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQ29sdW1uIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyQ2hlY2tCb3ggdmFsdWU9e2l0ZW0uaWR9IG9uQ2xpY2s9eyhlKT0+dGhpcy5oYW5kbGVDbGljayhlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGFiZWw+IHtpdGVtLm5hbWV9PC9GaWx0ZXJMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpbHRlckNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRmlsdGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnByb3BzLm1vdmllbGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnByb3BzLnRvdGFsUGFnZXMpfVxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tb3ZpZWxpc3QucmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ2aWV3PXtpdGVtLm92ZXJ2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGU9e2l0ZW0udm90ZV9hdmVyYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXtpdGVtLnJlbGVhc2VfZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZWNvdmVyPXtpdGVtLnBvc3Rlcl9wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e2l0ZW0ub3JpZ2luYWxfbGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL21vdmllL1wiK2l0ZW0udGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkdvIHRvIHBhZ2VzL21vdmllL1ttb3ZpZS1uYW1lXS5qczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgICAgICBwYWdlQ291bnQ9e3RoaXMuc3RhdGUudG90YWxQYWdlc31cclxuICAgICAgICAgICAgICBwYWdlUmFuZ2U9ezF9XHJcbiAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezF9XHJcbiAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLmhhbmRsZVBhZ2luYXRpb259XHJcbiAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtcImNvbnRhaW5lclwifVxyXG4gICAgICAgICAgICAgIHByZXZpb3VzTGlua0NsYXNzTmFtZT17XCJwYWdlXCJ9XHJcbiAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wicGFnZVwifVxyXG4gICAgICAgICAgICAgIG5leHRMaW5rQ2xhc3NOYW1lPXtcInBhZ2VcIn1cclxuICAgICAgICAgICAgICBwYWdlQ2xhc3NOYW1lPXtcInBhZ2VcIn1cclxuICAgICAgICAgICAgICBkaXNhYmxlZENsYXNzTm1lPXtcImRpc2FibGVkXCJ9XHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtcImFjdGl2ZVwifVxyXG4gICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9e1wiPFwifVxyXG4gICAgICAgICAgICAgIG5leHRMYWJlbD17XCI+XCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbW92aWVsaXN0OiBzdGF0ZS5tb3ZpZWxpc3QsXHJcbiAgdG90YWxQYWdlczogc3RhdGUudG90YWxQYWdlcyxcclxuICBtb3ZpZWdlbnJlOiBzdGF0ZS5tb3ZpZWdlbnJlLFxyXG4gIGlkOiBzdGF0ZS5pZCxcclxufSk7XHJcblxyXG4vL2NvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuLy8gICAgdGhpcy5wcm9wcy5nZXREYXRhU3VjY2Vzc31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGdldERhdGEsIGdldERldGFpbCwgZ2V0R2VucmUsc2V0R2VucmUscmVtb3ZlR2VucmUsIG1vdmllQnlHZW5yZX0pKFxyXG4gIGluZGV4XHJcbik7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJDb250YWluZXIiLCJCb3giLCJTZWN0aW9uIiwiR3JpZCIsIkxpc3QiLCJMaXN0SXRlbSIsIlRvcGJhciIsIkF1ZGlvUGxheWVyIiwiVGl0bGUiLCJNZW51IiwiU2VhcmNoQ29udGFpbmVyIiwiU2VhcmNoSW5wdXQiLCJTdWJUaXRsZSIsIkxhYmVsIiwiVGFnIiwiQ2FyZENvbnRhaW5lciIsIkNhcmRDb250ZW50IiwiTW92aWVQb3N0ZXIiLCJCdXR0b24iLCJGaWx0ZXJDb250YWluZXIiLCJGaWx0ZXJDb2x1bW4iLCJGaWx0ZXJMYWJlbCIsIkZpbHRlckNoZWNrQm94IiwiTW92aWVjYXJkIiwiZ2V0RGV0YWlsIiwiZ2V0R2VucmUiLCJnZXREYXRhIiwic2V0R2VucmUiLCJyZW1vdmVHZW5yZSIsIm1vdmllQnlHZW5yZSIsIlJlYWN0UGFnaW5hdGUiLCJMaW5rIiwiaW5kZXgiLCJzZWFyY2giLCJwYWdlIiwidG90YWxQYWdlcyIsInByb3BzIiwiYXJyZyIsInN0ciIsImUiLCJzZWxlY3RlZCIsIm5ld3NlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsImlzQ2hlY2tlZCIsInRhcmdldCIsImNoZWNrZWQiLCJ2YWx1ZSIsInN0YXRlIiwiYiIsImNvbmNhdCIsInNldFN0YXRlIiwicHVzaCIsImMiLCJyZXBsYWNlIiwic3BsaWNlIiwiaW5kZXhPZiIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwiYWxpZ25Db250ZW50IiwibW92aWVsaXN0IiwicmVzdWx0cyIsImZvbnRTdHlsZSIsImZvbnRTaXplIiwiZGlzcGxheSIsIm1vdmllZ2VucmUiLCJnZW5yZXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJoYW5kbGVDbGljayIsIm5hbWUiLCJ0aXRsZSIsIm92ZXJ2aWV3Iiwidm90ZV9hdmVyYWdlIiwicmVsZWFzZV9kYXRlIiwicG9zdGVyX3BhdGgiLCJvcmlnaW5hbF9sYW5ndWFnZSIsImhhbmRsZVBhZ2luYXRpb24iLCJtYXBTdGF0ZVRvUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9