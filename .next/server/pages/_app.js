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
  totalPagesg: 0,
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
        moviebygenre: action.moviebygenre,
        totalPagesg: action.totalPagesg
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
})(["color:rgb(255,255,255);text-decoration:none;&:hover{color:rgb(105,153,232);}&:after{color:rgb(123,456,231);}"]);
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
})(["padding:10px;column-gap:3px;column-count:5;align-items:center;justify-content:center;display:inline-block;text-align:justify"]);
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
})(["width:17px;height:17px;&:hover{border:0px;}}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBbUI7QUFBRVIsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBbkIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxvREFBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVaUDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvcmVkdXgvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmpzIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuanNcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZGVmYXVsdHMuY3NzXCJcclxuaW1wb3J0IHsgc3RvcmVXcmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBzdG9yZVdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTsiLCJleHBvcnQgY29uc3QgR0VUX01PVklFX1BPUFVMQVIgPSBcIkdFVF9NT1ZJRV9QT1BVTEFSXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfREVUQUlMID0gXCJHRVRfTU9WSUVfREVUQUlMXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVfR0VOUkUgPSBcIkdFVF9NT1ZJRV9HRU5SRVwiO1xyXG5leHBvcnQgY29uc3QgU0VUX0lEX0RFVEFJTCA9IFwiU0VUX0dFTlJFXCI7XHJcbmV4cG9ydCBjb25zdCBNT1ZJRVNCWUdFTlJFID0gXCJNT1ZJRVNCWUdFTlJFXCI7IiwiaW1wb3J0IHtcclxuICAgIEdFVF9NT1ZJRV9QT1BVTEFSLFxyXG4gICAgR0VUX01PVklFX0RFVEFJTCxcclxuICAgIEdFVF9NT1ZJRV9HRU5SRSxcclxuICAgIFNFVF9JRF9ERVRBSUwsXHJcbiAgICBNT1ZJRVNCWUdFTlJFXHJcbiAgfSBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG4gIFxyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1vdmllbGlzdDpbXSxcclxuICAgIG1vdmllZGV0YWlsOltdLFxyXG4gICAgdG90YWxQYWdlczowLFxyXG4gICAgdG90YWxQYWdlc2c6MCxcclxuICAgIG1vdmllZ2VucmU6W10sXHJcbiAgICBpZDonJyxcclxuICAgIG1vdmllYnlnZW5yZTpbXVxyXG4gIH07XHJcbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIEdFVF9NT1ZJRV9QT1BVTEFSOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtb3ZpZWxpc3Q6IGFjdGlvbi5tb3ZpZWxpc3QsIHRvdGFsUGFnZXM6YWN0aW9uLnRvdGFsUGFnZXMgfTtcclxuICAgICAgY2FzZSBHRVRfTU9WSUVfREVUQUlMOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtb3ZpZWRldGFpbDogYWN0aW9uLm1vdmllZGV0YWlsIH07XHJcbiAgICAgIGNhc2UgR0VUX01PVklFX0dFTlJFOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLG1vdmllZ2VucmU6IGFjdGlvbi5tb3ZpZWdlbnJlIH07XHJcbiAgICAgIGNhc2UgU0VUX0lEX0RFVEFJTDpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaWQ6c3RhdGUuaWR9XHJcbiAgICAgIGNhc2UgTU9WSUVTQllHRU5SRTpcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSxtb3ZpZWJ5Z2VucmU6IGFjdGlvbi5tb3ZpZWJ5Z2VucmUsIHRvdGFsUGFnZXNnOmFjdGlvbi50b3RhbFBhZ2VzZ31cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfTtcclxuICBleHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgLy8gQ3JlYXRlIHN0b3JlXHJcbiAgICBjb25zdCBzdG9yZSA9Y3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcbiAgXHJcbiAgICAvLyBSZXR1cm4gc3RvcmVcclxuICAgIHJldHVybiBzdG9yZTtcclxuICB9O1xyXG4gIFxyXG4gIC8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG4gIGV4cG9ydCBjb25zdCBzdG9yZVdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogZmFsc2UgfSk7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogMTAwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgY29sb3I6cmdiKDAsMCwwKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOCwgMTgpO1xyXG4gIG1heC1oZWlnaHQ6MTAwdnc7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQxMjk1YSAwJSwgIzJmMDc0MyAxMDAlKTtcclxuYDtcclxuLy9yZ2JhKDI0MywyNDMsNzIsMSkgMCUsIHJnYmEoNjUsMTcwLDExMSwwLjQzKSAxMDAlKVxyXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gIHdoaXRlLXNwYWNlOndyYXA7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUb3BiYXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMDAwIDAlLCAjNDM0MzQzIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQXVkaW9QbGF5ZXIgPSBzdHlsZWQuYXVkaW9gXHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDM0MztcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MzQzNDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDIwY2g7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICB9XHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4O1xyXG4gIHdpZHRoOiAxMmNoO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAxLjQzNzVlbTtcclxuICBtYXJnaW46IDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDIwY2g7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQudGl0bGVgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwNzVlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNTZweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWF4LXdpZHRoOjI6cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMXJlbTtcclxuICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsIDAuNyk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG4gIGNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuNyk7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVxyXG4gICk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gIG1heC1oZWlnaHQ6MjByZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogIHNjYWxlKDEuMDUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTNweCA0cHggIzAwMDAwMDtcclxuICB9XHJcbiAgdHJhbnNpdGlvbjphbGwgMC40cyAwcyBlYXNlO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTW92aWVQb3N0ZXIgPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOjEwcmVtO1xyXG4gIGhlaWdodDoxNXJlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmllUG9zdGVyRGV0YWlsID0gc3R5bGVkLmltZ2BcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDoyMHJlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXgtd2lkdGg6IDMwcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vdmllQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6MzVyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmllQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTFweDtcclxuICBtYXJnaW46IDBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmllVGl0bGUgPSBzdHlsZWQudGl0bGVgXHJcbmRpc3BsYXk6aW5saW5lO1xyXG5jb2xvcjp3aGl0ZTtcclxuZm9udC1zaXplOjJyZW07XHJcbnBhZGRpbmc6MTBweDtcclxucGFkZGluZy1sZWZ0OjBweDtcclxuZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6Ym9sZDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmllU2lub3BzaXMgPSBzdHlsZWQucGBcclxuY29sb3I6d2hpdGU7XHJcbmZvbnQtc2l6ZToxcmVtO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTW92aWVWb3RlQXZhcmFnZSA9IHN0eWxlZC5zcGFuYFxyXG4gZGlzcGxheTppbmxpbmU7XHJcbiBjb2xvcjp3aGl0ZTtcclxuIHBhZGRpbmc6IDEwcHg7XHJcbiBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gZm9udC1zaXplOjEuNXJlbTtcclxuIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiBmb250LXdlaWdodDpib2xkO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTW92aWVHZW5yZSA9IHN0eWxlZC5kaXYgYFxyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcywgYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIG91dGxpbmU6IDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBgO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBDYXN0Q29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XHJcbiAgbWFyZ2luOjNweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVxyXG4gICk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXgtd2lkdGg6OHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogIHNjYWxlKDEuMDEpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTNweCA0cHggIzAwMDAwMDtcclxuICB9XHJcbiAgdHJhbnNpdGlvbjphbGwgMC40cyAwcyBlYXNlO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FzdENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgZGlzcGxheTppbmxpbmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhc3RQb3N0ZXIgPSBzdHlsZWQuaW1nYFxyXG4gIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgd2lkdGg6OHJlbTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhc3ROYW1lID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBtYXgtd2lkdGg6MjpyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgIFxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCAjMjMyNTI2LCAjNDE0MzQ1KTtcclxuICBvdXRsaW5lOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyODU3ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDBweDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE1MGRlZywgIzQzNDM0MywgIzAwMDAwMCk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEEgPSBzdHlsZWQuYWBcclxuICBjb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDEwNSwgMTUzLCAyMzIpO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTIzLCA0NTYsIDIzMSk7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgTnVtYmVyQm94ID0gc3R5bGVkLmxhYmVsYFxyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICBib3JkZXI6MXB4O1xyXG4gIGJvcmRlci1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1KTtcclxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVGV4dGxhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYigxMDUsIDE1MywgMjMyKTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb2xvcjogcmdiKDEyMywgNDU2LCAyMzEpO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sdW1uLWdhcDogM3B4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246anVzdGlmeVxyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckNvbHVtbiA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJFbGVtZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJMYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBmb250LXNpemU6MTJweDtcclxuICBcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgRmlsdGVyQ2hlY2tCb3ggPSBzdHlsZWQuaW5wdXQuYXR0cnMoeyB0eXBlOiAnY2hlY2tib3gnIH0pYFxyXG4gIHdpZHRoOiAxN3B4O1xyXG4gIGhlaWdodDoxN3B4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG59XHJcbmA7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJzdG9yZVdyYXBwZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eCIsIkdFVF9NT1ZJRV9QT1BVTEFSIiwiR0VUX01PVklFX0RFVEFJTCIsIkdFVF9NT1ZJRV9HRU5SRSIsIlNFVF9JRF9ERVRBSUwiLCJNT1ZJRVNCWUdFTlJFIiwiaW5pdGlhbFN0YXRlIiwibW92aWVsaXN0IiwibW92aWVkZXRhaWwiLCJ0b3RhbFBhZ2VzIiwidG90YWxQYWdlc2ciLCJtb3ZpZWdlbnJlIiwiaWQiLCJtb3ZpZWJ5Z2VucmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsInRodW5rIiwibWFrZVN0b3JlIiwic3RvcmUiLCJkZWJ1ZyIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkJveCIsIlNlY3Rpb24iLCJHcmlkIiwiTGlzdCIsInVsIiwiTGlzdEl0ZW0iLCJsaSIsIlRvcGJhciIsImhlYWRlciIsIkF1ZGlvUGxheWVyIiwiYXVkaW8iLCJTZWFyY2hDb250YWluZXIiLCJTZWFyY2hJbnB1dCIsImlucHV0IiwiVGl0bGUiLCJ0aXRsZSIsIk1lbnUiLCJTdWJUaXRsZSIsIkxhYmVsIiwibGFiZWwiLCJUYWciLCJDYXJkQ29udGFpbmVyIiwiQ2FyZENvbnRlbnQiLCJNb3ZpZVBvc3RlciIsImltZyIsIk1vdmllUG9zdGVyRGV0YWlsIiwiTW92aWVDb250YWluZXIiLCJNb3ZpZUNvbnRlbnQiLCJNb3ZpZVRpdGxlIiwiTW92aWVTaW5vcHNpcyIsInAiLCJNb3ZpZVZvdGVBdmFyYWdlIiwic3BhbiIsIk1vdmllR2VucmUiLCJDYXN0Q29udGFpbmVyIiwiQ2FzdENvbnRlbnQiLCJDYXN0UG9zdGVyIiwiQ2FzdE5hbWUiLCJCdXR0b24iLCJidXR0b24iLCJBIiwiYSIsIk51bWJlckJveCIsIlRleHRsYWJlbCIsIkZpbHRlckNvbnRhaW5lciIsIkZpbHRlckNvbHVtbiIsIkZpbHRlckVsZW1lbnQiLCJGaWx0ZXJMYWJlbCIsIkZpbHRlckNoZWNrQm94IiwiYXR0cnMiXSwic291cmNlUm9vdCI6IiJ9