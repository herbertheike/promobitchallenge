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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBUixDQUFuQixDQUFIO0FBQUE7QUFBQTtBQUFBLCtCQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFNVpQOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS8uL3NyYy9zdHlsZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvc3R5bGVzL2RlZmF1bHRzLmNzcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmpzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2RlZmF1bHRzLmNzc1wiXHJcbmltcG9ydCB7IHN0b3JlV3JhcHBlciB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgc3RvcmVXcmFwcGVyLndpdGhSZWR1eChNeUFwcCk7IiwiZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9QT1BVTEFSID0gXCJHRVRfTU9WSUVfUE9QVUxBUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX01PVklFX0RFVEFJTCA9IFwiR0VUX01PVklFX0RFVEFJTFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX01PVklFX0dFTlJFID0gXCJHRVRfTU9WSUVfR0VOUkVcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9JRF9ERVRBSUwgPSBcIlNFVF9HRU5SRVwiO1xyXG5leHBvcnQgY29uc3QgTU9WSUVTQllHRU5SRSA9IFwiTU9WSUVTQllHRU5SRVwiOyIsImltcG9ydCB7XHJcbiAgICBHRVRfTU9WSUVfUE9QVUxBUixcclxuICAgIEdFVF9NT1ZJRV9ERVRBSUwsXHJcbiAgICBHRVRfTU9WSUVfR0VOUkUsXHJcbiAgICBTRVRfSURfREVUQUlMLFxyXG4gICAgTU9WSUVTQllHRU5SRVxyXG4gIH0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuICBcclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtb3ZpZWxpc3Q6W10sXHJcbiAgICBtb3ZpZWRldGFpbDpbXSxcclxuICAgIHRvdGFsUGFnZXM6MCxcclxuICAgIG1vdmllZ2VucmU6W10sXHJcbiAgICBpZDonJyxcclxuICAgIG1vdmllYnlnZW5yZTpbXVxyXG4gIH07XHJcbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEdFVF9NT1ZJRV9QT1BVTEFSOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtb3ZpZWxpc3Q6IGFjdGlvbi5tb3ZpZWxpc3QsIHRvdGFsUGFnZXM6YWN0aW9uLnRvdGFsUGFnZXMgfTtcclxuICAgICAgY2FzZSBHRVRfTU9WSUVfREVUQUlMOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtb3ZpZWRldGFpbDogYWN0aW9uLm1vdmllZGV0YWlsIH07XHJcbiAgICAgIGNhc2UgR0VUX01PVklFX0dFTlJFOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLG1vdmllZ2VucmU6IGFjdGlvbi5tb3ZpZWdlbnJlIH07XHJcbiAgICAgIGNhc2UgU0VUX0lEX0RFVEFJTDpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaWQ6c3RhdGUuaWR9XHJcbiAgICAgIGNhc2UgTU9WSUVTQllHRU5SRTpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxtb3ZpZWxpc3Q6IGFjdGlvbi5tb3ZpZWxpc3QsIHRvdGFsUGFnZXM6YWN0aW9uLnRvdGFsUGFnZXN9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHtcclxuICAgIC8vIENyZWF0ZSBzdG9yZVxyXG4gICAgY29uc3Qgc3RvcmUgPWNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG4gIFxyXG4gICAgLy8gUmV0dXJuIHN0b3JlXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbiAgfTtcclxuICBcclxuICAvLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcclxuICBleHBvcnQgY29uc3Qgc3RvcmVXcmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IGZhbHNlIH0pO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgd2lkdGg6IDEwMHZoO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleCAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIGNvbG9yOnJnYigwLDAsMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1KTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTgsIDE4KTtcclxuICBtYXgtaGVpZ2h0OjEwMHZ3O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0MTI5NWEgMCUsICMyZjA3NDMgMTAwJSk7XHJcbmA7XHJcbi8vcmdiYSgyNDMsMjQzLDcyLDEpIDAlLCByZ2JhKDY1LDE3MCwxMTEsMC40MykgMTAwJSlcclxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogODB2dztcclxuICB3aGl0ZS1zcGFjZTp3cmFwO1xyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVG9wYmFyID0gc3R5bGVkLmhlYWRlcmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAwMCAwJSwgIzQzNDM0MyAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEF1ZGlvUGxheWVyID0gc3R5bGVkLmF1ZGlvYFxyXG4gIHdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM0MzQzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAyMGNoO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgfVxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweDtcclxuICB3aWR0aDogMTJjaDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogMS40Mzc1ZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAyMGNoO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnRpdGxlYFxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDc1ZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNZW51ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1heC13aWR0aDoyOnJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLCAwLjcpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMS43NTtcclxuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjcpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcclxuICApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICBtYXgtaGVpZ2h0OjIwcmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06ICBzY2FsZSgxLjA1KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEzcHggNHB4ICMwMDAwMDA7XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246YWxsIDAuNHMgMHMgZWFzZTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmllUG9zdGVyID0gc3R5bGVkLmltZ2BcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDoxMHJlbTtcclxuICBoZWlnaHQ6MTVyZW07XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZVBvc3RlckRldGFpbCA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6MjByZW07XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWF4LXdpZHRoOiAzMHJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNb3ZpZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OjM1cmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZVRpdGxlID0gc3R5bGVkLnRpdGxlYFxyXG5kaXNwbGF5OmlubGluZTtcclxuY29sb3I6d2hpdGU7XHJcbmZvbnQtc2l6ZToycmVtO1xyXG5wYWRkaW5nOjEwcHg7XHJcbnBhZGRpbmctbGVmdDowcHg7XHJcbmZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbmZvbnQtd2VpZ2h0OmJvbGQ7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZVNpbm9wc2lzID0gc3R5bGVkLnBgXHJcbmNvbG9yOndoaXRlO1xyXG5mb250LXNpemU6MXJlbTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmllVm90ZUF2YXJhZ2UgPSBzdHlsZWQuc3BhbmBcclxuIGRpc3BsYXk6aW5saW5lO1xyXG4gY29sb3I6d2hpdGU7XHJcbiBwYWRkaW5nOiAxMHB4O1xyXG4gcGFkZGluZy1sZWZ0OjBweDtcclxuIGZvbnQtc2l6ZToxLjVyZW07XHJcbiBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gZm9udC13ZWlnaHQ6Ym9sZDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmllR2VucmUgPSBzdHlsZWQuZGl2IGBcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMsIGJveC1zaGFkb3cgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBvdXRsaW5lOiAwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgYDtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgQ2FzdENvbnRhaW5lciA9IHN0eWxlZC5saWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xyXG4gIG1hcmdpbjozcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcclxuICApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWF4LXdpZHRoOjhyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06ICBzY2FsZSgxLjAxKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEzcHggNHB4ICMwMDAwMDA7XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246YWxsIDAuNHMgMHMgZWFzZTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhc3RDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxMXB4O1xyXG4gIGRpc3BsYXk6aW5saW5lO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYXN0UG9zdGVyID0gc3R5bGVkLmltZ2BcclxuICBvYmplY3QtZml0OmNvdmVyO1xyXG4gIHdpZHRoOjhyZW07XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYXN0TmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbWF4LXdpZHRoOjI6cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICY6aG92ZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICBcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgIzIzMjUyNiwgIzQxNDM0NSk7XHJcbiAgb3V0bGluZTogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxuICBsaW5lLWhlaWdodDogMS43NTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMjg1N2VtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogOHJlbTtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsICM0MzQzNDMsICMwMDAwMDApO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBBID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYigxMDUsIDE1MywgMjMyKTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb2xvcjogcmdiKDEyMywgNDU2LCAyMzEpO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IE51bWJlckJveCA9IHN0eWxlZC5sYWJlbGBcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgYm9yZGVyOjFweDtcclxuICBib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSk7XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFRleHRsYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBjb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiByZ2IoMTA1LCAxNTMsIDIzMik7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29sb3I6IHJnYigxMjMsIDQ1NiwgMjMxKTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpqdXN0aWZ5XHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgRmlsdGVyQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckVsZW1lbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckxhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJDaGVja0JveCA9IHN0eWxlZC5pbnB1dC5hdHRycyh7IHR5cGU6ICdjaGVja2JveCcgfSlgXHJcbmJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbmA7IiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwibmFtZXMiOlsic3RvcmVXcmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiLCJHRVRfTU9WSUVfUE9QVUxBUiIsIkdFVF9NT1ZJRV9ERVRBSUwiLCJHRVRfTU9WSUVfR0VOUkUiLCJTRVRfSURfREVUQUlMIiwiTU9WSUVTQllHRU5SRSIsImluaXRpYWxTdGF0ZSIsIm1vdmllbGlzdCIsIm1vdmllZGV0YWlsIiwidG90YWxQYWdlcyIsIm1vdmllZ2VucmUiLCJpZCIsIm1vdmllYnlnZW5yZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVXcmFwcGVyIiwidGh1bmsiLCJtYWtlU3RvcmUiLCJzdG9yZSIsImRlYnVnIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiQm94IiwiU2VjdGlvbiIsIkdyaWQiLCJMaXN0IiwidWwiLCJMaXN0SXRlbSIsImxpIiwiVG9wYmFyIiwiaGVhZGVyIiwiQXVkaW9QbGF5ZXIiLCJhdWRpbyIsIlNlYXJjaENvbnRhaW5lciIsIlNlYXJjaElucHV0IiwiaW5wdXQiLCJUaXRsZSIsInRpdGxlIiwiTWVudSIsIlN1YlRpdGxlIiwiTGFiZWwiLCJsYWJlbCIsIlRhZyIsIkNhcmRDb250YWluZXIiLCJDYXJkQ29udGVudCIsIk1vdmllUG9zdGVyIiwiaW1nIiwiTW92aWVQb3N0ZXJEZXRhaWwiLCJNb3ZpZUNvbnRhaW5lciIsIk1vdmllQ29udGVudCIsIk1vdmllVGl0bGUiLCJNb3ZpZVNpbm9wc2lzIiwicCIsIk1vdmllVm90ZUF2YXJhZ2UiLCJzcGFuIiwiTW92aWVHZW5yZSIsIkNhc3RDb250YWluZXIiLCJDYXN0Q29udGVudCIsIkNhc3RQb3N0ZXIiLCJDYXN0TmFtZSIsIkJ1dHRvbiIsImJ1dHRvbiIsIkEiLCJhIiwiTnVtYmVyQm94IiwiVGV4dGxhYmVsIiwiRmlsdGVyQ29udGFpbmVyIiwiRmlsdGVyQ29sdW1uIiwiRmlsdGVyRWxlbWVudCIsIkZpbHRlckxhYmVsIiwiRmlsdGVyQ2hlY2tCb3giLCJhdHRycyJdLCJzb3VyY2VSb290IjoiIn0=