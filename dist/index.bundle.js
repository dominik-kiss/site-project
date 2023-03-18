"use strict";
(self["webpackChunksite_project"] = self["webpackChunksite_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./media/restaurant1.jpg */ "./src/media/restaurant1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./media/restaurant2.jpg */ "./src/media/restaurant2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./media/restaurant3.jpg */ "./src/media/restaurant3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./media/restaurant4.jpg */ "./src/media/restaurant4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./media/thumbnail2.jpg */ "./src/media/thumbnail2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables */\r\n\r\n:root {\r\n    --ff-main: \"Open Sans\";\r\n\r\n    --light1: #fcfefe;\r\n    --light2: #6f6c69;\r\n    --dark1: #233142;\r\n    --reservation-button-clr: #1293db;\r\n\r\n    --font-small: 18px;\r\n    --font-medium: 24px;\r\n    --font-large: 40px;\r\n    --font-xtra-large: 60px;\r\n\r\n    --front: 2;\r\n    --middle: 1;\r\n\r\n    --medium-weight: 500;\r\n    --high-weight: 700;\r\n\r\n    --border-color: #222;\r\n    --background-light: rgba(0, 0, 0, 0.6);\r\n\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* General */\r\n\r\n#content {\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    flex-direction: column;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 0;  /* Remove scrollbar space */\r\n}\r\n\r\n.centered-flex {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/* Header and top carousel */\r\n\r\n#header {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    padding: 30px;\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-medium);\r\n    z-index: var(--front);\r\n    font-weight: var(--medium-weight);\r\n    /* background-color: rgba(255, 255, 255, 0.4);\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px); */\r\n}\r\n\r\n.dark-header-tabs {\r\n    color: var(--dark1);\r\n}\r\n\r\n.light-header-tabs {\r\n    color: var(--light1);\r\n}\r\n\r\n\r\n#header-tabs {\r\n    flex-direction: row;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    gap: 20px;\r\n}\r\n\r\n#header-tabs li:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#logo-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    font-family: var(--ff-main);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n    background-color: transparent;\r\n    top: 250px;\r\n    gap: 50px;\r\n}\r\n\r\n#logo {\r\n    height: 160px;\r\n}\r\n\r\n#logo-text {\r\n    font-size: var(--font-large);\r\n}\r\n\r\n#reservation-button {\r\n    font-size: var(--font-medium);\r\n    background-color: var(--reservation-button-clr);\r\n    padding: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n#reservation-button:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#carousel-dots {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    align-items: center;\r\n    font-family: var(--ff-main);\r\n    color: black;\r\n    z-index: var(--front);\r\n    top: 850px;\r\n    gap: 10px;\r\n    font-size: var(--font-xtra-large);\r\n}\r\n\r\n#carousel-dots:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#slider {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    overflow: hidden;\r\n    max-height: 940px;\r\n    width: 100%;\r\n    height: 940px;\r\n}\r\n  \r\n.slide {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: all 1s;\r\n    transition-timing-function: cubic-bezier(0, 0.10, 0.11, 1);\r\n}\r\n\r\n#pic1 {\r\n    z-index: var(--middle);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n#pic2 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n#pic3 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n#pic4 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n/* Top content */\r\n\r\n#top-content {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    flex-direction: row;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.textbox {\r\n    flex-direction: column;\r\n    width: 40vh;\r\n    height: 40vh;\r\n    padding: 30px;\r\n    left: 40px;\r\n    backdrop-filter: blur(4px);\r\n    background-image: linear-gradient(rgba(44,62,80,0.3), rgba(44,62,80,0.3));\r\n    animation: fadeIn 1s;\r\n    border: 1px solid var(--border-color);\r\n    color: var(--light1);\r\n    gap: 20px;\r\n    font-size: var(--font-small);\r\n    overflow: hidden;\r\n}\r\n\r\n.title {\r\n    font-size: var(--font-medium);\r\n}\r\n\r\n/* Middle content */\r\n\r\n#middle-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--light1);\r\n    width: 50%;\r\n    height: 850px;\r\n    align-items: center;\r\n    color: var(--light2);\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n}\r\n\r\n#middle-top {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n#middle-bottom {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n}\r\n\r\n#chef-img {\r\n    width: 600px;\r\n}\r\n\r\n#chef-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n/*Animation*/\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Variables */\r\n\r\n:root {\r\n    --ff-main: \"Open Sans\";\r\n\r\n    --light1: #fcfefe;\r\n    --light2: #6f6c69;\r\n    --dark1: #233142;\r\n    --reservation-button-clr: #1293db;\r\n\r\n    --font-small: 18px;\r\n    --font-medium: 24px;\r\n    --font-large: 40px;\r\n    --font-xtra-large: 60px;\r\n\r\n    --front: 2;\r\n    --middle: 1;\r\n\r\n    --medium-weight: 500;\r\n    --high-weight: 700;\r\n\r\n    --border-color: #222;\r\n    --background-light: rgba(0, 0, 0, 0.6);\r\n\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* General */\r\n\r\n#content {\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    flex-direction: column;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 0;  /* Remove scrollbar space */\r\n}\r\n\r\n.centered-flex {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/* Header and top carousel */\r\n\r\n#header {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    padding: 30px;\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-medium);\r\n    z-index: var(--front);\r\n    font-weight: var(--medium-weight);\r\n    /* background-color: rgba(255, 255, 255, 0.4);\r\n    -webkit-backdrop-filter: blur(4px);\r\n    backdrop-filter: blur(4px); */\r\n}\r\n\r\n.dark-header-tabs {\r\n    color: var(--dark1);\r\n}\r\n\r\n.light-header-tabs {\r\n    color: var(--light1);\r\n}\r\n\r\n\r\n#header-tabs {\r\n    flex-direction: row;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    gap: 20px;\r\n}\r\n\r\n#header-tabs li:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#logo-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    font-family: var(--ff-main);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n    background-color: transparent;\r\n    top: 250px;\r\n    gap: 50px;\r\n}\r\n\r\n#logo {\r\n    height: 160px;\r\n}\r\n\r\n#logo-text {\r\n    font-size: var(--font-large);\r\n}\r\n\r\n#reservation-button {\r\n    font-size: var(--font-medium);\r\n    background-color: var(--reservation-button-clr);\r\n    padding: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n#reservation-button:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#carousel-dots {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    align-items: center;\r\n    font-family: var(--ff-main);\r\n    color: black;\r\n    z-index: var(--front);\r\n    top: 850px;\r\n    gap: 10px;\r\n    font-size: var(--font-xtra-large);\r\n}\r\n\r\n#carousel-dots:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#slider {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    overflow: hidden;\r\n    max-height: 940px;\r\n    width: 100%;\r\n    height: 940px;\r\n}\r\n  \r\n.slide {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: all 1s;\r\n    transition-timing-function: cubic-bezier(0, 0.10, 0.11, 1);\r\n}\r\n\r\n#pic1 {\r\n    z-index: var(--middle);\r\n    background-image: url(\"./media/restaurant1.jpg\");\r\n}\r\n\r\n#pic2 {\r\n    background-image: url(\"./media/restaurant2.jpg\");\r\n}\r\n\r\n#pic3 {\r\n    background-image: url(\"./media/restaurant3.jpg\");\r\n}\r\n\r\n#pic4 {\r\n    background-image: url(\"./media/restaurant4.jpg\");\r\n}\r\n\r\n/* Top content */\r\n\r\n#top-content {\r\n    background-image: url(\"./media/thumbnail2.jpg\");\r\n    flex-direction: row;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.textbox {\r\n    flex-direction: column;\r\n    width: 40vh;\r\n    height: 40vh;\r\n    padding: 30px;\r\n    left: 40px;\r\n    backdrop-filter: blur(4px);\r\n    background-image: linear-gradient(rgba(44,62,80,0.3), rgba(44,62,80,0.3));\r\n    animation: fadeIn 1s;\r\n    border: 1px solid var(--border-color);\r\n    color: var(--light1);\r\n    gap: 20px;\r\n    font-size: var(--font-small);\r\n    overflow: hidden;\r\n}\r\n\r\n.title {\r\n    font-size: var(--font-medium);\r\n}\r\n\r\n/* Middle content */\r\n\r\n#middle-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--light1);\r\n    width: 50%;\r\n    height: 850px;\r\n    align-items: center;\r\n    color: var(--light2);\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n}\r\n\r\n#middle-top {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n#middle-bottom {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n}\r\n\r\n#chef-img {\r\n    width: 600px;\r\n}\r\n\r\n#chef-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n/*Animation*/\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUsPage)
/* harmony export */ });
/* harmony import */ var _media_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/logo.png */ "./src/media/logo.png");
/* harmony import */ var _media_chef_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/chef.PNG */ "./src/media/chef.PNG");



function aboutUsPage() {

  const navigationOptions = ["Home", "About Us", "Menu", "Contact Us"];
  const textBoxTitles = ["Our history", "Our mission"];
  const textBoxContent = ["Sed commodo consequat sem, nec scelerisque arcu malesuada vel. Maecenas scelerisque urna libero, a convallis nibh vehicula sit amet. Nam at viverra dolor. Proin feugiat molestie viverra. Praesent neque libero, porttitor et neque vel, placerat blandit felis.", "Sed lobortis lacus sit amet velit bibendum feugiat. Fusce pulvinar arcu consectetur felis convallis sagittis. Donec vitae interdum enim, et commodo orci. Vestibulum volutpat, metus fringilla hendrerit accumsan, erat lorem posuere lacus, eget rutrum elit orci nec odio.", "Mauris bibendum, enim sit amet pulvinar pulvinar, enim mi vehicula odio, sit amet porta nisi neque vitae dolor. Praesent augue arcu, interdum sed mi vel, imperdiet porta nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique at magna ac cursus. Phasellus lectus urna, semper id turpis sed, ornare finibus libero. Sed urna dui, auctor sit amet ultrices eget, dapibus eget libero.", "Quisque scelerisque condimentum odio non porta. Proin sed leo condimentum nibh eleifend mollis vel vitae magna. Donec suscipit semper lorem, eu molestie odio auctor sed."];

  // Cache the main "content" element, which will contain everything on the page
  const content = document.querySelector("#content");

  /******** HEADER ***********/

  // Create the main "header" element
  let header = document.createElement("div");
  header.setAttribute("id", "header");
  header.classList.add("centered-flex");
  header.classList.add("light-header-tabs");
  content.appendChild(header);

  // Create the "ul" element for the Site Navigation Menu
  let headerTabs = document.createElement("ul");
  headerTabs.setAttribute("id", "header-tabs");
  headerTabs.classList.add("centered-flex");
  header.appendChild(headerTabs);

  // Create list elements of the Site Navigation Menu
  for (let i in navigationOptions) {
    let li = document.createElement("li");
    li.innerHTML = navigationOptions[i];
    li.classList.add("navi");
    li.setAttribute("id", navigationOptions[i].toLowerCase().replace(" ", "-"));
    headerTabs.appendChild(li);
  }

  /******** Top content ***********/

  let topContent = document.createElement("div");
  topContent.setAttribute("id", "top-content");
  topContent.classList.add("centered-flex");
  content.appendChild(topContent);

  let textBoxLeft = document.createElement("div");
  textBoxLeft.setAttribute("id", "text-box-left");
  textBoxLeft.classList.add("textbox");
  textBoxLeft.classList.add("centered-flex");
  topContent.appendChild(textBoxLeft);

  let textBoxRight = document.createElement("div");
  textBoxRight.setAttribute("id", "text-box-right");
  textBoxRight.classList.add("textbox");
  textBoxRight.classList.add("centered-flex");
  topContent.appendChild(textBoxRight);

  for (let i in textBoxTitles) {
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.innerHTML = textBoxTitles[i];
    let containingDiv = (i % 2 == 0) ? textBoxLeft : textBoxRight;
    containingDiv.appendChild(titleDiv);
  }

  for (let i in textBoxContent) {
    let textContentDiv = document.createElement("div");
    textContentDiv.classList.add("text-content");
    textContentDiv.innerHTML = textBoxContent[i];
    let containingDiv = (i % 2 == 0) ? textBoxLeft : textBoxRight;
    containingDiv.appendChild(textContentDiv);
  }

}

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveCarousel": () => (/* binding */ moveCarousel),
/* harmony export */   "setStartingPosition": () => (/* binding */ setStartingPosition)
/* harmony export */ });
function setStartingPosition(slides) {  
    // loop through carousel pictures and set each picture's translateX property to index * 100% 
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });
}

function moveCarousel(images, timer, current = 0) {
    const maxSlides = images.length - 1;
    images.forEach((image, index) => {
        image.style.transform = `translateX(${100 * (index - current)}%)`;
    });
    current = (current !== maxSlides) ? current + 1 : 0;
    setTimeout(moveCarousel, timer, images, timer, current);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageContent */ "./src/pageContent.js");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutUs */ "./src/aboutUs.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel */ "./src/carousel.js");





const firstLoad = (() => {
  let firstDiv = document.createElement("div");
  firstDiv.setAttribute("id", "content");
  firstDiv.classList.add("centered-flex");
  document.body.appendChild(firstDiv);

  siteControl();
})();

function siteControl(tab) {
  switch (tab) {
    case "about-us":
      (0,_aboutUs__WEBPACK_IMPORTED_MODULE_2__["default"])();
      break;
    case "menu":
      break;
    case "contact-us":
    case "reservation-button":
      break;
    default:
      (0,_pageContent__WEBPACK_IMPORTED_MODULE_1__["default"])();
      const slides = document.querySelectorAll(".slide");
      (0,_carousel__WEBPACK_IMPORTED_MODULE_3__.setStartingPosition)(slides);
      (0,_carousel__WEBPACK_IMPORTED_MODULE_3__.moveCarousel)(slides, 7000);
  }
  
  handleTabSwitch();
};

function handleTabSwitch() {
  // Set up event listeners for the site navigation tabs
  const naviTabs = document.querySelectorAll(".navi");
  naviTabs.forEach(tab => tab.addEventListener("click", (event) => {
  // When one of the tabs is clicked...
    // Store the id of the clicked tab for later reference
    let tabClicked = event.target.id;

    // Clear all child nodes from under the "content" div
    document.getElementById("content").textContent = "";

    // Populate the page with the HTML content and styles of the tab that was clicked
    siteControl(tabClicked);
  }));
}

/***/ }),

/***/ "./src/pageContent.js":
/*!****************************!*\
  !*** ./src/pageContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _media_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/logo.png */ "./src/media/logo.png");
/* harmony import */ var _media_chef_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/chef.PNG */ "./src/media/chef.PNG");



function homePage() {

  const navigationOptions = ["Home", "About Us", "Menu", "Contact Us"];
  const middleTextContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sem at ipsum consequat hendrerit quis at tortor. Duis nec dignissim ex.";
  const chefTextContent = ["OUR CHEF", "Randall Rishi", "Phasellus rutrum odio vel mattis semper. Etiam dignissim ante arcu, vel fermentum dolor vulputate vel. Proin facilisis tempus accumsan. Cras sed volutpat arcu. Maecenas ut sollicitudin mauris. Morbi elementum nibh sit amet nibh vestibulum, congue porta massa laoreet. Sed accumsan egestas magna, nec euismod est tincidunt ullamcorper. Cras porta ipsum dapibus, cursus metus nec, venenatis nunc. Proin molestie, lectus a auctor varius, magna nulla pellentesque odio, ac eleifend sapien magna et metus. Aliquam sed augue libero. Fusce eget pulvinar massa, eu fermentum sem. Nam pellentesque, nisi et scelerisque pretium, nisl metus elementum nibh, eu accumsan metus erat eget ante. Donec in vestibulum nisi. Duis vitae felis non mauris scelerisque auctor quis eget dolor. In a dignissim lacus, eu auctor ex."];

  // Cache the main "content" element, which will contain everything on the page
  const content = document.querySelector("#content");

  /******** HEADER ***********/

  // Create the main "header" element
  let header = document.createElement("div");
  header.setAttribute("id", "header");
  header.classList.add("centered-flex");
  header.classList.add("light-header-tabs");
  content.appendChild(header);

  // Create the "ul" element for the Site Navigation Menu
  let headerTabs = document.createElement("ul");
  headerTabs.setAttribute("id", "header-tabs");
  headerTabs.classList.add("centered-flex");
  header.appendChild(headerTabs);

  // Create list elements of the Site Navigation Menu
  for (let i in navigationOptions) {
    let li = document.createElement("li");
    li.innerHTML = navigationOptions[i];
    li.classList.add("navi");
    li.setAttribute("id", navigationOptions[i].toLowerCase().replace(" ", "-"));
    headerTabs.appendChild(li);
  }

  /******** Carousel ***********/

  // Create the main "slider" element
  let slider = document.createElement("div");
  slider.setAttribute("id", "slider");
  content.appendChild(slider);


  // Create the four slides of the carousel with the bg images added
  for (let i = 0; i < 4; i++) {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.setAttribute("id", `pic${i+1}`);
    slider.appendChild(slide);
  }

  /******** Logo container ***********/

  // Create the logo container element
  let logoContainer = document.createElement("div");
  logoContainer.setAttribute("id", "logo-container");
  logoContainer.classList.add("centered-flex");
  content.appendChild(logoContainer);

  // Create the logo element for the logo image
  let logo = document.createElement("img");
  logo.setAttribute("id", "logo");
  logo.src = _media_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  logoContainer.appendChild(logo);

  // Create the logotext element for the "motto"
  let logoText = document.createElement("div");
  logoText.setAttribute("id", "logo-text");
  logoText.innerHTML = "Above the city...";
  logoContainer.appendChild(logoText);

  // Create the reservation button element
  let reservationButton = document.createElement("div");
  reservationButton.setAttribute("id", "reservation-button");
  reservationButton.classList.add("navi");
  reservationButton.innerHTML = "Reservation";
  logoContainer.appendChild(reservationButton);


  /******** Midle content ***********/

  // Create main container for the middle content, and the two containers within

  let middleContent = document.createElement("div");
  middleContent.setAttribute("id", "middle-content");
  content.appendChild(middleContent);

  let middleTop = document.createElement("div");
  middleTop.setAttribute("id", "middle-top");
  middleTop.innerHTML = middleTextContent;
  middleTop.style.textAlign = "center";
  middleContent.appendChild(middleTop);

  let middleBottom = document.createElement("div");
  middleBottom.setAttribute("id", "middle-bottom");
  middleContent.appendChild(middleBottom);


  // Add the "chef" image to the middle content

  let chefImg = document.createElement("img");
  chefImg.setAttribute("id", "chef-img");
  chefImg.src = _media_chef_PNG__WEBPACK_IMPORTED_MODULE_1__;
  middleBottom.appendChild(chefImg);

  // Add the element containing the middle content "chef text" elements

  let chefText = document.createElement("div");
  chefText.setAttribute("id", "chef-text");
  middleBottom.appendChild(chefText);

  for (let i in chefTextContent) {
    let text = document.createElement("div");
    text.setAttribute("id", `text${parseInt(i) + 1}`);
    text.innerHTML = chefTextContent[i];
    chefText.appendChild(text);
  }

  chefText.firstChild.style.fontWeight = "800"

  /******** Footer ***********/

/*   let footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  content.appendChild(footer);


  let copyrightText = document.createElement("div");
  let currentYear = new Date().getFullYear();
  copyrightText.innerHTML = `Copyright © ${currentYear} dominik-kiss`;
  footer.appendChild(copyrightText);

  let gitHubLink = document.createElement("a");
  gitHubLink.href = "https://github.com/dominik-kiss";
  footer.appendChild(gitHubLink);

  let gitHubLogo = document.createElement("i");
  gitHubLogo.classList.add("fab");
  gitHubLogo.classList.add("fa-github");
  gitHubLink.appendChild(gitHubLogo); */

}

/***/ }),

/***/ "./src/media/chef.PNG":
/*!****************************!*\
  !*** ./src/media/chef.PNG ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d675bc0e824ee1f99dd.PNG";

/***/ }),

/***/ "./src/media/logo.png":
/*!****************************!*\
  !*** ./src/media/logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d39815ec70442a6cf2f7.png";

/***/ }),

/***/ "./src/media/restaurant1.jpg":
/*!***********************************!*\
  !*** ./src/media/restaurant1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9990dae84fd1427f8ad.jpg";

/***/ }),

/***/ "./src/media/restaurant2.jpg":
/*!***********************************!*\
  !*** ./src/media/restaurant2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b2758b495d85bab2c07.jpg";

/***/ }),

/***/ "./src/media/restaurant3.jpg":
/*!***********************************!*\
  !*** ./src/media/restaurant3.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71a49fd5b847292f4045.jpg";

/***/ }),

/***/ "./src/media/restaurant4.jpg":
/*!***********************************!*\
  !*** ./src/media/restaurant4.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6053efdca30e0e40d27c.jpg";

/***/ }),

/***/ "./src/media/thumbnail2.jpg":
/*!**********************************!*\
  !*** ./src/media/thumbnail2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8705902c167eefc5d1c.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRG9DO0FBQ0E7QUFDcEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0EsbUNBQW1DLElBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNENBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsYUFBYTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL3NyYy9hYm91dFVzLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vc3JjL3BhZ2VDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21lZGlhL3Jlc3RhdXJhbnQxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vbWVkaWEvcmVzdGF1cmFudDIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9yZXN0YXVyYW50My5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL21lZGlhL3Jlc3RhdXJhbnQ0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vbWVkaWEvdGh1bWJuYWlsMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVmFyaWFibGVzICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWZmLW1haW46IFxcXCJPcGVuIFNhbnNcXFwiO1xcclxcblxcclxcbiAgICAtLWxpZ2h0MTogI2ZjZmVmZTtcXHJcXG4gICAgLS1saWdodDI6ICM2ZjZjNjk7XFxyXFxuICAgIC0tZGFyazE6ICMyMzMxNDI7XFxyXFxuICAgIC0tcmVzZXJ2YXRpb24tYnV0dG9uLWNscjogIzEyOTNkYjtcXHJcXG5cXHJcXG4gICAgLS1mb250LXNtYWxsOiAxOHB4O1xcclxcbiAgICAtLWZvbnQtbWVkaXVtOiAyNHB4O1xcclxcbiAgICAtLWZvbnQtbGFyZ2U6IDQwcHg7XFxyXFxuICAgIC0tZm9udC14dHJhLWxhcmdlOiA2MHB4O1xcclxcblxcclxcbiAgICAtLWZyb250OiAyO1xcclxcbiAgICAtLW1pZGRsZTogMTtcXHJcXG5cXHJcXG4gICAgLS1tZWRpdW0td2VpZ2h0OiA1MDA7XFxyXFxuICAgIC0taGlnaC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHJcXG4gICAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1saWdodDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICB3aWR0aDogMDsgIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkLWZsZXgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgYW5kIHRvcCBjYXJvdXNlbCAqL1xcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLW1lZGl1bS13ZWlnaHQpO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyay1oZWFkZXItdGFicyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrMSk7XFxyXFxufVxcclxcblxcclxcbi5saWdodC1oZWFkZXItdGFicyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jaGVhZGVyLXRhYnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLXRhYnMgbGk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbiNsb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW1haW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQxKTtcXHJcXG4gICAgei1pbmRleDogdmFyKC0tZnJvbnQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdG9wOiAyNTBweDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIGhlaWdodDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbGFyZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXJ2YXRpb24tYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlc2VydmF0aW9uLWJ1dHRvbi1jbHIpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXJ2YXRpb24tYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4jY2Fyb3VzZWwtZG90cyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW1haW4pO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG4gICAgdG9wOiA4NTBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQteHRyYS1sYXJnZSk7XFxyXFxufVxcclxcblxcclxcbiNjYXJvdXNlbC1kb3RzOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA5NDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTQwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnNsaWRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLjEwLCAwLjExLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BpYzEge1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1taWRkbGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGljMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbiNwaWMzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BpYzQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUb3AgY29udGVudCAqL1xcclxcblxcclxcbiN0b3AtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi50ZXh0Ym94IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDQwdmg7XFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgbGVmdDogNDBweDtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDQ0LDYyLDgwLDAuMyksIHJnYmEoNDQsNjIsODAsMC4zKSk7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQxKTtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlkZGxlIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4jbWlkZGxlLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDEpO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDg1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW1haW4pO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWlkZGxlLXRvcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNtaWRkbGUtYm90dG9tIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2hlZi1pbWcge1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbiNjaGVmLXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qQW5pbWF0aW9uKi9cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltd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QUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBLFlBQVk7O0FBRVo7SUFDSTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFVBQVU7SUFDWjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFZhcmlhYmxlcyAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1mZi1tYWluOiBcXFwiT3BlbiBTYW5zXFxcIjtcXHJcXG5cXHJcXG4gICAgLS1saWdodDE6ICNmY2ZlZmU7XFxyXFxuICAgIC0tbGlnaHQyOiAjNmY2YzY5O1xcclxcbiAgICAtLWRhcmsxOiAjMjMzMTQyO1xcclxcbiAgICAtLXJlc2VydmF0aW9uLWJ1dHRvbi1jbHI6ICMxMjkzZGI7XFxyXFxuXFxyXFxuICAgIC0tZm9udC1zbWFsbDogMThweDtcXHJcXG4gICAgLS1mb250LW1lZGl1bTogMjRweDtcXHJcXG4gICAgLS1mb250LWxhcmdlOiA0MHB4O1xcclxcbiAgICAtLWZvbnQteHRyYS1sYXJnZTogNjBweDtcXHJcXG5cXHJcXG4gICAgLS1mcm9udDogMjtcXHJcXG4gICAgLS1taWRkbGU6IDE7XFxyXFxuXFxyXFxuICAgIC0tbWVkaXVtLXdlaWdodDogNTAwO1xcclxcbiAgICAtLWhpZ2gtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcclxcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2VuZXJhbCAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDA7ICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXFxyXFxufVxcclxcblxcclxcbi5jZW50ZXJlZC1mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIGFuZCB0b3AgY2Fyb3VzZWwgKi9cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtbWFpbik7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1mcm9udCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1tZWRpdW0td2VpZ2h0KTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmRhcmstaGVhZGVyLXRhYnMge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyazEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlnaHQtaGVhZGVyLXRhYnMge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQxKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2hlYWRlci10YWJzIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci10YWJzIGxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRvcDogMjUwcHg7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZXNlcnZhdGlvbi1idXR0b24tY2xyKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuI2Nhcm91c2VsLWRvdHMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1mcm9udCk7XFxyXFxuICAgIHRvcDogODUwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXh0cmEtbGFyZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2Fyb3VzZWwtZG90czpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWF4LWhlaWdodDogOTQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDk0MHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi5zbGlkZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMC4xMCwgMC4xMSwgMSk7XFxyXFxufVxcclxcblxcclxcbiNwaWMxIHtcXHJcXG4gICAgei1pbmRleDogdmFyKC0tbWlkZGxlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL21lZGlhL3Jlc3RhdXJhbnQxLmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGljMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9tZWRpYS9yZXN0YXVyYW50Mi5qcGdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BpYzMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vbWVkaWEvcmVzdGF1cmFudDMuanBnXFxcIik7XFxyXFxufVxcclxcblxcclxcbiNwaWM0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL21lZGlhL3Jlc3RhdXJhbnQ0LmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUb3AgY29udGVudCAqL1xcclxcblxcclxcbiN0b3AtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9tZWRpYS90aHVtYm5haWwyLmpwZ1xcXCIpO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGJveCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA0MHZoO1xcclxcbiAgICBoZWlnaHQ6IDQwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGxlZnQ6IDQwcHg7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg0NCw2Miw4MCwwLjMpLCByZ2JhKDQ0LDYyLDgwLDAuMykpO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XFxyXFxufVxcclxcblxcclxcbi8qIE1pZGRsZSBjb250ZW50ICovXFxyXFxuXFxyXFxuI21pZGRsZS1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQxKTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiA4NTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0Mik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXHJcXG59XFxyXFxuXFxyXFxuI21pZGRsZS10b3Age1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbWlkZGxlLWJvdHRvbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWYtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2hlZi10ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKkFuaW1hdGlvbiovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMb2dvIGZyb20gXCIuL21lZGlhL2xvZ28ucG5nXCI7XHJcbmltcG9ydCBDaGVmIGZyb20gXCIuL21lZGlhL2NoZWYuUE5HXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFVzUGFnZSgpIHtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGlvbk9wdGlvbnMgPSBbXCJIb21lXCIsIFwiQWJvdXQgVXNcIiwgXCJNZW51XCIsIFwiQ29udGFjdCBVc1wiXTtcclxuICBjb25zdCB0ZXh0Qm94VGl0bGVzID0gW1wiT3VyIGhpc3RvcnlcIiwgXCJPdXIgbWlzc2lvblwiXTtcclxuICBjb25zdCB0ZXh0Qm94Q29udGVudCA9IFtcIlNlZCBjb21tb2RvIGNvbnNlcXVhdCBzZW0sIG5lYyBzY2VsZXJpc3F1ZSBhcmN1IG1hbGVzdWFkYSB2ZWwuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIHVybmEgbGliZXJvLCBhIGNvbnZhbGxpcyBuaWJoIHZlaGljdWxhIHNpdCBhbWV0LiBOYW0gYXQgdml2ZXJyYSBkb2xvci4gUHJvaW4gZmV1Z2lhdCBtb2xlc3RpZSB2aXZlcnJhLiBQcmFlc2VudCBuZXF1ZSBsaWJlcm8sIHBvcnR0aXRvciBldCBuZXF1ZSB2ZWwsIHBsYWNlcmF0IGJsYW5kaXQgZmVsaXMuXCIsIFwiU2VkIGxvYm9ydGlzIGxhY3VzIHNpdCBhbWV0IHZlbGl0IGJpYmVuZHVtIGZldWdpYXQuIEZ1c2NlIHB1bHZpbmFyIGFyY3UgY29uc2VjdGV0dXIgZmVsaXMgY29udmFsbGlzIHNhZ2l0dGlzLiBEb25lYyB2aXRhZSBpbnRlcmR1bSBlbmltLCBldCBjb21tb2RvIG9yY2kuIFZlc3RpYnVsdW0gdm9sdXRwYXQsIG1ldHVzIGZyaW5naWxsYSBoZW5kcmVyaXQgYWNjdW1zYW4sIGVyYXQgbG9yZW0gcG9zdWVyZSBsYWN1cywgZWdldCBydXRydW0gZWxpdCBvcmNpIG5lYyBvZGlvLlwiLCBcIk1hdXJpcyBiaWJlbmR1bSwgZW5pbSBzaXQgYW1ldCBwdWx2aW5hciBwdWx2aW5hciwgZW5pbSBtaSB2ZWhpY3VsYSBvZGlvLCBzaXQgYW1ldCBwb3J0YSBuaXNpIG5lcXVlIHZpdGFlIGRvbG9yLiBQcmFlc2VudCBhdWd1ZSBhcmN1LCBpbnRlcmR1bSBzZWQgbWkgdmVsLCBpbXBlcmRpZXQgcG9ydGEgbnVuYy4gUGVsbGVudGVzcXVlIGhhYml0YW50IG1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMuIER1aXMgdHJpc3RpcXVlIGF0IG1hZ25hIGFjIGN1cnN1cy4gUGhhc2VsbHVzIGxlY3R1cyB1cm5hLCBzZW1wZXIgaWQgdHVycGlzIHNlZCwgb3JuYXJlIGZpbmlidXMgbGliZXJvLiBTZWQgdXJuYSBkdWksIGF1Y3RvciBzaXQgYW1ldCB1bHRyaWNlcyBlZ2V0LCBkYXBpYnVzIGVnZXQgbGliZXJvLlwiLCBcIlF1aXNxdWUgc2NlbGVyaXNxdWUgY29uZGltZW50dW0gb2RpbyBub24gcG9ydGEuIFByb2luIHNlZCBsZW8gY29uZGltZW50dW0gbmliaCBlbGVpZmVuZCBtb2xsaXMgdmVsIHZpdGFlIG1hZ25hLiBEb25lYyBzdXNjaXBpdCBzZW1wZXIgbG9yZW0sIGV1IG1vbGVzdGllIG9kaW8gYXVjdG9yIHNlZC5cIl07XHJcblxyXG4gIC8vIENhY2hlIHRoZSBtYWluIFwiY29udGVudFwiIGVsZW1lbnQsIHdoaWNoIHdpbGwgY29udGFpbiBldmVyeXRoaW5nIG9uIHRoZSBwYWdlXHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgLyoqKioqKioqIEhFQURFUiAqKioqKioqKioqKi9cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBtYWluIFwiaGVhZGVyXCIgZWxlbWVudFxyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJsaWdodC1oZWFkZXItdGFic1wiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgXCJ1bFwiIGVsZW1lbnQgZm9yIHRoZSBTaXRlIE5hdmlnYXRpb24gTWVudVxyXG4gIGxldCBoZWFkZXJUYWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGhlYWRlclRhYnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItdGFic1wiKTtcclxuICBoZWFkZXJUYWJzLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJlZC1mbGV4XCIpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUYWJzKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGxpc3QgZWxlbWVudHMgb2YgdGhlIFNpdGUgTmF2aWdhdGlvbiBNZW51XHJcbiAgZm9yIChsZXQgaSBpbiBuYXZpZ2F0aW9uT3B0aW9ucykge1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuaW5uZXJIVE1MID0gbmF2aWdhdGlvbk9wdGlvbnNbaV07XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwibmF2aVwiKTtcclxuICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIG5hdmlnYXRpb25PcHRpb25zW2ldLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIiBcIiwgXCItXCIpKTtcclxuICAgIGhlYWRlclRhYnMuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqIFRvcCBjb250ZW50ICoqKioqKioqKioqL1xyXG5cclxuICBsZXQgdG9wQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdG9wQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1jb250ZW50XCIpO1xyXG4gIHRvcENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BDb250ZW50KTtcclxuXHJcbiAgbGV0IHRleHRCb3hMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0Qm94TGVmdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHQtYm94LWxlZnRcIik7XHJcbiAgdGV4dEJveExlZnQuY2xhc3NMaXN0LmFkZChcInRleHRib3hcIik7XHJcbiAgdGV4dEJveExlZnQuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgdG9wQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0Qm94TGVmdCk7XHJcblxyXG4gIGxldCB0ZXh0Qm94UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRleHRCb3hSaWdodC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHQtYm94LXJpZ2h0XCIpO1xyXG4gIHRleHRCb3hSaWdodC5jbGFzc0xpc3QuYWRkKFwidGV4dGJveFwiKTtcclxuICB0ZXh0Qm94UmlnaHQuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgdG9wQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0Qm94UmlnaHQpO1xyXG5cclxuICBmb3IgKGxldCBpIGluIHRleHRCb3hUaXRsZXMpIHtcclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICB0aXRsZURpdi5pbm5lckhUTUwgPSB0ZXh0Qm94VGl0bGVzW2ldO1xyXG4gICAgbGV0IGNvbnRhaW5pbmdEaXYgPSAoaSAlIDIgPT0gMCkgPyB0ZXh0Qm94TGVmdCA6IHRleHRCb3hSaWdodDtcclxuICAgIGNvbnRhaW5pbmdEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSBpbiB0ZXh0Qm94Q29udGVudCkge1xyXG4gICAgbGV0IHRleHRDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHRDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRlbnRcIik7XHJcbiAgICB0ZXh0Q29udGVudERpdi5pbm5lckhUTUwgPSB0ZXh0Qm94Q29udGVudFtpXTtcclxuICAgIGxldCBjb250YWluaW5nRGl2ID0gKGkgJSAyID09IDApID8gdGV4dEJveExlZnQgOiB0ZXh0Qm94UmlnaHQ7XHJcbiAgICBjb250YWluaW5nRGl2LmFwcGVuZENoaWxkKHRleHRDb250ZW50RGl2KTtcclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXJ0aW5nUG9zaXRpb24oc2xpZGVzKSB7ICBcclxuICAgIC8vIGxvb3AgdGhyb3VnaCBjYXJvdXNlbCBwaWN0dXJlcyBhbmQgc2V0IGVhY2ggcGljdHVyZSdzIHRyYW5zbGF0ZVggcHJvcGVydHkgdG8gaW5kZXggKiAxMDAlIFxyXG4gICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpbmR4KSA9PiB7XHJcbiAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aW5keCAqIDEwMH0lKWA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVDYXJvdXNlbChpbWFnZXMsIHRpbWVyLCBjdXJyZW50ID0gMCkge1xyXG4gICAgY29uc3QgbWF4U2xpZGVzID0gaW1hZ2VzLmxlbmd0aCAtIDE7XHJcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsxMDAgKiAoaW5kZXggLSBjdXJyZW50KX0lKWA7XHJcbiAgICB9KTtcclxuICAgIGN1cnJlbnQgPSAoY3VycmVudCAhPT0gbWF4U2xpZGVzKSA/IGN1cnJlbnQgKyAxIDogMDtcclxuICAgIHNldFRpbWVvdXQobW92ZUNhcm91c2VsLCB0aW1lciwgaW1hZ2VzLCB0aW1lciwgY3VycmVudCk7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3BhZ2VDb250ZW50XCI7XHJcbmltcG9ydCBhYm91dFVzUGFnZSBmcm9tICcuL2Fib3V0VXMnO1xyXG5pbXBvcnQgeyBzZXRTdGFydGluZ1Bvc2l0aW9uLCBtb3ZlQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcclxuXHJcbmNvbnN0IGZpcnN0TG9hZCA9ICgoKSA9PiB7XHJcbiAgbGV0IGZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmaXJzdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XHJcbiAgZmlyc3REaXYuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmaXJzdERpdik7XHJcblxyXG4gIHNpdGVDb250cm9sKCk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBzaXRlQ29udHJvbCh0YWIpIHtcclxuICBzd2l0Y2ggKHRhYikge1xyXG4gICAgY2FzZSBcImFib3V0LXVzXCI6XHJcbiAgICAgIGFib3V0VXNQYWdlKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIm1lbnVcIjpcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiY29udGFjdC11c1wiOlxyXG4gICAgY2FzZSBcInJlc2VydmF0aW9uLWJ1dHRvblwiOlxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGhvbWVQYWdlKCk7XHJcbiAgICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIik7XHJcbiAgICAgIHNldFN0YXJ0aW5nUG9zaXRpb24oc2xpZGVzKTtcclxuICAgICAgbW92ZUNhcm91c2VsKHNsaWRlcywgNzAwMCk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZVRhYlN3aXRjaCgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFiU3dpdGNoKCkge1xyXG4gIC8vIFNldCB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBzaXRlIG5hdmlnYXRpb24gdGFic1xyXG4gIGNvbnN0IG5hdmlUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpXCIpO1xyXG4gIG5hdmlUYWJzLmZvckVhY2godGFiID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgLy8gV2hlbiBvbmUgb2YgdGhlIHRhYnMgaXMgY2xpY2tlZC4uLlxyXG4gICAgLy8gU3RvcmUgdGhlIGlkIG9mIHRoZSBjbGlja2VkIHRhYiBmb3IgbGF0ZXIgcmVmZXJlbmNlXHJcbiAgICBsZXQgdGFiQ2xpY2tlZCA9IGV2ZW50LnRhcmdldC5pZDtcclxuXHJcbiAgICAvLyBDbGVhciBhbGwgY2hpbGQgbm9kZXMgZnJvbSB1bmRlciB0aGUgXCJjb250ZW50XCIgZGl2XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgIC8vIFBvcHVsYXRlIHRoZSBwYWdlIHdpdGggdGhlIEhUTUwgY29udGVudCBhbmQgc3R5bGVzIG9mIHRoZSB0YWIgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgc2l0ZUNvbnRyb2wodGFiQ2xpY2tlZCk7XHJcbiAgfSkpO1xyXG59IiwiaW1wb3J0IExvZ28gZnJvbSBcIi4vbWVkaWEvbG9nby5wbmdcIjtcclxuaW1wb3J0IENoZWYgZnJvbSBcIi4vbWVkaWEvY2hlZi5QTkdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKCkge1xyXG5cclxuICBjb25zdCBuYXZpZ2F0aW9uT3B0aW9ucyA9IFtcIkhvbWVcIiwgXCJBYm91dCBVc1wiLCBcIk1lbnVcIiwgXCJDb250YWN0IFVzXCJdO1xyXG4gIGNvbnN0IG1pZGRsZVRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBhIHNlbSBhdCBpcHN1bSBjb25zZXF1YXQgaGVuZHJlcml0IHF1aXMgYXQgdG9ydG9yLiBEdWlzIG5lYyBkaWduaXNzaW0gZXguXCI7XHJcbiAgY29uc3QgY2hlZlRleHRDb250ZW50ID0gW1wiT1VSIENIRUZcIiwgXCJSYW5kYWxsIFJpc2hpXCIsIFwiUGhhc2VsbHVzIHJ1dHJ1bSBvZGlvIHZlbCBtYXR0aXMgc2VtcGVyLiBFdGlhbSBkaWduaXNzaW0gYW50ZSBhcmN1LCB2ZWwgZmVybWVudHVtIGRvbG9yIHZ1bHB1dGF0ZSB2ZWwuIFByb2luIGZhY2lsaXNpcyB0ZW1wdXMgYWNjdW1zYW4uIENyYXMgc2VkIHZvbHV0cGF0IGFyY3UuIE1hZWNlbmFzIHV0IHNvbGxpY2l0dWRpbiBtYXVyaXMuIE1vcmJpIGVsZW1lbnR1bSBuaWJoIHNpdCBhbWV0IG5pYmggdmVzdGlidWx1bSwgY29uZ3VlIHBvcnRhIG1hc3NhIGxhb3JlZXQuIFNlZCBhY2N1bXNhbiBlZ2VzdGFzIG1hZ25hLCBuZWMgZXVpc21vZCBlc3QgdGluY2lkdW50IHVsbGFtY29ycGVyLiBDcmFzIHBvcnRhIGlwc3VtIGRhcGlidXMsIGN1cnN1cyBtZXR1cyBuZWMsIHZlbmVuYXRpcyBudW5jLiBQcm9pbiBtb2xlc3RpZSwgbGVjdHVzIGEgYXVjdG9yIHZhcml1cywgbWFnbmEgbnVsbGEgcGVsbGVudGVzcXVlIG9kaW8sIGFjIGVsZWlmZW5kIHNhcGllbiBtYWduYSBldCBtZXR1cy4gQWxpcXVhbSBzZWQgYXVndWUgbGliZXJvLiBGdXNjZSBlZ2V0IHB1bHZpbmFyIG1hc3NhLCBldSBmZXJtZW50dW0gc2VtLiBOYW0gcGVsbGVudGVzcXVlLCBuaXNpIGV0IHNjZWxlcmlzcXVlIHByZXRpdW0sIG5pc2wgbWV0dXMgZWxlbWVudHVtIG5pYmgsIGV1IGFjY3Vtc2FuIG1ldHVzIGVyYXQgZWdldCBhbnRlLiBEb25lYyBpbiB2ZXN0aWJ1bHVtIG5pc2kuIER1aXMgdml0YWUgZmVsaXMgbm9uIG1hdXJpcyBzY2VsZXJpc3F1ZSBhdWN0b3IgcXVpcyBlZ2V0IGRvbG9yLiBJbiBhIGRpZ25pc3NpbSBsYWN1cywgZXUgYXVjdG9yIGV4LlwiXTtcclxuXHJcbiAgLy8gQ2FjaGUgdGhlIG1haW4gXCJjb250ZW50XCIgZWxlbWVudCwgd2hpY2ggd2lsbCBjb250YWluIGV2ZXJ5dGhpbmcgb24gdGhlIHBhZ2VcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAvKioqKioqKiogSEVBREVSICoqKioqKioqKioqL1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIG1haW4gXCJoZWFkZXJcIiBlbGVtZW50XHJcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2VudGVyZWQtZmxleFwiKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImxpZ2h0LWhlYWRlci10YWJzXCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBcInVsXCIgZWxlbWVudCBmb3IgdGhlIFNpdGUgTmF2aWdhdGlvbiBNZW51XHJcbiAgbGV0IGhlYWRlclRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgaGVhZGVyVGFicy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10YWJzXCIpO1xyXG4gIGhlYWRlclRhYnMuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRhYnMpO1xyXG5cclxuICAvLyBDcmVhdGUgbGlzdCBlbGVtZW50cyBvZiB0aGUgU2l0ZSBOYXZpZ2F0aW9uIE1lbnVcclxuICBmb3IgKGxldCBpIGluIG5hdmlnYXRpb25PcHRpb25zKSB7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5pbm5lckhUTUwgPSBuYXZpZ2F0aW9uT3B0aW9uc1tpXTtcclxuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJuYXZpXCIpO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmF2aWdhdGlvbk9wdGlvbnNbaV0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiIFwiLCBcIi1cIikpO1xyXG4gICAgaGVhZGVyVGFicy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKiogQ2Fyb3VzZWwgKioqKioqKioqKiovXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbWFpbiBcInNsaWRlclwiIGVsZW1lbnRcclxuICBsZXQgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGlkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzbGlkZXJcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChzbGlkZXIpO1xyXG5cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBmb3VyIHNsaWRlcyBvZiB0aGUgY2Fyb3VzZWwgd2l0aCB0aGUgYmcgaW1hZ2VzIGFkZGVkXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgIGxldCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIik7XHJcbiAgICBzbGlkZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGljJHtpKzF9YCk7XHJcbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoc2xpZGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqIExvZ28gY29udGFpbmVyICoqKioqKioqKioqL1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIGxvZ28gY29udGFpbmVyIGVsZW1lbnRcclxuICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9nb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ28tY29udGFpbmVyXCIpO1xyXG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBsb2dvIGVsZW1lbnQgZm9yIHRoZSBsb2dvIGltYWdlXHJcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dvXCIpO1xyXG4gIGxvZ28uc3JjID0gTG9nbztcclxuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIGxvZ290ZXh0IGVsZW1lbnQgZm9yIHRoZSBcIm1vdHRvXCJcclxuICBsZXQgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ29UZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nby10ZXh0XCIpO1xyXG4gIGxvZ29UZXh0LmlubmVySFRNTCA9IFwiQWJvdmUgdGhlIGNpdHkuLi5cIjtcclxuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSByZXNlcnZhdGlvbiBidXR0b24gZWxlbWVudFxyXG4gIGxldCByZXNlcnZhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmVzZXJ2YXRpb25CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNlcnZhdGlvbi1idXR0b25cIik7XHJcbiAgcmVzZXJ2YXRpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdmlcIik7XHJcbiAgcmVzZXJ2YXRpb25CdXR0b24uaW5uZXJIVE1MID0gXCJSZXNlcnZhdGlvblwiO1xyXG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25CdXR0b24pO1xyXG5cclxuXHJcbiAgLyoqKioqKioqIE1pZGxlIGNvbnRlbnQgKioqKioqKioqKiovXHJcblxyXG4gIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lciBmb3IgdGhlIG1pZGRsZSBjb250ZW50LCBhbmQgdGhlIHR3byBjb250YWluZXJzIHdpdGhpblxyXG5cclxuICBsZXQgbWlkZGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWlkZGxlQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1pZGRsZS1jb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWlkZGxlQ29udGVudCk7XHJcblxyXG4gIGxldCBtaWRkbGVUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1pZGRsZVRvcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1pZGRsZS10b3BcIik7XHJcbiAgbWlkZGxlVG9wLmlubmVySFRNTCA9IG1pZGRsZVRleHRDb250ZW50O1xyXG4gIG1pZGRsZVRvcC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIG1pZGRsZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWlkZGxlVG9wKTtcclxuXHJcbiAgbGV0IG1pZGRsZUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWlkZGxlQm90dG9tLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWlkZGxlLWJvdHRvbVwiKTtcclxuICBtaWRkbGVDb250ZW50LmFwcGVuZENoaWxkKG1pZGRsZUJvdHRvbSk7XHJcblxyXG5cclxuICAvLyBBZGQgdGhlIFwiY2hlZlwiIGltYWdlIHRvIHRoZSBtaWRkbGUgY29udGVudFxyXG5cclxuICBsZXQgY2hlZkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2hlZkltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWYtaW1nXCIpO1xyXG4gIGNoZWZJbWcuc3JjID0gQ2hlZjtcclxuICBtaWRkbGVCb3R0b20uYXBwZW5kQ2hpbGQoY2hlZkltZyk7XHJcblxyXG4gIC8vIEFkZCB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBtaWRkbGUgY29udGVudCBcImNoZWYgdGV4dFwiIGVsZW1lbnRzXHJcblxyXG4gIGxldCBjaGVmVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2hlZlRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVmLXRleHRcIik7XHJcbiAgbWlkZGxlQm90dG9tLmFwcGVuZENoaWxkKGNoZWZUZXh0KTtcclxuXHJcbiAgZm9yIChsZXQgaSBpbiBjaGVmVGV4dENvbnRlbnQpIHtcclxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRleHQke3BhcnNlSW50KGkpICsgMX1gKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gY2hlZlRleHRDb250ZW50W2ldO1xyXG4gICAgY2hlZlRleHQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBjaGVmVGV4dC5maXJzdENoaWxkLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjgwMFwiXHJcblxyXG4gIC8qKioqKioqKiBGb290ZXIgKioqKioqKioqKiovXHJcblxyXG4vKiAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG5cclxuICBsZXQgY29weXJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvcHlyaWdodFRleHQuaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAke2N1cnJlbnRZZWFyfSBkb21pbmlrLWtpc3NgO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRUZXh0KTtcclxuXHJcbiAgbGV0IGdpdEh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBnaXRIdWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9kb21pbmlrLWtpc3NcIjtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViTGluayk7XHJcblxyXG4gIGxldCBnaXRIdWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZmFiXCIpO1xyXG4gIGdpdEh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImZhLWdpdGh1YlwiKTtcclxuICBnaXRIdWJMaW5rLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pOyAqL1xyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==