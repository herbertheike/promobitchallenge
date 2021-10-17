(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.js */ "./src/styles/style.js");
/* harmony import */ var _styles_defaults_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/defaults.css */ "./src/styles/defaults.css");
/* harmony import */ var _styles_defaults_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_defaults_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\herberth\\OneDrive\\Documents\\promobitchallenge\\promobitchallenge\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_2__.storeWrapper.withRedux(MyApp));

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_MOVIE_POPULAR": () => (/* binding */ GET_MOVIE_POPULAR),
/* harmony export */   "GET_MOVIE_DETAIL": () => (/* binding */ GET_MOVIE_DETAIL),
/* harmony export */   "GET_MOVIE_GENRE": () => (/* binding */ GET_MOVIE_GENRE),
/* harmony export */   "SET_GENRE": () => (/* binding */ SET_GENRE),
/* harmony export */   "REMOVE_GENRE": () => (/* binding */ REMOVE_GENRE),
/* harmony export */   "MOVIESBYGENRE": () => (/* binding */ MOVIESBYGENRE)
/* harmony export */ });
const GET_MOVIE_POPULAR = "GET_MOVIE_POPULAR";
const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
const GET_MOVIE_GENRE = "GET_MOVIE_GENRE";
const SET_GENRE = "SET_GENRE";
const REMOVE_GENRE = "REMOVE_GENRE";
const MOVIESBYGENRE = "MOVIESBYGENRE";

/***/ }),

/***/ "./src/redux/reducers.js":
/*!*******************************!*\
  !*** ./src/redux/reducers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  movielist: [],
  moviedetail: [],
  totalPages: 0,
  moviegenre: [],
  id: [],
  moviebygenre: []
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_POPULAR:
      return _objectSpread(_objectSpread({}, state), {}, {
        movielist: action.movielist,
        totalPages: action.totalPages
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        moviedetail: action.moviedetail
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_GENRE:
      return _objectSpread(_objectSpread({}, state), {}, {
        moviegenre: action.moviegenre
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.SET_GENRE:
      return _objectSpread(_objectSpread({}, state), {}, {
        id: state.id.concat(action.id)
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.REMOVE_GENRE:
      return _objectSpread(_objectSpread({}, state), {}, {
        id: state.id.splice(state.id.indexOf(action.id), 1)
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.MOVIESBYGENRE:
      return _objectSpread(_objectSpread({}, state), {}, {
        movielist: action.movielist,
        totalPages: action.totalPages
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeWrapper": () => (/* binding */ storeWrapper)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/redux/reducers.js");





const makeStore = () => {
  // Create store
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default()))); // Return store

  return store;
}; // export an assembled wrapper


const storeWrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {
  debug: false
});

/***/ }),

/***/ "./src/styles/style.js":
/*!*****************************!*\
  !*** ./src/styles/style.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "Section": () => (/* binding */ Section),
/* harmony export */   "Grid": () => (/* binding */ Grid),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "ListItem": () => (/* binding */ ListItem),
/* harmony export */   "Topbar": () => (/* binding */ Topbar),
/* harmony export */   "AudioPlayer": () => (/* binding */ AudioPlayer),
/* harmony export */   "SearchContainer": () => (/* binding */ SearchContainer),
/* harmony export */   "SearchInput": () => (/* binding */ SearchInput),
/* harmony export */   "Title": () => (/* binding */ Title),
/* harmony export */   "Menu": () => (/* binding */ Menu),
/* harmony export */   "SubTitle": () => (/* binding */ SubTitle),
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "Tag": () => (/* binding */ Tag),
/* harmony export */   "CardContainer": () => (/* binding */ CardContainer),
/* harmony export */   "CardContent": () => (/* binding */ CardContent),
/* harmony export */   "MoviePoster": () => (/* binding */ MoviePoster),
/* harmony export */   "MoviePosterDetail": () => (/* binding */ MoviePosterDetail),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "FilterContainer": () => (/* binding */ FilterContainer),
/* harmony export */   "FilterColumn": () => (/* binding */ FilterColumn),
/* harmony export */   "FilterElement": () => (/* binding */ FilterElement),
/* harmony export */   "FilterLabel": () => (/* binding */ FilterLabel),
/* harmony export */   "FilterCheckBox": () => (/* binding */ FilterCheckBox)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Container",
  componentId: "sc-158u50k-0"
})(["display:inline;width:100vh;align-items:center;flex-wrap:wrap;flex-direction:column;"]);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Box",
  componentId: "sc-158u50k-1"
})(["display:flex;width:100%;flex-wrap:wrap;flex-direction:column;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Section",
  componentId: "sc-158u50k-2"
})(["background-color:rgb(18,18,18);min-height:100vh;text-align:center;background-image:linear-gradient(180deg,#41295a 0%,#2f0743 100%);"]); //rgba(243,243,72,1) 0%, rgba(65,170,111,0.43) 100%)

const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Grid",
  componentId: "sc-158u50k-3"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "style__List",
  componentId: "sc-158u50k-4"
})(["justify-content:center;align-items:center;list-style:none;margin:0px;padding:10px;position:relative;max-width:100%;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "style__ListItem",
  componentId: "sc-158u50k-5"
})(["display:flex;justify-content:center;align-items:center;position:relative;text-decoration:none;width:100%;box-sizing:border-box;text-align:left;padding-bottom:0.25rem;"]);
const Topbar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "style__Topbar",
  componentId: "sc-158u50k-6"
})(["background-color:#1976d2;background-image:linear-gradient(90deg,#000000 0%,#434343 100%);color:white;position:sticky;top:0;z-index:1;"]);
const AudioPlayer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().audio.withConfig({
  displayName: "style__AudioPlayer",
  componentId: "sc-158u50k-7"
})(["width:320px;height:30px;"]);
const SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__SearchContainer",
  componentId: "sc-158u50k-8"
})(["padding:0px 16px;height:100%;display:flex;align-items:center;justify-content:center;position:relative;background-color:#434343;&:focus{background:#434343;color:white;outline:none;width:20ch;transition:width 300ms cubic-bezier(0.4,0,0.2,1) 0ms;}&::placeholder{color:white;}"]);
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "style__SearchInput",
  componentId: "sc-158u50k-9"
})(["padding:8px 8px 8px;width:12ch;transition:width 300ms cubic-bezier(0.4,0,0.2,1) 0ms;font:inherit;letter-spacing:inherit;color:gray;border:0px;box-sizing:content-box;background-color:transparent;height:1.4375em;margin:0px;display:block;border:none;border-radius:0.3rem;&:focus{background:transparent;color:white;outline:none;width:20ch;transition:width 300ms cubic-bezier(0.4,0,0.2,1) 0ms;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().title.withConfig({
  displayName: "style__Title",
  componentId: "sc-158u50k-10"
})(["display:contents;margin:0px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:500;font-size:1.25rem;line-height:1.6;letter-spacing:0.0075em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;padding-left 1rem;color:white;"]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Menu",
  componentId: "sc-158u50k-11"
})(["position:relative;display:flex;align-items:center;padding-left:16px;padding-right:16px;min-height:56px;justify-content:space-around;"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__SubTitle",
  componentId: "sc-158u50k-12"
})(["margin:0;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-weight:bold;font-size:1.5rem;letter-spacing:0em;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "style__Label",
  componentId: "sc-158u50k-13"
})(["margin:0px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;font-size:0.8rem;line-height:1rem;text-align:justify;color:rgba(48,48,48,0.7);display:block;max-width:320px;&:hover{display:block;overflow:visible;white-space:wrap;transition:width 300ms cubic-bezier(0.4,0,0.2,1) 0ms;}"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Tag",
  componentId: "sc-158u50k-14"
})(["margin:0px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;font-size:0.8rem;line-height:1.75;color:rgba(36,36,36,0.7);"]);
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__CardContainer",
  componentId: "sc-158u50k-15"
})(["background-color:white;transition:box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;border-radius:4px;background-image:linear-gradient( rgba(255,255,255,0.05),rgba(255,255,255,0.05) );overflow:hidden;display:flex;margin-right:0.25rem;max-width:600px;flex-direction:row;"]);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__CardContent",
  componentId: "sc-158u50k-16"
})(["padding:11px;flex:1 0;flex-direction:column;max-width:320px;"]);
const MoviePoster = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "style__MoviePoster",
  componentId: "sc-158u50k-17"
})(["display:block;background-repeat:no-repeat;background-position:center;height:15rem;width:10rem;object-fit:cover;max-width:25rem;"]);
const MoviePosterDetail = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "style__MoviePosterDetail",
  componentId: "sc-158u50k-18"
})(["display:block;background-repeat:no-repeat;background-position:center;height:25rem;width:20rem;object-fit:cover;max-width:30rem;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "style__Button",
  componentId: "sc-158u50k-19"
})(["display:flex;padding-left:16px;align-items:center;justify-content:center;position:relative;box-sizing:border-box;background-image:linear-gradient(130deg,#232526,#414345);outline:0px;margin:0px;cursor:pointer;vertical-align:middle;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:500;font-size:0.6rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;width:120px;height:8rem;padding:5px 15px;border-radius:4px;border:0px;color:rgb(255,255,255);&:hover{background-image:linear-gradient(150deg,#434343,#000000);color:rgb(255,255,255);}"]);
const A = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "style__A",
  componentId: "sc-158u50k-20"
})(["color:rgb(0,0,0);text-decoration:none;&:hover{background-color:rgb(255,255,255);color:rgb(105,153,232);}&:after{color:rgb(123,456,231);}"]);
const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__FilterContainer",
  componentId: "sc-158u50k-21"
})(["padding:10px;column-gap:30px;column-count:4;align-items:center;justify-content:center;display:inline-block;text-align:justify"]);
const FilterColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__FilterColumn",
  componentId: "sc-158u50k-22"
})(["align-items:center;justify-content:center;"]);
const FilterElement = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__FilterElement",
  componentId: "sc-158u50k-23"
})(["display:flex;flex-direction:row;box-sizing:border-box;"]);
const FilterLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "style__FilterLabel",
  componentId: "sc-158u50k-24"
})(["font-size:12px;font-family:Roboto,Helvetica,Arial,sans-serif;color:rgb(255,255,255);"]);
const FilterCheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "style__FilterCheckBox",
  componentId: "sc-158u50k-25"
})(["background-color:white;"]);

/***/ }),

/***/ "./src/styles/defaults.css":
/*!*********************************!*\
  !*** ./src/styles/defaults.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUEsb0VBQWpCO0FBTUEsTUFBTTBCLFdBQVcsR0FBRzFCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVJQUFqQjtBQVNBLE1BQU00QixpQkFBaUIsR0FBRzVCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVJQUF2QjtBQVNBLE1BQU02QixNQUFNLEdBQUc3QiwwRUFBSDtBQUFBO0FBQUE7QUFBQSxzakJBQVo7QUE2QkEsTUFBTStCLENBQUMsR0FBRy9CLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdKQUFQO0FBV0EsTUFBTWlDLGVBQWUsR0FBR2pDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFJQUFyQjtBQVVBLE1BQU1rQyxZQUFZLEdBQUdsQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxrREFBbEI7QUFLQSxNQUFNbUMsYUFBYSxHQUFHbkMsdUVBQUg7QUFBQTtBQUFBO0FBQUEsOERBQW5CO0FBS0EsTUFBTW9DLFdBQVcsR0FBR3BDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFqQjtBQUtBLE1BQU1xQyxjQUFjLEdBQUdyQyxvRUFBQSxDQUFtQjtBQUFFWCxFQUFBQSxJQUFJLEVBQUU7QUFBUixDQUFuQixDQUFIO0FBQUE7QUFBQTtBQUFBLCtCQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1FQOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9zdHlsZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5qc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9kZWZhdWx0cy5jc3NcIlxyXG5pbXBvcnQgeyBzdG9yZVdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHN0b3JlV3JhcHBlci53aXRoUmVkdXgoTXlBcHApOyIsImV4cG9ydCBjb25zdCBHRVRfTU9WSUVfUE9QVUxBUiA9IFwiR0VUX01PVklFX1BPUFVMQVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9ERVRBSUwgPSBcIkdFVF9NT1ZJRV9ERVRBSUxcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9HRU5SRSA9IFwiR0VUX01PVklFX0dFTlJFXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfR0VOUkUgPSBcIlNFVF9HRU5SRVwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0dFTlJFID0gXCJSRU1PVkVfR0VOUkVcIjtcclxuZXhwb3J0IGNvbnN0IE1PVklFU0JZR0VOUkUgPSBcIk1PVklFU0JZR0VOUkVcIjsiLCJpbXBvcnQge1xyXG4gICAgR0VUX01PVklFX1BPUFVMQVIsXHJcbiAgICBHRVRfTU9WSUVfREVUQUlMLFxyXG4gICAgR0VUX01PVklFX0dFTlJFLFxyXG4gICAgU0VUX0dFTlJFLFxyXG4gICAgUkVNT1ZFX0dFTlJFLFxyXG4gICAgTU9WSUVTQllHRU5SRVxyXG4gIH0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuICBcclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtb3ZpZWxpc3Q6W10sXHJcbiAgICBtb3ZpZWRldGFpbDpbXSxcclxuICAgIHRvdGFsUGFnZXM6MCxcclxuICAgIG1vdmllZ2VucmU6W10sXHJcbiAgICBpZDpbXSxcclxuICAgIG1vdmllYnlnZW5yZTpbXVxyXG4gIH07XHJcbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEdFVF9NT1ZJRV9QT1BVTEFSOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtb3ZpZWxpc3Q6IGFjdGlvbi5tb3ZpZWxpc3QsIHRvdGFsUGFnZXM6YWN0aW9uLnRvdGFsUGFnZXMgfTtcclxuICAgICAgY2FzZSBHRVRfTU9WSUVfREVUQUlMOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtb3ZpZWRldGFpbDogYWN0aW9uLm1vdmllZGV0YWlsIH07XHJcbiAgICAgIGNhc2UgR0VUX01PVklFX0dFTlJFOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLG1vdmllZ2VucmU6IGFjdGlvbi5tb3ZpZWdlbnJlIH07XHJcbiAgICAgIGNhc2UgU0VUX0dFTlJFOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpZDpzdGF0ZS5pZC5jb25jYXQoYWN0aW9uLmlkKX1cclxuICAgICAgY2FzZSBSRU1PVkVfR0VOUkU6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlkOnN0YXRlLmlkLnNwbGljZShzdGF0ZS5pZC5pbmRleE9mKGFjdGlvbi5pZCksMSl9XHJcbiAgICAgIGNhc2UgTU9WSUVTQllHRU5SRTpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxtb3ZpZWxpc3Q6IGFjdGlvbi5tb3ZpZWxpc3QsIHRvdGFsUGFnZXM6YWN0aW9uLnRvdGFsUGFnZXN9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHtcclxuICAgIC8vIENyZWF0ZSBzdG9yZVxyXG4gICAgY29uc3Qgc3RvcmUgPWNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG4gIFxyXG4gICAgLy8gUmV0dXJuIHN0b3JlXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbiAgfTtcclxuICBcclxuICAvLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuICBleHBvcnQgY29uc3Qgc3RvcmVXcmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IGZhbHNlIH0pO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgd2lkdGg6IDEwMHZoO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE4LCAxOCk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQxMjk1YSAwJSwgIzJmMDc0MyAxMDAlKTtcclxuYDtcclxuLy9yZ2JhKDI0MywyNDMsNzIsMSkgMCUsIHJnYmEoNjUsMTcwLDExMSwwLjQzKSAxMDAlKVxyXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVG9wYmFyID0gc3R5bGVkLmhlYWRlcmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAwMCAwJSwgIzQzNDM0MyAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEF1ZGlvUGxheWVyID0gc3R5bGVkLmF1ZGlvYFxyXG4gIHdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM0MzQzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAyMGNoO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgfVxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweDtcclxuICB3aWR0aDogMTJjaDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogMS40Mzc1ZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAyMGNoO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnRpdGxlYFxyXG4gICAgZGlzcGxheTpjb250ZW50cztcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDA3NWVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmctbGVmdCAxcmVtO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNTZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMXJlbTtcclxuICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgY29sb3I6IHJnYmEoNDgsIDQ4LCA0OCwgMC43KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVGFnID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC43KTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXHJcbiAgKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGZsZXg6IDEgMDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZVBvc3RlciA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxNXJlbTtcclxuICB3aWR0aDoxMHJlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXgtd2lkdGg6IDI1cmVtO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTW92aWVQb3N0ZXJEZXRhaWwgPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjVyZW07XHJcbiAgd2lkdGg6MjByZW07XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWF4LXdpZHRoOiAzMHJlbTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCAjMjMyNTI2LCAjNDE0MzQ1KTtcclxuICBvdXRsaW5lOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyODU3ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDBweDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE1MGRlZywgIzQzNDM0MywgIzAwMDAwMCk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEEgPSBzdHlsZWQuYWBcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiByZ2IoMTA1LCAxNTMsIDIzMik7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29sb3I6IHJnYigxMjMsIDQ1NiwgMjMxKTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpqdXN0aWZ5XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgRmlsdGVyQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckVsZW1lbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckxhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJDaGVja0JveCA9IHN0eWxlZC5pbnB1dC5hdHRycyh7IHR5cGU6ICdjaGVja2JveCcgfSlgXHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwibmFtZXMiOlsic3RvcmVXcmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiLCJHRVRfTU9WSUVfUE9QVUxBUiIsIkdFVF9NT1ZJRV9ERVRBSUwiLCJHRVRfTU9WSUVfR0VOUkUiLCJTRVRfR0VOUkUiLCJSRU1PVkVfR0VOUkUiLCJNT1ZJRVNCWUdFTlJFIiwiaW5pdGlhbFN0YXRlIiwibW92aWVsaXN0IiwibW92aWVkZXRhaWwiLCJ0b3RhbFBhZ2VzIiwibW92aWVnZW5yZSIsImlkIiwibW92aWVieWdlbnJlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJjb25jYXQiLCJzcGxpY2UiLCJpbmRleE9mIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVXcmFwcGVyIiwidGh1bmsiLCJtYWtlU3RvcmUiLCJzdG9yZSIsImRlYnVnIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiQm94IiwiU2VjdGlvbiIsIkdyaWQiLCJMaXN0IiwidWwiLCJMaXN0SXRlbSIsImxpIiwiVG9wYmFyIiwiaGVhZGVyIiwiQXVkaW9QbGF5ZXIiLCJhdWRpbyIsIlNlYXJjaENvbnRhaW5lciIsIlNlYXJjaElucHV0IiwiaW5wdXQiLCJUaXRsZSIsInRpdGxlIiwiTWVudSIsIlN1YlRpdGxlIiwiTGFiZWwiLCJsYWJlbCIsIlRhZyIsIkNhcmRDb250YWluZXIiLCJDYXJkQ29udGVudCIsIk1vdmllUG9zdGVyIiwiaW1nIiwiTW92aWVQb3N0ZXJEZXRhaWwiLCJCdXR0b24iLCJidXR0b24iLCJBIiwiYSIsIkZpbHRlckNvbnRhaW5lciIsIkZpbHRlckNvbHVtbiIsIkZpbHRlckVsZW1lbnQiLCJGaWx0ZXJMYWJlbCIsIkZpbHRlckNoZWNrQm94IiwiYXR0cnMiXSwic291cmNlUm9vdCI6IiJ9