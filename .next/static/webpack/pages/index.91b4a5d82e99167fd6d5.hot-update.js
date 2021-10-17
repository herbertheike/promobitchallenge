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
/* harmony import */ var _components_moviecard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/moviecard.js */ "./src/components/moviecard.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action */ "./src/redux/action.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Topbar, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Menu, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Title, {
            children: "Desafio promobit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SearchContainer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SearchInput, {
              type: "text",
              placeholder: "Buscar",
              value: this.state.search,
              readOnly: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Grid, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Section, {
          style: {
            alignContent: "center"
          },
          children: [!this.props.movielist.results ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(List, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(CardContainer, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Box, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(CardContent, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(SubTitle, {
                      children: "Carregando..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Label, {
                      children: "Carregando..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Label, {
                      style: {
                        fontStyle: "italic",
                        fontSize: "0.8rem"
                      },
                      children: "Carregando..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Tag, {
                      children: "Carregando..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Box, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(AudioPlayer, {
                      controls: true,
                      name: "media"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(MoviePoster, {
                  src: "https://cdn-icons-png.flaticon.com/512/1384/1384061.png",
                  alt: "Album cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Title, {
              style: {
                display: "grid"
              },
              children: "Buscar por genero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(FilterContainer, {
              children: !this.props.moviegenre.genres ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(FilterLabel, {
                children: "Loading..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 21
              }, this) : this.props.moviegenre.genres.map(item => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(FilterColumn, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(FilterCheckBox, {
                    value: item.id,
                    onClick: e => this.handleClick(e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(FilterLabel, {
                    children: [" ", item.name]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 29
                  }, this)]
                }, item.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 27
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(List, {
              children: [console.log(this.props.movielist), console.log(this.props.totalPages), this.props.movielist.results.map(item => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(ListItem, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_moviecard_js__WEBPACK_IMPORTED_MODULE_3__.default, {
                    id: item.id,
                    title: item.title,
                    overview: item.overview,
                    vote: item.vote_average,
                    duration: item.release_date,
                    moviecover: item.poster_path,
                    link: item.original_language
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 25
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                    href: "/movie/" + item.title,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                      children: "Go to pages/movie/[movie-name].js"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 25
                  }, this)]
                }, item.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 23
                }, this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, this)]
          }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_5___default()), {
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
            lineNumber: 142,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
  getData: _redux_action__WEBPACK_IMPORTED_MODULE_4__.getData,
  getDetail: _redux_action__WEBPACK_IMPORTED_MODULE_4__.getDetail,
  getGenre: _redux_action__WEBPACK_IMPORTED_MODULE_4__.getGenre,
  setGenre: _redux_action__WEBPACK_IMPORTED_MODULE_4__.setGenre,
  removeGenre: _redux_action__WEBPACK_IMPORTED_MODULE_4__.removeGenre,
  movieByGenre: _redux_action__WEBPACK_IMPORTED_MODULE_4__.movieByGenre
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTFiNGE1ZDgyZTk5MTY3ZmQ2ZDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFTyxNQUFNWSxLQUFOLFNBQW9CWCw0Q0FBcEIsQ0FBOEI7QUFBQTtBQUFBOztBQUFBLDRNQUMzQjtBQUNOWSxNQUFBQSxNQUFNLEVBQUUsRUFERjtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsQ0FGQTtBQUdOQyxNQUFBQSxVQUFVLEVBQUUsS0FBS0MsS0FBTCxDQUFXRCxVQUhqQjtBQUlORSxNQUFBQSxJQUFJLEVBQUMsRUFKQztBQUtOQyxNQUFBQSxHQUFHLEVBQUM7QUFMRSxLQUQyQjs7QUFBQSx1TkFjZkMsQ0FBRCxJQUFPO0FBQ3hCLFVBQUlDLFFBQVEsR0FBR0QsQ0FBQyxDQUFDQyxRQUFqQjtBQUNBLFVBQUlDLFdBQVcsR0FBR0QsUUFBUSxHQUFHLENBQTdCO0FBQ0FFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixDQUFaO0FBQ0EsV0FBS0gsS0FBTCxDQUFXVixPQUFYLENBQW1CZSxXQUFuQjtBQUNELEtBcEJrQzs7QUFBQSxrTkFzQnBCRixDQUFELElBQU07QUFDbEIsVUFBSUssU0FBUyxHQUFHTCxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsT0FBekI7QUFDQSxVQUFJQyxLQUFLLEdBQUdSLENBQUMsQ0FBQ00sTUFBRixDQUFTRSxLQUFyQjtBQUNBLFVBQUlULEdBQUcsR0FBRyxLQUFLVSxLQUFMLENBQVdWLEdBQXJCOztBQUNBLFVBQUdNLFNBQVMsS0FBSyxJQUFqQixFQUFzQjtBQUNwQixZQUFJSyxDQUFDLEdBQUdYLEdBQUcsQ0FBQ1ksTUFBSixDQUFXSCxLQUFLLEdBQUMsR0FBakIsQ0FBUjtBQUNBLGFBQUtJLFFBQUwsQ0FBYztBQUFD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LDBCQUFjLEVBQUUsTUFQbEI7QUFRRSw2QkFBaUIsRUFBRSxNQVJyQjtBQVNFLHlCQUFhLEVBQUUsTUFUakI7QUFVRSw0QkFBZ0IsRUFBRSxVQVZwQjtBQVdFLDJCQUFlLEVBQUUsUUFYbkI7QUFZRSx5QkFBYSxFQUFFLEdBWmpCO0FBYUUscUJBQVMsRUFBRTtBQWJiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTZHRDs7QUF4SmtDOztBQTJKckMsTUFBTUMsZUFBZSxHQUFJL0IsS0FBRCxLQUFZO0FBQ2xDWSxFQUFBQSxTQUFTLEVBQUVaLEtBQUssQ0FBQ1ksU0FEaUI7QUFFbEN6QixFQUFBQSxVQUFVLEVBQUVhLEtBQUssQ0FBQ2IsVUFGZ0I7QUFHbEM4QixFQUFBQSxVQUFVLEVBQUVqQixLQUFLLENBQUNpQixVQUhnQjtBQUlsQ0ksRUFBQUEsRUFBRSxFQUFFckIsS0FBSyxDQUFDcUI7QUFKd0IsQ0FBWixDQUF4QixFQU9BO0FBQ0E7OztBQUVBLCtEQUFlL0Msb0RBQU8sQ0FBQ3lELGVBQUQsRUFBa0I7QUFBRXJELEVBQUFBLE9BQUY7QUFBV0YsRUFBQUEsU0FBWDtBQUFzQkMsRUFBQUEsUUFBdEI7QUFBK0JFLEVBQUFBLFFBQS9CO0FBQXdDQyxFQUFBQSxXQUF4QztBQUFxREMsRUFBQUEsWUFBWUEseURBQUFBO0FBQWpFLENBQWxCLENBQVAsQ0FDYkcsS0FEYSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBNb3ZpZWNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW92aWVjYXJkLmpzXCI7XHJcbmltcG9ydCB7IGdldERldGFpbCwgZ2V0R2VucmUsIGdldERhdGEsc2V0R2VucmUscmVtb3ZlR2VucmUsIG1vdmllQnlHZW5yZSB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25cIjtcclxuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBjbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgdG90YWxQYWdlczogdGhpcy5wcm9wcy50b3RhbFBhZ2VzLFxyXG4gICAgYXJyZzpbXSxcclxuICAgIHN0cjonJ1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5nZXREYXRhKHRoaXMuc3RhdGUucGFnZSk7XHJcbiAgICB0aGlzLnByb3BzLmdldEdlbnJlKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQYWdpbmF0aW9uID0gKGUpID0+IHtcclxuICAgIGxldCBzZWxlY3RlZCA9IGUuc2VsZWN0ZWQ7XHJcbiAgICBsZXQgbmV3c2VsZWN0ZWQgPSBzZWxlY3RlZCArIDE7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdzZWxlY3RlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRoaXMucHJvcHMuZ2V0RGF0YShuZXdzZWxlY3RlZCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSAoZSkgPT57XHJcbiAgICBsZXQgaXNDaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdmFyIHN0ciA9IHRoaXMuc3RhdGUuc3RyXHJcbiAgICBpZihpc0NoZWNrZWQgPT09IHRydWUpe1xyXG4gICAgICBsZXQgYiA9IHN0ci5jb25jYXQodmFsdWUrXCIsXCIpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N0cjpifSlcclxuICAgICAgdGhpcy5zdGF0ZS5hcnJnLnB1c2godmFsdWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhiKVxyXG4gICAgICB0aGlzLnByb3BzLnNldEdlbnJlKHZhbHVlKVxyXG4gICAgICB0aGlzLnByb3BzLm1vdmllQnlHZW5yZShiKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxldCBjID0gc3RyLnJlcGxhY2UodmFsdWUrXCIsXCIsJycpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3N0cjpjfSlcclxuICAgICAgY29uc29sZS5sb2coYylcclxuICAgICAgdGhpcy5zdGF0ZS5hcnJnLnNwbGljZSh0aGlzLnN0YXRlLmFycmcuaW5kZXhPZih2YWx1ZSksMSlcclxuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVHZW5yZSh2YWx1ZSlcclxuICAgICAgdGhpcy5wcm9wcy5tb3ZpZUJ5R2VucmUoYylcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8VG9wYmFyPlxyXG4gICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgIDxUaXRsZT5EZXNhZmlvIHByb21vYml0PC9UaXRsZT5cclxuXHJcbiAgICAgICAgICAgIDxTZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvVG9wYmFyPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPFNlY3Rpb24gc3R5bGU9e3sgYWxpZ25Db250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICB7IXRoaXMucHJvcHMubW92aWVsaXN0LnJlc3VsdHMgPyAoXHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5DYXJyZWdhbmRvLi4uPC9TdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkNhcnJlZ2FuZG8uLi48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U3R5bGU6IFwiaXRhbGljXCIsIGZvbnRTaXplOiBcIjAuOHJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJyZWdhbmRvLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWc+Q2FycmVnYW5kby4uLjwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdWRpb1BsYXllciBjb250cm9scyBuYW1lPVwibWVkaWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllUG9zdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzEzODQvMTM4NDA2MS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQWxidW0gY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHN0eWxlPXt7ZGlzcGxheTpcImdyaWRcIn19PkJ1c2NhciBwb3IgZ2VuZXJvPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5tb3ZpZWdlbnJlLmdlbnJlcyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGFiZWw+TG9hZGluZy4uLjwvRmlsdGVyTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tb3ZpZWdlbnJlLmdlbnJlcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckNvbHVtbiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckNoZWNrQm94IHZhbHVlPXtpdGVtLmlkfSBvbkNsaWNrPXsoZSk9PnRoaXMuaGFuZGxlQ2xpY2soZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlckxhYmVsPiB7aXRlbS5uYW1lfTwvRmlsdGVyTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWx0ZXJDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0ZpbHRlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5wcm9wcy5tb3ZpZWxpc3QpfVxyXG4gICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5wcm9wcy50b3RhbFBhZ2VzKX1cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubW92aWVsaXN0LnJlc3VsdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVydmlldz17aXRlbS5vdmVydmlld31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2b3RlPXtpdGVtLnZvdGVfYXZlcmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17aXRlbS5yZWxlYXNlX2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWVjb3Zlcj17aXRlbS5wb3N0ZXJfcGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXtpdGVtLm9yaWdpbmFsX2xhbmd1YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9tb3ZpZS9cIitpdGVtLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5HbyB0byBwYWdlcy9tb3ZpZS9bbW92aWUtbmFtZV0uanM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgcGFnZUNvdW50PXt0aGlzLnN0YXRlLnRvdGFsUGFnZXN9XHJcbiAgICAgICAgICAgICAgcGFnZVJhbmdlPXsxfVxyXG4gICAgICAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXsxfVxyXG4gICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5oYW5kbGVQYWdpbmF0aW9ufVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17XCJjb250YWluZXJcIn1cclxuICAgICAgICAgICAgICBwcmV2aW91c0xpbmtDbGFzc05hbWU9e1wicGFnZVwifVxyXG4gICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcInBhZ2VcIn1cclxuICAgICAgICAgICAgICBuZXh0TGlua0NsYXNzTmFtZT17XCJwYWdlXCJ9XHJcbiAgICAgICAgICAgICAgcGFnZUNsYXNzTmFtZT17XCJwYWdlXCJ9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWRDbGFzc05tZT17XCJkaXNhYmxlZFwifVxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cclxuICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcIjxcIn1cclxuICAgICAgICAgICAgICBuZXh0TGFiZWw9e1wiPlwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG1vdmllbGlzdDogc3RhdGUubW92aWVsaXN0LFxyXG4gIHRvdGFsUGFnZXM6IHN0YXRlLnRvdGFsUGFnZXMsXHJcbiAgbW92aWVnZW5yZTogc3RhdGUubW92aWVnZW5yZSxcclxuICBpZDogc3RhdGUuaWQsXHJcbn0pO1xyXG5cclxuLy9jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbi8vICAgIHRoaXMucHJvcHMuZ2V0RGF0YVN1Y2Nlc3N9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXREYXRhLCBnZXREZXRhaWwsIGdldEdlbnJlLHNldEdlbnJlLHJlbW92ZUdlbnJlLCBtb3ZpZUJ5R2VucmV9KShcclxuICBpbmRleFxyXG4pO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiTW92aWVjYXJkIiwiZ2V0RGV0YWlsIiwiZ2V0R2VucmUiLCJnZXREYXRhIiwic2V0R2VucmUiLCJyZW1vdmVHZW5yZSIsIm1vdmllQnlHZW5yZSIsIlJlYWN0UGFnaW5hdGUiLCJMaW5rIiwiaW5kZXgiLCJzZWFyY2giLCJwYWdlIiwidG90YWxQYWdlcyIsInByb3BzIiwiYXJyZyIsInN0ciIsImUiLCJzZWxlY3RlZCIsIm5ld3NlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsImlzQ2hlY2tlZCIsInRhcmdldCIsImNoZWNrZWQiLCJ2YWx1ZSIsInN0YXRlIiwiYiIsImNvbmNhdCIsInNldFN0YXRlIiwicHVzaCIsImMiLCJyZXBsYWNlIiwic3BsaWNlIiwiaW5kZXhPZiIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwiYWxpZ25Db250ZW50IiwibW92aWVsaXN0IiwicmVzdWx0cyIsImZvbnRTdHlsZSIsImZvbnRTaXplIiwiZGlzcGxheSIsIm1vdmllZ2VucmUiLCJnZW5yZXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJoYW5kbGVDbGljayIsIm5hbWUiLCJ0aXRsZSIsIm92ZXJ2aWV3Iiwidm90ZV9hdmVyYWdlIiwicmVsZWFzZV9kYXRlIiwicG9zdGVyX3BhdGgiLCJvcmlnaW5hbF9sYW5ndWFnZSIsImhhbmRsZVBhZ2luYXRpb24iLCJtYXBTdGF0ZVRvUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9