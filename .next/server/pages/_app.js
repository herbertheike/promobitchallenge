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
/* harmony export */   "SET_ID_DETAIL": () => (/* binding */ SET_ID_DETAIL),
/* harmony export */   "MOVIESBYGENRE": () => (/* binding */ MOVIESBYGENRE)
/* harmony export */ });
const GET_MOVIE_POPULAR = "GET_MOVIE_POPULAR";
const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
const GET_MOVIE_GENRE = "GET_MOVIE_GENRE";
const SET_ID_DETAIL = "SET_GENRE";
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
  id: '',
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

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.SET_ID_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        id: state.id
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
/* harmony export */   "MovieContainer": () => (/* binding */ MovieContainer),
/* harmony export */   "MovieContent": () => (/* binding */ MovieContent),
/* harmony export */   "MovieTitle": () => (/* binding */ MovieTitle),
/* harmony export */   "MovieSinopsis": () => (/* binding */ MovieSinopsis),
/* harmony export */   "MovieVoteAvarage": () => (/* binding */ MovieVoteAvarage),
/* harmony export */   "MovieGenre": () => (/* binding */ MovieGenre),
/* harmony export */   "CastContainer": () => (/* binding */ CastContainer),
/* harmony export */   "CastContent": () => (/* binding */ CastContent),
/* harmony export */   "CastPoster": () => (/* binding */ CastPoster),
/* harmony export */   "CastName": () => (/* binding */ CastName),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "NumberBox": () => (/* binding */ NumberBox),
/* harmony export */   "Textlabel": () => (/* binding */ Textlabel),
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
})(["display:flex;width:100%;flex 1;flex-direction:column;text-align:left;color:rgb(0,0,0);background-color:rgba(255,255,255);"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Section",
  componentId: "sc-158u50k-2"
})(["background-color:rgb(18,18,18);max-height:100vw;text-align:center;background-image:linear-gradient(180deg,#41295a 0%,#2f0743 100%);"]); //rgba(243,243,72,1) 0%, rgba(65,170,111,0.43) 100%)

const Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Grid",
  componentId: "sc-158u50k-3"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "style__List",
  componentId: "sc-158u50k-4"
})(["justify-content:center;align-items:center;list-style:none;margin:0px;padding:10px;display:inline-block;position:relative;max-width:80vw;white-space:wrap;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "style__ListItem",
  componentId: "sc-158u50k-5"
})(["display:inline-block;justify-content:center;align-items:center;position:relative;text-decoration:none;box-sizing:border-box;text-align:left;padding:0.2rem;"]);
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
})(["display:flex;margin:0px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:500;font-size:1.25rem;line-height:1.6;letter-spacing:0.0075em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;padding:10px;color:white;"]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Menu",
  componentId: "sc-158u50k-11"
})(["position:relative;display:flex;align-items:center;padding-left:16px;padding-right:16px;min-height:56px;justify-content:space-around;"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__SubTitle",
  componentId: "sc-158u50k-12"
})(["margin:0;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-weight:bold;font-size:1rem;max-width:2:rem;letter-spacing:0em;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "style__Label",
  componentId: "sc-158u50k-13"
})(["margin:0px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;font-size:1rem;line-height:1rem;text-align:justify;color:rgba(0,0,0,0.7);display:block;max-width:320px;&:hover{display:block;overflow:visible;white-space:wrap;transition:width 300ms cubic-bezier(0.4,0,0.2,1) 0ms;}"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Tag",
  componentId: "sc-158u50k-14"
})(["margin:0px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;font-size:0.8rem;line-height:1.75;color:rgba(36,36,36,0.7);"]);
const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__CardContainer",
  componentId: "sc-158u50k-15"
})(["background-color:white;transition:box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;border-radius:4px;background-image:linear-gradient( rgba(255,255,255,0.05),rgba(255,255,255,0.05) );overflow:hidden;display:flex;margin-right:0.25rem;max-width:10rem;max-height:20rem;flex-direction:column;cursor:pointer;&:hover{transform:scale(1.05);z-index:1;box-shadow:1px 1px 13px 4px #000000;}transition:all 0.4s 0s ease;"]);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__CardContent",
  componentId: "sc-158u50k-16"
})(["padding:11px;display:inline-block;flex-direction:column;max-width:320px;"]);
const MoviePoster = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "style__MoviePoster",
  componentId: "sc-158u50k-17"
})(["display:block;width:10rem;height:15rem;object-fit:cover;"]);
const MoviePosterDetail = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "style__MoviePosterDetail",
  componentId: "sc-158u50k-18"
})(["display:block;background-repeat:no-repeat;background-position:center;width:20rem;object-fit:cover;max-width:30rem;"]);
const MovieContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__MovieContainer",
  componentId: "sc-158u50k-19"
})(["border-radius:4px;overflow:hidden;display:block;height:35rem;flex-direction:column;background-size:cover;"]);
const MovieContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__MovieContent",
  componentId: "sc-158u50k-20"
})(["padding:11px;margin:0px;display:flex;flex-direction:row;align-items:center;"]);
const MovieTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().title.withConfig({
  displayName: "style__MovieTitle",
  componentId: "sc-158u50k-21"
})(["display:inline;color:white;font-size:2rem;padding:10px;padding-left:0px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:bold;"]);
const MovieSinopsis = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "style__MovieSinopsis",
  componentId: "sc-158u50k-22"
})(["color:white;font-size:1rem;"]);
const MovieVoteAvarage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "style__MovieVoteAvarage",
  componentId: "sc-158u50k-23"
})(["display:inline;color:white;padding:10px;padding-left:0px;font-size:1.5rem;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:bold;"]);
const MovieGenre = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__MovieGenre",
  componentId: "sc-158u50k-24"
})(["font-family:Roboto,Helvetica,Arial,sans-serif;font-size:0.8rem;display:inline-flex;align-items:center;justify-content:center;height:32px;color:rgb(255,255,255);background-color:rgba(255,255,255,0.16);border-radius:16px;white-space:nowrap;transition:background-color 300ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;cursor:default;outline:0px;text-decoration:none;border:0px;padding:10px;vertical-align:middle;box-sizing:border-box;margin:2px;"]);
const CastContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "style__CastContainer",
  componentId: "sc-158u50k-25"
})(["background-color:white;transition:box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;margin:3px;background-image:linear-gradient( rgba(255,255,255,0.05),rgba(255,255,255,0.05) );overflow:hidden;display:inline-flex;max-width:8rem;margin-right:0.25rem;flex-direction:column;text-align:center;cursor:pointer;&:hover{transform:scale(1.01);z-index:1;box-shadow:1px 1px 13px 4px #000000;}transition:all 0.4s 0s ease;"]);
const CastContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__CastContent",
  componentId: "sc-158u50k-26"
})(["padding:11px;display:inline;flex-direction:column;"]);
const CastPoster = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "style__CastPoster",
  componentId: "sc-158u50k-27"
})(["object-fit:cover;width:8rem;"]);
const CastName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__CastName",
  componentId: "sc-158u50k-28"
})(["margin:0;font-family:\"Roboto\",\"Helvetica\",\"Arial\",sans-serif;font-weight:bold;font-size:0.8rem;max-width:2:rem;letter-spacing:0em;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;&:hover{font-size:0.5rem;text-overflow:ellipsis;overflow:visible;white-space:nowrap;}"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "style__Button",
  componentId: "sc-158u50k-29"
})(["display:flex;padding-left:16px;align-items:center;justify-content:center;position:relative;box-sizing:border-box;background-image:linear-gradient(130deg,#232526,#414345);outline:0px;margin:0px;cursor:pointer;vertical-align:middle;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:500;font-size:0.6rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;width:120px;height:8rem;padding:5px 15px;border-radius:4px;border:0px;color:rgb(255,255,255);&:hover{background-image:linear-gradient(150deg,#434343,#000000);color:rgb(255,255,255);}"]);
const A = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "style__A",
  componentId: "sc-158u50k-30"
})(["color:rgb(255,255,255);text-decoration:none;&:hover{background-color:rgb(255,255,255);color:rgb(105,153,232);}&:after{color:rgb(123,456,231);}"]);
const NumberBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "style__NumberBox",
  componentId: "sc-158u50k-31"
})(["display:flex;padding:10px;background-color:rgba(255,255,255,0.4);border:1px;border-color:rgba(255,255,255);color:rgba(255,255,255);text-decoration:none;"]);
const Textlabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "style__Textlabel",
  componentId: "sc-158u50k-32"
})(["color:rgb(255,255,255);padding:10px;text-decoration:none;&:hover{background-color:rgb(255,255,255);color:rgb(105,153,232);}&:after{color:rgb(123,456,231);}"]);
const FilterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__FilterContainer",
  componentId: "sc-158u50k-33"
})(["padding:10px;column-gap:30px;column-count:4;align-items:center;justify-content:center;display:inline-block;text-align:justify"]);
const FilterColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__FilterColumn",
  componentId: "sc-158u50k-34"
})(["align-items:center;justify-content:center;"]);
const FilterElement = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__FilterElement",
  componentId: "sc-158u50k-35"
})(["display:flex;flex-direction:row;box-sizing:border-box;"]);
const FilterLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
  displayName: "style__FilterLabel",
  componentId: "sc-158u50k-36"
})(["font-size:12px;font-family:Roboto,Helvetica,Arial,sans-serif;color:rgb(255,255,255);"]);
const FilterCheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "style__FilterCheckBox",
  componentId: "sc-158u50k-37"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBUixDQUFuQixDQUFIO0FBQUE7QUFBQTtBQUFBLCtCQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVpQOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9zdHlsZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5qc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9kZWZhdWx0cy5jc3NcIlxyXG5pbXBvcnQgeyBzdG9yZVdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHN0b3JlV3JhcHBlci53aXRoUmVkdXgoTXlBcHApOyIsImV4cG9ydCBjb25zdCBHRVRfTU9WSUVfUE9QVUxBUiA9IFwiR0VUX01PVklFX1BPUFVMQVJcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9ERVRBSUwgPSBcIkdFVF9NT1ZJRV9ERVRBSUxcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9HRU5SRSA9IFwiR0VUX01PVklFX0dFTlJFXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfSURfREVUQUlMID0gXCJTRVRfR0VOUkVcIjtcclxuZXhwb3J0IGNvbnN0IE1PVklFU0JZR0VOUkUgPSBcIk1PVklFU0JZR0VOUkVcIjsiLCJpbXBvcnQge1xyXG4gICAgR0VUX01PVklFX1BPUFVMQVIsXHJcbiAgICBHRVRfTU9WSUVfREVUQUlMLFxyXG4gICAgR0VUX01PVklFX0dFTlJFLFxyXG4gICAgU0VUX0lEX0RFVEFJTCxcclxuICAgIE1PVklFU0JZR0VOUkVcclxuICB9IGZyb20gXCIuL2FjdGlvblR5cGVzXCI7XHJcbiAgXHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbW92aWVsaXN0OltdLFxyXG4gICAgbW92aWVkZXRhaWw6W10sXHJcbiAgICB0b3RhbFBhZ2VzOjAsXHJcbiAgICBtb3ZpZWdlbnJlOltdLFxyXG4gICAgaWQ6JycsXHJcbiAgICBtb3ZpZWJ5Z2VucmU6W11cclxuICB9O1xyXG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBHRVRfTU9WSUVfUE9QVUxBUjpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbW92aWVsaXN0OiBhY3Rpb24ubW92aWVsaXN0LCB0b3RhbFBhZ2VzOmFjdGlvbi50b3RhbFBhZ2VzIH07XHJcbiAgICAgIGNhc2UgR0VUX01PVklFX0RFVEFJTDpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbW92aWVkZXRhaWw6IGFjdGlvbi5tb3ZpZWRldGFpbCB9O1xyXG4gICAgICBjYXNlIEdFVF9NT1ZJRV9HRU5SRTpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxtb3ZpZWdlbnJlOiBhY3Rpb24ubW92aWVnZW5yZSB9O1xyXG4gICAgICBjYXNlIFNFVF9JRF9ERVRBSUw6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlkOnN0YXRlLmlkfVxyXG4gICAgICBjYXNlIE1PVklFU0JZR0VOUkU6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsbW92aWVsaXN0OiBhY3Rpb24ubW92aWVsaXN0LCB0b3RhbFBhZ2VzOmFjdGlvbi50b3RhbFBhZ2VzfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG4gIGV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgc3RvcmVcclxuICAgIGNvbnN0IHN0b3JlID1jcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKTtcclxuICBcclxuICAgIC8vIFJldHVybiBzdG9yZVxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG4gIH07XHJcbiAgXHJcbiAgLy8gZXhwb3J0IGFuIGFzc2VtYmxlZCB3cmFwcGVyXHJcbiAgZXhwb3J0IGNvbnN0IHN0b3JlV3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiBmYWxzZSB9KTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHdpZHRoOiAxMDB2aDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXggMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICBjb2xvcjpyZ2IoMCwwLDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE4LCAxOCk7XHJcbiAgbWF4LWhlaWdodDoxMDB2dztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDEyOTVhIDAlLCAjMmYwNzQzIDEwMCUpO1xyXG5gO1xyXG4vL3JnYmEoMjQzLDI0Myw3MiwxKSAwJSwgcmdiYSg2NSwxNzAsMTExLDAuNDMpIDEwMCUpXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgd2hpdGUtc3BhY2U6d3JhcDtcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvcGJhciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDAwMDAgMCUsICM0MzQzNDMgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBBdWRpb1BsYXllciA9IHN0eWxlZC5hdWRpb2BcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwcHggMTZweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0MzQzO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzQzNDM0MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMjBjaDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xyXG4gIH1cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHg7XHJcbiAgd2lkdGg6IDEyY2g7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcclxuICBjb2xvcjogZ3JheTtcclxuICBib3JkZXI6IDBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDEuNDM3NWVtO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMjBjaDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC50aXRsZWBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDA3NWVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIFxyXG5gO1xyXG5leHBvcnQgY29uc3QgTWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXgtd2lkdGg6MjpyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIHRleHQtYWxpZ246anVzdGlmeTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwgMC43KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVGFnID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDBweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC43KTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXHJcbiAgKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG4gIG1heC13aWR0aDogMTByZW07XHJcbiAgbWF4LWhlaWdodDoyMHJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiAgc2NhbGUoMS4wNSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxM3B4IDRweCAjMDAwMDAwO1xyXG4gIH1cclxuICB0cmFuc2l0aW9uOmFsbCAwLjRzIDBzIGVhc2U7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTFweDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZVBvc3RlciA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6MTByZW07XHJcbiAgaGVpZ2h0OjE1cmVtO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTW92aWVQb3N0ZXJEZXRhaWwgPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOjIwcmVtO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1heC13aWR0aDogMzByZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW92aWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIFxyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDozNXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgTW92aWVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgTW92aWVUaXRsZSA9IHN0eWxlZC50aXRsZWBcclxuZGlzcGxheTppbmxpbmU7XHJcbmNvbG9yOndoaXRlO1xyXG5mb250LXNpemU6MnJlbTtcclxucGFkZGluZzoxMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MHB4O1xyXG5mb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5mb250LXdlaWdodDpib2xkO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTW92aWVTaW5vcHNpcyA9IHN0eWxlZC5wYFxyXG5jb2xvcjp3aGl0ZTtcclxuZm9udC1zaXplOjFyZW07XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZVZvdGVBdmFyYWdlID0gc3R5bGVkLnNwYW5gXHJcbiBkaXNwbGF5OmlubGluZTtcclxuIGNvbG9yOndoaXRlO1xyXG4gcGFkZGluZzogMTBweDtcclxuIHBhZGRpbmctbGVmdDowcHg7XHJcbiBmb250LXNpemU6MS41cmVtO1xyXG4gZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZUdlbnJlID0gc3R5bGVkLmRpdiBgXHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zLCBib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgb3V0bGluZTogMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGA7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IENhc3RDb250YWluZXIgPSBzdHlsZWQubGlgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICBtYXJnaW46M3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXHJcbiAgKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIG1heC13aWR0aDo4cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiAgc2NhbGUoMS4wMSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxM3B4IDRweCAjMDAwMDAwO1xyXG4gIH1cclxuICB0cmFuc2l0aW9uOmFsbCAwLjRzIDBzIGVhc2U7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYXN0Q29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTFweDtcclxuICBkaXNwbGF5OmlubGluZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FzdFBvc3RlciA9IHN0eWxlZC5pbWdgXHJcbiAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICB3aWR0aDo4cmVtO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FzdE5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIG1heC13aWR0aDoyOnJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAmOmhvdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgXHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICMyMzI1MjYsICM0MTQzNDUpO1xyXG4gIG91dGxpbmU6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDI4NTdlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDhyZW07XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjNDM0MzQzLCAjMDAwMDAwKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQSA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiByZ2IoMTA1LCAxNTMsIDIzMik7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29sb3I6IHJnYigxMjMsIDQ1NiwgMjMxKTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBOdW1iZXJCb3ggPSBzdHlsZWQubGFiZWxgXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIGJvcmRlcjoxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUpO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUZXh0bGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjb2xvcjogcmdiKDEwNSwgMTUzLCAyMzIpO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTIzLCA0NTYsIDIzMSk7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRmlsdGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246anVzdGlmeVxyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckNvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJFbGVtZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJMYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBmb250LXNpemU6MTJweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgRmlsdGVyQ2hlY2tCb3ggPSBzdHlsZWQuaW5wdXQuYXR0cnMoeyB0eXBlOiAnY2hlY2tib3gnIH0pYFxyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5gOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm5hbWVzIjpbInN0b3JlV3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4IiwiR0VUX01PVklFX1BPUFVMQVIiLCJHRVRfTU9WSUVfREVUQUlMIiwiR0VUX01PVklFX0dFTlJFIiwiU0VUX0lEX0RFVEFJTCIsIk1PVklFU0JZR0VOUkUiLCJpbml0aWFsU3RhdGUiLCJtb3ZpZWxpc3QiLCJtb3ZpZWRldGFpbCIsInRvdGFsUGFnZXMiLCJtb3ZpZWdlbnJlIiwiaWQiLCJtb3ZpZWJ5Z2VucmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsInRodW5rIiwibWFrZVN0b3JlIiwic3RvcmUiLCJkZWJ1ZyIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkJveCIsIlNlY3Rpb24iLCJHcmlkIiwiTGlzdCIsInVsIiwiTGlzdEl0ZW0iLCJsaSIsIlRvcGJhciIsImhlYWRlciIsIkF1ZGlvUGxheWVyIiwiYXVkaW8iLCJTZWFyY2hDb250YWluZXIiLCJTZWFyY2hJbnB1dCIsImlucHV0IiwiVGl0bGUiLCJ0aXRsZSIsIk1lbnUiLCJTdWJUaXRsZSIsIkxhYmVsIiwibGFiZWwiLCJUYWciLCJDYXJkQ29udGFpbmVyIiwiQ2FyZENvbnRlbnQiLCJNb3ZpZVBvc3RlciIsImltZyIsIk1vdmllUG9zdGVyRGV0YWlsIiwiTW92aWVDb250YWluZXIiLCJNb3ZpZUNvbnRlbnQiLCJNb3ZpZVRpdGxlIiwiTW92aWVTaW5vcHNpcyIsInAiLCJNb3ZpZVZvdGVBdmFyYWdlIiwic3BhbiIsIk1vdmllR2VucmUiLCJDYXN0Q29udGFpbmVyIiwiQ2FzdENvbnRlbnQiLCJDYXN0UG9zdGVyIiwiQ2FzdE5hbWUiLCJCdXR0b24iLCJidXR0b24iLCJBIiwiYSIsIk51bWJlckJveCIsIlRleHRsYWJlbCIsIkZpbHRlckNvbnRhaW5lciIsIkZpbHRlckNvbHVtbiIsIkZpbHRlckVsZW1lbnQiLCJGaWx0ZXJMYWJlbCIsIkZpbHRlckNoZWNrQm94IiwiYXR0cnMiXSwic291cmNlUm9vdCI6IiJ9