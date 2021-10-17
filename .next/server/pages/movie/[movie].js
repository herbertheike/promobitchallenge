"use strict";
(() => {
var exports = {};
exports.id = "pages/movie/[movie]";
exports.ids = ["pages/movie/[movie]"];
exports.modules = {

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain"
  }
};
const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:8010/proxy",
  https: config
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ "./src/pages/movie/[movie].js":
/*!************************************!*\
  !*** ./src/pages/movie/[movie].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/style */ "./src/styles/style.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action */ "./src/redux/action.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.SearchContainer, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.SearchInput, {
              type: "text",
              placeholder: "Buscar",
              readOnly: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
              lineNumber: 44,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              children: "Adipisicing id irure sunt veniam occaecat culpa ea ipsum cillum magna fugiat. Cupidatat excepteur fugiat velit cupidatat culpa sunt minim est culpa. Ut et adipisicing et consectetur incididunt anim aliqua excepteur excepteur quis culpa. Ullamco cupidatat minim dolor minim aute adipisicing elit ipsum aliquip. Id tempor quis reprehenderit ut sunt reprehenderit ullamco mollit pariatur deserunt dolor esse. Eu ad sit reprehenderit nostrud aliquip quis laboris."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_style__WEBPACK_IMPORTED_MODULE_1__.MoviePosterDetail, {
            src: "https://lumiere-a.akamaihd.net/v1/images/image_a89e70e8.jpeg?region=0%2C0%2C540%2C810"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, {
  getDetail: _redux_action__WEBPACK_IMPORTED_MODULE_4__.getDetail
})((0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(movie)));

/***/ }),

/***/ "./src/redux/action.js":
/*!*****************************!*\
  !*** ./src/redux/action.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getDetail": () => (/* binding */ getDetail),
/* harmony export */   "getGenre": () => (/* binding */ getGenre),
/* harmony export */   "movieByGenre": () => (/* binding */ movieByGenre),
/* harmony export */   "movieGenre": () => (/* binding */ movieGenre),
/* harmony export */   "setGenre": () => (/* binding */ setGenre),
/* harmony export */   "removeGenre": () => (/* binding */ removeGenre)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/index */ "./src/api/index.js");


function getData(page) {
  return async function (dispatch) {
    return await _api_index__WEBPACK_IMPORTED_MODULE_1__.default.get("/movie/popular?api_key=" + api_key + "&language=pt-BR&page=" + page + "&region=BR", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }).then(response => {
      dispatch(getDataSuccess(response.data));
    });
  };
}

const getDataSuccess = data => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_POPULAR,
    movielist: data,
    totalPages: data.total_pages
  };
};

function getDetail(movieid) {
  return async function (dispatch) {
    return await _api_index__WEBPACK_IMPORTED_MODULE_1__.default.get("/movie/" + movieid + "?api_key=" + api_key + "&language=pt-BR&with_genres=28", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }).then(response => {
      // console.log(response)
      dispatch(getMovieDetail(response.data));
    });
  };
}

const getMovieDetail = data => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_DETAIL,
    moviedetail: data
  };
};

function getGenre() {
  return async function (dispatch) {
    return await _api_index__WEBPACK_IMPORTED_MODULE_1__.default.get("genre/movie/list?api_key=" + api_key + "&language=pt-BR", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }).then(response => {
      dispatch(getGenreSuccess(response.data));
    });
  };
}

const getGenreSuccess = data => {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_MOVIE_GENRE,
    moviegenre: data
  };
};

function movieByGenre(id) {
  console.log(id);
  return async function (dispatch) {
    return await _api_index__WEBPACK_IMPORTED_MODULE_1__.default.get("discover/movie?api_key=" + api_key + "&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + id, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }).then(response => {
      dispatch(movieGenre(response.data));
    });
  };
}
function movieGenre(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.MOVIESBYGENRE,
    movielist: data,
    totalPages: data.total_pages
  };
}
function setGenre(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.SET_GENRE,
    id: id
  };
}
function removeGenre(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.REMOVE_GENRE,
    id: id
  };
}
const api_key = "95fd72b0a390903e28731f934a0b094e";

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/styles/style.js":
/*!*****************************!*\
  !*** ./src/styles/style.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/movie/[movie].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBVUEsTUFBTVEsS0FBSyxHQUFHUix5RUFBSDtBQUFBO0FBQUE7QUFBQSwyU0FBWDtBQWlCQSxNQUFNVSxHQUFHLEdBQUdWLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDRJQUFUO0FBUUEsTUFBTVcsYUFBYSxHQUFHWCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxrUkFBbkI7QUFjQSxNQUFNWSxXQUFXLEdBQUdaLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9FQUFqQjtBQU1BLE1BQU1hLFdBQVcsR0FBR2IsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUlBQWpCO0FBU0EsTUFBTTNDLGlCQUFpQixHQUFHMkMsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUlBQXZCO0FBU0EsTUFBTWUsTUFBTSxHQUFHZiwwRUFBSDtBQUFBO0FBQUE7QUFBQSxzakJBQVo7QUE2QkEsTUFBTWlCLENBQUMsR0FBR2pCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdKQUFQO0FBV0EsTUFBTW1CLGVBQWUsR0FBR25CLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFJQUFyQjtBQVVBLE1BQU1vQixZQUFZLEdBQUdwQix1RUFBSDtBQUFBO0FBQUE7QUFBQSxrREFBbEI7QUFLQSxNQUFNcUIsYUFBYSxHQUFHckIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsOERBQW5CO0FBS0EsTUFBTXNCLFdBQVcsR0FBR3RCLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFqQjtBQUtBLE1BQU11QixjQUFjLEdBQUd2QixvRUFBQSxDQUFtQjtBQUFFakIsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBbkIsQ0FBSDtBQUFBO0FBQUE7QUFBQSwrQkFBcEI7Ozs7Ozs7Ozs7QUM3UVA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvYXBpL2luZGV4LmpzIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlLy4vc3JjL3BhZ2VzL21vdmllL1ttb3ZpZV0uanMiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvLi9zcmMvcmVkdXgvYWN0aW9uLmpzIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlLy4vc3JjL3N0eWxlcy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Byb21vYml0Y2hhbGxlbmdlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vcHJvbW9iaXRjaGFsbGVuZ2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wcm9tb2JpdGNoYWxsZW5nZS9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L3BsYWluXCIsXHJcbiAgfSxcclxufTtcclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAxMC9wcm94eVwiLFxyXG4gIGh0dHBzOiBjb25maWcsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBCb3gsXHJcbiAgU2VjdGlvbixcclxuICBHcmlkLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgVG9wYmFyLFxyXG4gIEF1ZGlvUGxheWVyLFxyXG4gIFRpdGxlLFxyXG4gIE1lbnUsXHJcbiAgU2VhcmNoQ29udGFpbmVyLFxyXG4gIFNlYXJjaElucHV0LFxyXG4gIFN1YlRpdGxlLFxyXG4gIE1vdmllUG9zdGVyRGV0YWlsLFxyXG5cclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxlXCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgZ2V0RGV0YWlsIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvblwiXHJcblxyXG5jbGFzcyBtb3ZpZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8VG9wYmFyPlxyXG4gICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgIDxUaXRsZT57dGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubW92aWV9PC9UaXRsZT5cclxuXHJcbiAgICAgICAgICAgIDxTZWFyY2hDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhclwiXHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2VhcmNoQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvVG9wYmFyPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPFNlY3Rpb24gc3R5bGU9e3sgYWxpZ25Db250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+bm9tZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBBZGlwaXNpY2luZyBpZCBpcnVyZSBzdW50IHZlbmlhbSBvY2NhZWNhdCBjdWxwYSBlYSBpcHN1bSBjaWxsdW0gbWFnbmEgZnVnaWF0LiBDdXBpZGF0YXQgZXhjZXB0ZXVyIGZ1Z2lhdCB2ZWxpdFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cGlkYXRhdCBjdWxwYSBzdW50IG1pbmltIGVzdCBjdWxwYS4gVXQgZXQgYWRpcGlzaWNpbmcgZXQgY29uc2VjdGV0dXIgaW5jaWRpZHVudCBhbmltIGFsaXF1YSBleGNlcHRldXIgZXhjZXB0ZXVyIHF1aXMgY3VscGEuXHJcbiAgICAgICAgICAgICAgICAgICAgVWxsYW1jbyBjdXBpZGF0YXQgbWluaW0gZG9sb3IgbWluaW0gYXV0ZSBhZGlwaXNpY2luZyBlbGl0IGlwc3VtIGFsaXF1aXAuIElkIHRlbXBvciBxdWlzIHJlcHJlaGVuZGVyaXQgdXQgc3VudCByZXByZWhlbmRlcml0IHVsbGFtY29cclxuICAgICAgICAgICAgICAgICAgICBtb2xsaXQgcGFyaWF0dXIgZGVzZXJ1bnQgZG9sb3IgZXNzZS4gRXUgYWQgc2l0IHJlcHJlaGVuZGVyaXQgbm9zdHJ1ZCBhbGlxdWlwIHF1aXMgbGFib3Jpcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8TW92aWVQb3N0ZXJEZXRhaWwgc3JjPXtcImh0dHBzOi8vbHVtaWVyZS1hLmFrYW1haWhkLm5ldC92MS9pbWFnZXMvaW1hZ2VfYTg5ZTcwZTguanBlZz9yZWdpb249MCUyQzAlMkM1NDAlMkM4MTBcIn0vPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCx7Z2V0RGV0YWlsfSkod2l0aFJvdXRlcihtb3ZpZSkpO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgR0VUX01PVklFX1BPUFVMQVIsXHJcbiAgICBHRVRfTU9WSUVfREVUQUlMLFxyXG4gICAgR0VUX01PVklFX0dFTlJFLFxyXG4gICAgU0VUX0dFTlJFLFxyXG4gICAgUkVNT1ZFX0dFTlJFLFxyXG4gICAgTU9WSUVTQllHRU5SRVxyXG4gIH0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuICBpbXBvcnQgYXBpIGZyb20gXCIuLi9hcGkvaW5kZXhcIjtcclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShwYWdlKSB7XHJcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBhcGlcclxuICAgICAgICAuZ2V0KFwiL21vdmllL3BvcHVsYXI/YXBpX2tleT1cIithcGlfa2V5K1wiJmxhbmd1YWdlPXB0LUJSJnBhZ2U9XCIrcGFnZStcIiZyZWdpb249QlJcIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChnZXREYXRhU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGF0YVN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogR0VUX01PVklFX1BPUFVMQVIsXHJcbiAgICAgIG1vdmllbGlzdDogZGF0YSxcclxuICAgICAgdG90YWxQYWdlczpkYXRhLnRvdGFsX3BhZ2VzXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREZXRhaWwobW92aWVpZCkge1xyXG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgYXBpXHJcbiAgICAgICAgLmdldChcIi9tb3ZpZS9cIittb3ZpZWlkK1wiP2FwaV9rZXk9XCIrYXBpX2tleStcIiZsYW5ndWFnZT1wdC1CUiZ3aXRoX2dlbnJlcz0yOFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICBkaXNwYXRjaChnZXRNb3ZpZURldGFpbChyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TW92aWVEZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogR0VUX01PVklFX0RFVEFJTCxcclxuICAgICAgbW92aWVkZXRhaWw6IGRhdGEsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRHZW5yZSgpIHtcclxuICAgIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGFwaVxyXG4gICAgICAgIC5nZXQoXCJnZW5yZS9tb3ZpZS9saXN0P2FwaV9rZXk9XCIrYXBpX2tleStcIiZsYW5ndWFnZT1wdC1CUlwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKGdldEdlbnJlU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0R2VucmVTdWNjZXNzPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogR0VUX01PVklFX0dFTlJFLFxyXG4gICAgICBtb3ZpZWdlbnJlOiBkYXRhXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBtb3ZpZUJ5R2VucmUoaWQpe1xyXG4gICAgY29uc29sZS5sb2coaWQpXHJcbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBhcGlcclxuICAgICAgICAuZ2V0KFwiZGlzY292ZXIvbW92aWU/YXBpX2tleT1cIlxyXG4gICAgICAgICthcGlfa2V5K1xyXG4gICAgICAgIFwiJmxhbmd1YWdlPXB0LUJSJnNvcnRfYnk9cG9wdWxhcml0eS5kZXNjJmluY2x1ZGVfYWR1bHQ9ZmFsc2UmaW5jbHVkZV92aWRlbz1mYWxzZSZwYWdlPTEmd2l0aF9nZW5yZXM9XCJcclxuICAgICAgICAraWQsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2gobW92aWVHZW5yZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG1vdmllR2VucmUoZGF0YSl7XHJcbiAgICByZXR1cm57XHJcbiAgICAgIHR5cGU6TU9WSUVTQllHRU5SRSxcclxuICAgICAgbW92aWVsaXN0OmRhdGEsXHJcbiAgICAgIHRvdGFsUGFnZXM6ZGF0YS50b3RhbF9wYWdlc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEdlbnJlKGlkKXtcclxuICAgIHJldHVybntcclxuICAgICAgdHlwZTpTRVRfR0VOUkUsXHJcbiAgICAgIGlkOmlkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlR2VucmUoaWQpe1xyXG4gICAgcmV0dXJue1xyXG4gICAgICB0eXBlOlJFTU9WRV9HRU5SRSxcclxuICAgICAgaWQ6aWRcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdCBhcGlfa2V5ID0gXCI5NWZkNzJiMGEzOTA5MDNlMjg3MzFmOTM0YTBiMDk0ZVwiIiwiZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRV9QT1BVTEFSID0gXCJHRVRfTU9WSUVfUE9QVUxBUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX01PVklFX0RFVEFJTCA9IFwiR0VUX01PVklFX0RFVEFJTFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX01PVklFX0dFTlJFID0gXCJHRVRfTU9WSUVfR0VOUkVcIjtcclxuZXhwb3J0IGNvbnN0IFNFVF9HRU5SRSA9IFwiU0VUX0dFTlJFXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfR0VOUkUgPSBcIlJFTU9WRV9HRU5SRVwiO1xyXG5leHBvcnQgY29uc3QgTU9WSUVTQllHRU5SRSA9IFwiTU9WSUVTQllHRU5SRVwiOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICB3aWR0aDogMTAwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTgsIDE4KTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDEyOTVhIDAlLCAjMmYwNzQzIDEwMCUpO1xyXG5gO1xyXG4vL3JnYmEoMjQzLDI0Myw3MiwxKSAwJSwgcmdiYSg2NSwxNzAsMTExLDAuNDMpIDEwMCUpXHJcbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUb3BiYXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMDAwIDAlLCAjNDM0MzQzIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQXVkaW9QbGF5ZXIgPSBzdHlsZWQuYXVkaW9gXHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMHB4IDE2cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDM0MztcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MzQzNDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDIwY2g7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICB9XHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4O1xyXG4gIHdpZHRoOiAxMmNoO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgaGVpZ2h0OiAxLjQzNzVlbTtcclxuICBtYXJnaW46IDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDIwY2g7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQudGl0bGVgXHJcbiAgICBkaXNwbGF5OmNvbnRlbnRzO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDc1ZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZy1sZWZ0IDFyZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIFxyXG5gO1xyXG5leHBvcnQgY29uc3QgTWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIHRleHQtYWxpZ246anVzdGlmeTtcclxuICBjb2xvcjogcmdiYSg0OCwgNDgsIDQ4LCAwLjcpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMS43NTtcclxuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjcpO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcclxuICApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDExcHg7XHJcbiAgZmxleDogMSAwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IE1vdmllUG9zdGVyID0gc3R5bGVkLmltZ2BcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE1cmVtO1xyXG4gIHdpZHRoOjEwcmVtO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1heC13aWR0aDogMjVyZW07XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBNb3ZpZVBvc3RlckRldGFpbCA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXJlbTtcclxuICB3aWR0aDoyMHJlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXgtd2lkdGg6IDMwcmVtO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICMyMzI1MjYsICM0MTQzNDUpO1xyXG4gIG91dGxpbmU6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDI4NTdlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDhyZW07XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjNDM0MzQzLCAjMDAwMDAwKTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQSA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYigxMDUsIDE1MywgMjMyKTtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb2xvcjogcmdiKDEyMywgNDU2LCAyMzEpO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sdW1uLWdhcDogMzBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnlcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG5gO1xyXG5leHBvcnQgY29uc3QgRmlsdGVyRWxlbWVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgRmlsdGVyTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEZpbHRlckNoZWNrQm94ID0gc3R5bGVkLmlucHV0LmF0dHJzKHsgdHlwZTogJ2NoZWNrYm94JyB9KWBcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJodHRwcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiQm94IiwiU2VjdGlvbiIsIkdyaWQiLCJMaXN0IiwiTGlzdEl0ZW0iLCJUb3BiYXIiLCJBdWRpb1BsYXllciIsIlRpdGxlIiwiTWVudSIsIlNlYXJjaENvbnRhaW5lciIsIlNlYXJjaElucHV0IiwiU3ViVGl0bGUiLCJNb3ZpZVBvc3RlckRldGFpbCIsIndpdGhSb3V0ZXIiLCJjb25uZWN0IiwiZ2V0RGV0YWlsIiwibW92aWUiLCJyZW5kZXIiLCJwcm9wcyIsInJvdXRlciIsInF1ZXJ5IiwiYWxpZ25Db250ZW50IiwiR0VUX01PVklFX1BPUFVMQVIiLCJHRVRfTU9WSUVfREVUQUlMIiwiR0VUX01PVklFX0dFTlJFIiwiU0VUX0dFTlJFIiwiUkVNT1ZFX0dFTlJFIiwiTU9WSUVTQllHRU5SRSIsImdldERhdGEiLCJwYWdlIiwiZGlzcGF0Y2giLCJnZXQiLCJhcGlfa2V5IiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwiZ2V0RGF0YVN1Y2Nlc3MiLCJkYXRhIiwidHlwZSIsIm1vdmllbGlzdCIsInRvdGFsUGFnZXMiLCJ0b3RhbF9wYWdlcyIsIm1vdmllaWQiLCJnZXRNb3ZpZURldGFpbCIsIm1vdmllZGV0YWlsIiwiZ2V0R2VucmUiLCJnZXRHZW5yZVN1Y2Nlc3MiLCJtb3ZpZWdlbnJlIiwibW92aWVCeUdlbnJlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwibW92aWVHZW5yZSIsInNldEdlbnJlIiwicmVtb3ZlR2VucmUiLCJzdHlsZWQiLCJkaXYiLCJ1bCIsImxpIiwiaGVhZGVyIiwiYXVkaW8iLCJpbnB1dCIsInRpdGxlIiwiTGFiZWwiLCJsYWJlbCIsIlRhZyIsIkNhcmRDb250YWluZXIiLCJDYXJkQ29udGVudCIsIk1vdmllUG9zdGVyIiwiaW1nIiwiQnV0dG9uIiwiYnV0dG9uIiwiQSIsImEiLCJGaWx0ZXJDb250YWluZXIiLCJGaWx0ZXJDb2x1bW4iLCJGaWx0ZXJFbGVtZW50IiwiRmlsdGVyTGFiZWwiLCJGaWx0ZXJDaGVja0JveCIsImF0dHJzIl0sInNvdXJjZVJvb3QiOiIifQ==