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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables */\r\n\r\n:root {\r\n    --ff-main: \"Open Sans\";\r\n\r\n    --light1: #fcfefe;\r\n    --light2: #6f6c69;\r\n    --reservation-button-clr: #1293db;\r\n\r\n    --font-small: 18px;\r\n    --font-medium: 24px;\r\n    --font-large: 40px;\r\n    --font-xtra-large: 60px;\r\n\r\n    --front: 2;\r\n    --middle: 1;\r\n\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* General */\r\n\r\n#content {\r\n    overflow: hidden;\r\n    flex-direction: column;\r\n}\r\n\r\n.centered-flex {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/* Header and top carousel */\r\n\r\n#header {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    padding: 30px;\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n}\r\n\r\n\r\n#header-tabs {\r\n    flex-direction: row;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    gap: 20px;\r\n}\r\n\r\n#logo-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    font-family: var(--ff-main);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n    background-color: transparent;\r\n    top: 250px;\r\n    gap: 50px;\r\n}\r\n\r\n#logo {\r\n    height: 160px;\r\n}\r\n\r\n#logo-text {\r\n    font-size: var(--font-large);\r\n}\r\n\r\n#reservation-button {\r\n    font-size: var(--font-medium);\r\n    background-color: var(--reservation-button-clr);\r\n    padding: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n#carousel-dots {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    align-items: center;\r\n    font-family: var(--ff-main);\r\n    color: black;\r\n    z-index: var(--front);\r\n    top: 850px;\r\n    gap: 10px;\r\n    font-size: var(--font-xtra-large);\r\n}\r\n\r\n#slider {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    overflow: hidden;\r\n    max-height: 940px;\r\n    width: 100%;\r\n    height: 940px;\r\n}\r\n  \r\n.slide {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: all 1s;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#pic1 {\r\n    z-index: var(--middle);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n#pic2 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n#pic3 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n#pic4 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n\r\n/* Middle content */\r\n\r\n#middle-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--light1);\r\n    width: 50%;\r\n    height: 850px;\r\n    align-items: center;\r\n    color: var(--light2);\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n\r\n}\r\n\r\n#middle-top {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n#middle-bottom {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n}\r\n\r\n#chef-img {\r\n    width: 600px;\r\n}\r\n\r\n#chef-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n/* Footer */\r\n\r\n#footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 5px;\r\n    background-color: var(--light2);\r\n    color: var(--light1);\r\n    padding: 10px;\r\n    width: 100%;\r\n    justify-content: center;\r\n    font-size: var(--font-small);\r\n}\r\n\r\n.fa-github {\r\n    color: black;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.fa-github:hover {\r\n    transform: rotate(360deg) scale(1.2);\r\n}\r\n\r\n.fa-rotate-left {\r\n    color: black;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.fa-rotate-left:hover {\r\n    transform: rotate(-360deg) scale(1.2);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;IACI,sBAAsB;;IAEtB,iBAAiB;IACjB,iBAAiB;IACjB,iCAAiC;;IAEjC,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;;IAEvB,UAAU;IACV,WAAW;;AAEf;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA,YAAY;;AAEZ;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA,4BAA4B;;AAE5B;IACI,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,4BAA4B;IAC5B,oBAAoB;IACpB,qBAAqB;AACzB;;;AAGA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;IACV,SAAS;IACT,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,2BAA2B;IAC3B,oBAAoB;IACpB,qBAAqB;IACrB,6BAA6B;IAC7B,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;IAC7B,+CAA+C;IAC/C,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;IACZ,qBAAqB;IACrB,UAAU;IACV,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,yDAAgD;AACpD;;AAEA;IACI,yDAAgD;AACpD;;AAEA;IACI,yDAAgD;AACpD;;AAEA;IACI,yDAAgD;AACpD;;;AAGA,mBAAmB;;AAEnB;IACI,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,2BAA2B;IAC3B,4BAA4B;;AAEhC;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,+BAA+B;IAC/B,oBAAoB;IACpB,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC","sourcesContent":["/* Variables */\r\n\r\n:root {\r\n    --ff-main: \"Open Sans\";\r\n\r\n    --light1: #fcfefe;\r\n    --light2: #6f6c69;\r\n    --reservation-button-clr: #1293db;\r\n\r\n    --font-small: 18px;\r\n    --font-medium: 24px;\r\n    --font-large: 40px;\r\n    --font-xtra-large: 60px;\r\n\r\n    --front: 2;\r\n    --middle: 1;\r\n\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* General */\r\n\r\n#content {\r\n    overflow: hidden;\r\n    flex-direction: column;\r\n}\r\n\r\n.centered-flex {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/* Header and top carousel */\r\n\r\n#header {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    padding: 30px;\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n}\r\n\r\n\r\n#header-tabs {\r\n    flex-direction: row;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    gap: 20px;\r\n}\r\n\r\n#logo-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    font-family: var(--ff-main);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n    background-color: transparent;\r\n    top: 250px;\r\n    gap: 50px;\r\n}\r\n\r\n#logo {\r\n    height: 160px;\r\n}\r\n\r\n#logo-text {\r\n    font-size: var(--font-large);\r\n}\r\n\r\n#reservation-button {\r\n    font-size: var(--font-medium);\r\n    background-color: var(--reservation-button-clr);\r\n    padding: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n#carousel-dots {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    align-items: center;\r\n    font-family: var(--ff-main);\r\n    color: black;\r\n    z-index: var(--front);\r\n    top: 850px;\r\n    gap: 10px;\r\n    font-size: var(--font-xtra-large);\r\n}\r\n\r\n#slider {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    overflow: hidden;\r\n    max-height: 940px;\r\n    width: 100%;\r\n    height: 940px;\r\n}\r\n  \r\n.slide {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: all 1s;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#pic1 {\r\n    z-index: var(--middle);\r\n    background-image: url(\"./media/restaurant1.jpg\");\r\n}\r\n\r\n#pic2 {\r\n    background-image: url(\"./media/restaurant2.jpg\");\r\n}\r\n\r\n#pic3 {\r\n    background-image: url(\"./media/restaurant3.jpg\");\r\n}\r\n\r\n#pic4 {\r\n    background-image: url(\"./media/restaurant4.jpg\");\r\n}\r\n\r\n\r\n/* Middle content */\r\n\r\n#middle-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--light1);\r\n    width: 50%;\r\n    height: 850px;\r\n    align-items: center;\r\n    color: var(--light2);\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n\r\n}\r\n\r\n#middle-top {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n#middle-bottom {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n}\r\n\r\n#chef-img {\r\n    width: 600px;\r\n}\r\n\r\n#chef-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n/* Footer */\r\n\r\n#footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 5px;\r\n    background-color: var(--light2);\r\n    color: var(--light1);\r\n    padding: 10px;\r\n    width: 100%;\r\n    justify-content: center;\r\n    font-size: var(--font-small);\r\n}\r\n\r\n.fa-github {\r\n    color: black;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.fa-github:hover {\r\n    transform: rotate(360deg) scale(1.2);\r\n}\r\n\r\n.fa-rotate-left {\r\n    color: black;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.fa-rotate-left:hover {\r\n    transform: rotate(-360deg) scale(1.2);\r\n}"],"sourceRoot":""}]);
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
function setStartingPosition() {
    // Select all pictures in the carousel
    const slides = document.querySelectorAll(".slide");
  
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
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./src/carousel.js");





let firstDiv = document.createElement("div");
firstDiv.setAttribute("id", "content");
firstDiv.classList.add("centered-flex");
document.body.appendChild(firstDiv);


(0,_pageContent__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_carousel__WEBPACK_IMPORTED_MODULE_2__.setStartingPosition)();
(0,_carousel__WEBPACK_IMPORTED_MODULE_2__.moveCarousel)(slides, 200000);


/***/ }),

/***/ "./src/pageContent.js":
/*!****************************!*\
  !*** ./src/pageContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSite)
/* harmony export */ });
/* harmony import */ var _media_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/logo.png */ "./src/media/logo.png");
/* harmony import */ var _media_chef_PNG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/chef.PNG */ "./src/media/chef.PNG");



function createSite() {

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
  // Add the "first-pic" id to the top picture, which sets its "z-index" to be on top, and cover the initial transition of the slides

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
  reservationButton.innerHTML = "Reservation";
  logoContainer.appendChild(reservationButton);


  /******** Carousel dots ***********/

  // Add three dots to the bottom of the carousel, to display at what stage the carousel is

  let carouselDots = document.createElement("div");
  carouselDots.setAttribute("id", "carousel-dots");
  carouselDots.classList.add("centered-flex");
  content.appendChild(carouselDots);

  for (let i = 0; i < 3; i++) {
    let dot = document.createElement("p");
    dot.innerHTML = ".";
    carouselDots.appendChild(dot);
  }

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

  let footer = document.createElement("div");
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
  gitHubLink.appendChild(gitHubLogo);


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL3NyYy9wYWdlQ29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9yZXN0YXVyYW50MS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21lZGlhL3Jlc3RhdXJhbnQyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vbWVkaWEvcmVzdGF1cmFudDMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9yZXN0YXVyYW50NC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBWYXJpYWJsZXMgKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tZmYtbWFpbjogXFxcIk9wZW4gU2Fuc1xcXCI7XFxyXFxuXFxyXFxuICAgIC0tbGlnaHQxOiAjZmNmZWZlO1xcclxcbiAgICAtLWxpZ2h0MjogIzZmNmM2OTtcXHJcXG4gICAgLS1yZXNlcnZhdGlvbi1idXR0b24tY2xyOiAjMTI5M2RiO1xcclxcblxcclxcbiAgICAtLWZvbnQtc21hbGw6IDE4cHg7XFxyXFxuICAgIC0tZm9udC1tZWRpdW06IDI0cHg7XFxyXFxuICAgIC0tZm9udC1sYXJnZTogNDBweDtcXHJcXG4gICAgLS1mb250LXh0cmEtbGFyZ2U6IDYwcHg7XFxyXFxuXFxyXFxuICAgIC0tZnJvbnQ6IDI7XFxyXFxuICAgIC0tbWlkZGxlOiAxO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyZWQtZmxleCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBhbmQgdG9wIGNhcm91c2VsICovXFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW1haW4pO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQxKTtcXHJcXG4gICAgei1pbmRleDogdmFyKC0tZnJvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jaGVhZGVyLXRhYnMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRvcDogMjUwcHg7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZXNlcnZhdGlvbi1idXR0b24tY2xyKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nhcm91c2VsLWRvdHMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1mcm9udCk7XFxyXFxuICAgIHRvcDogODUwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXh0cmEtbGFyZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA5NDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTQwcHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnNsaWRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BpYzEge1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1taWRkbGUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGljMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbiNwaWMzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BpYzQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNaWRkbGUgY29udGVudCAqL1xcclxcblxcclxcbiNtaWRkbGUtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogODUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDIpO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtbWFpbik7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNtaWRkbGUtdG9wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21pZGRsZS1ib3R0b20ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjaGVmLWltZyB7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWYtdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQxKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZ2l0aHViIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXJvdGF0ZS1sZWZ0IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXJvdGF0ZS1sZWZ0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4yKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjOztBQUVkO0lBQ0ksc0JBQXNCOztJQUV0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlDQUFpQzs7SUFFakMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCOztJQUV2QixVQUFVO0lBQ1YsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBLDRCQUE0Qjs7QUFFNUI7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5REFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSx5REFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSx5REFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSx5REFBZ0Q7QUFDcEQ7OztBQUdBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFZhcmlhYmxlcyAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1mZi1tYWluOiBcXFwiT3BlbiBTYW5zXFxcIjtcXHJcXG5cXHJcXG4gICAgLS1saWdodDE6ICNmY2ZlZmU7XFxyXFxuICAgIC0tbGlnaHQyOiAjNmY2YzY5O1xcclxcbiAgICAtLXJlc2VydmF0aW9uLWJ1dHRvbi1jbHI6ICMxMjkzZGI7XFxyXFxuXFxyXFxuICAgIC0tZm9udC1zbWFsbDogMThweDtcXHJcXG4gICAgLS1mb250LW1lZGl1bTogMjRweDtcXHJcXG4gICAgLS1mb250LWxhcmdlOiA0MHB4O1xcclxcbiAgICAtLWZvbnQteHRyYS1sYXJnZTogNjBweDtcXHJcXG5cXHJcXG4gICAgLS1mcm9udDogMjtcXHJcXG4gICAgLS1taWRkbGU6IDE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdlbmVyYWwgKi9cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jZW50ZXJlZC1mbGV4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIGFuZCB0b3AgY2Fyb3VzZWwgKi9cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtbWFpbik7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDEpO1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1mcm9udCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNoZWFkZXItdGFicyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW1haW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQxKTtcXHJcXG4gICAgei1pbmRleDogdmFyKC0tZnJvbnQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdG9wOiAyNTBweDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIGhlaWdodDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbGFyZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXJ2YXRpb24tYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlc2VydmF0aW9uLWJ1dHRvbi1jbHIpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY2Fyb3VzZWwtZG90cyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW1haW4pO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG4gICAgdG9wOiA4NTBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQteHRyYS1sYXJnZSk7XFxyXFxufVxcclxcblxcclxcbiNzbGlkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG1heC1oZWlnaHQ6IDk0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5NDBweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uc2xpZGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGljMSB7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLW1pZGRsZSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9tZWRpYS9yZXN0YXVyYW50MS5qcGdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BpYzIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vbWVkaWEvcmVzdGF1cmFudDIuanBnXFxcIik7XFxyXFxufVxcclxcblxcclxcbiNwaWMzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL21lZGlhL3Jlc3RhdXJhbnQzLmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGljNCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9tZWRpYS9yZXN0YXVyYW50NC5qcGdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWlkZGxlIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4jbWlkZGxlLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDEpO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDg1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW1haW4pO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbWlkZGxlLXRvcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNtaWRkbGUtYm90dG9tIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2hlZi1pbWcge1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbiNjaGVmLXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWdpdGh1YiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5mYS1naXRodWI6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5mYS1yb3RhdGUtbGVmdCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5mYS1yb3RhdGUtbGVmdDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXJ0aW5nUG9zaXRpb24oKSB7XHJcbiAgICAvLyBTZWxlY3QgYWxsIHBpY3R1cmVzIGluIHRoZSBjYXJvdXNlbFxyXG4gICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKTtcclxuICBcclxuICAgIC8vIGxvb3AgdGhyb3VnaCBjYXJvdXNlbCBwaWN0dXJlcyBhbmQgc2V0IGVhY2ggcGljdHVyZSdzIHRyYW5zbGF0ZVggcHJvcGVydHkgdG8gaW5kZXggKiAxMDAlIFxyXG4gICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpbmR4KSA9PiB7XHJcbiAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aW5keCAqIDEwMH0lKWA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVDYXJvdXNlbChpbWFnZXMsIHRpbWVyLCBjdXJyZW50ID0gMCkge1xyXG4gICAgY29uc3QgbWF4U2xpZGVzID0gaW1hZ2VzLmxlbmd0aCAtIDE7XHJcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsxMDAgKiAoaW5kZXggLSBjdXJyZW50KX0lKWA7XHJcbiAgICB9KTtcclxuICAgIGN1cnJlbnQgPSAoY3VycmVudCAhPT0gbWF4U2xpZGVzKSA/IGN1cnJlbnQgKyAxIDogMDtcclxuICAgIHNldFRpbWVvdXQobW92ZUNhcm91c2VsLCB0aW1lciwgaW1hZ2VzLCB0aW1lciwgY3VycmVudCk7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVNpdGUgZnJvbSBcIi4vcGFnZUNvbnRlbnRcIjtcclxuaW1wb3J0IHsgc2V0U3RhcnRpbmdQb3NpdGlvbiwgbW92ZUNhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XHJcblxyXG5cclxubGV0IGZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZmlyc3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xyXG5maXJzdERpdi5jbGFzc0xpc3QuYWRkKFwiY2VudGVyZWQtZmxleFwiKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmaXJzdERpdik7XHJcblxyXG5cclxuY3JlYXRlU2l0ZSgpO1xyXG5zZXRTdGFydGluZ1Bvc2l0aW9uKCk7XHJcbm1vdmVDYXJvdXNlbChzbGlkZXMsIDIwMDAwMCk7XHJcbiIsImltcG9ydCBMb2dvIGZyb20gXCIuL21lZGlhL2xvZ28ucG5nXCI7XHJcbmltcG9ydCBDaGVmIGZyb20gXCIuL21lZGlhL2NoZWYuUE5HXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaXRlKCkge1xyXG5cclxuICBjb25zdCBuYXZpZ2F0aW9uT3B0aW9ucyA9IFtcIkhvbWVcIiwgXCJBYm91dCBVc1wiLCBcIk1lbnVcIiwgXCJDb250YWN0IFVzXCJdO1xyXG4gIGNvbnN0IG1pZGRsZVRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBhIHNlbSBhdCBpcHN1bSBjb25zZXF1YXQgaGVuZHJlcml0IHF1aXMgYXQgdG9ydG9yLiBEdWlzIG5lYyBkaWduaXNzaW0gZXguXCI7XHJcbiAgY29uc3QgY2hlZlRleHRDb250ZW50ID0gW1wiT1VSIENIRUZcIiwgXCJSYW5kYWxsIFJpc2hpXCIsIFwiUGhhc2VsbHVzIHJ1dHJ1bSBvZGlvIHZlbCBtYXR0aXMgc2VtcGVyLiBFdGlhbSBkaWduaXNzaW0gYW50ZSBhcmN1LCB2ZWwgZmVybWVudHVtIGRvbG9yIHZ1bHB1dGF0ZSB2ZWwuIFByb2luIGZhY2lsaXNpcyB0ZW1wdXMgYWNjdW1zYW4uIENyYXMgc2VkIHZvbHV0cGF0IGFyY3UuIE1hZWNlbmFzIHV0IHNvbGxpY2l0dWRpbiBtYXVyaXMuIE1vcmJpIGVsZW1lbnR1bSBuaWJoIHNpdCBhbWV0IG5pYmggdmVzdGlidWx1bSwgY29uZ3VlIHBvcnRhIG1hc3NhIGxhb3JlZXQuIFNlZCBhY2N1bXNhbiBlZ2VzdGFzIG1hZ25hLCBuZWMgZXVpc21vZCBlc3QgdGluY2lkdW50IHVsbGFtY29ycGVyLiBDcmFzIHBvcnRhIGlwc3VtIGRhcGlidXMsIGN1cnN1cyBtZXR1cyBuZWMsIHZlbmVuYXRpcyBudW5jLiBQcm9pbiBtb2xlc3RpZSwgbGVjdHVzIGEgYXVjdG9yIHZhcml1cywgbWFnbmEgbnVsbGEgcGVsbGVudGVzcXVlIG9kaW8sIGFjIGVsZWlmZW5kIHNhcGllbiBtYWduYSBldCBtZXR1cy4gQWxpcXVhbSBzZWQgYXVndWUgbGliZXJvLiBGdXNjZSBlZ2V0IHB1bHZpbmFyIG1hc3NhLCBldSBmZXJtZW50dW0gc2VtLiBOYW0gcGVsbGVudGVzcXVlLCBuaXNpIGV0IHNjZWxlcmlzcXVlIHByZXRpdW0sIG5pc2wgbWV0dXMgZWxlbWVudHVtIG5pYmgsIGV1IGFjY3Vtc2FuIG1ldHVzIGVyYXQgZWdldCBhbnRlLiBEb25lYyBpbiB2ZXN0aWJ1bHVtIG5pc2kuIER1aXMgdml0YWUgZmVsaXMgbm9uIG1hdXJpcyBzY2VsZXJpc3F1ZSBhdWN0b3IgcXVpcyBlZ2V0IGRvbG9yLiBJbiBhIGRpZ25pc3NpbSBsYWN1cywgZXUgYXVjdG9yIGV4LlwiXTtcclxuXHJcbiAgLy8gQ2FjaGUgdGhlIG1haW4gXCJjb250ZW50XCIgZWxlbWVudCwgd2hpY2ggd2lsbCBjb250YWluIGV2ZXJ5dGhpbmcgb24gdGhlIHBhZ2VcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAvKioqKioqKiogSEVBREVSICoqKioqKioqKioqL1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIG1haW4gXCJoZWFkZXJcIiBlbGVtZW50XHJcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2VudGVyZWQtZmxleFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgXCJ1bFwiIGVsZW1lbnQgZm9yIHRoZSBTaXRlIE5hdmlnYXRpb24gTWVudVxyXG4gIGxldCBoZWFkZXJUYWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGhlYWRlclRhYnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItdGFic1wiKTtcclxuICBoZWFkZXJUYWJzLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJlZC1mbGV4XCIpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUYWJzKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGxpc3QgZWxlbWVudHMgb2YgdGhlIFNpdGUgTmF2aWdhdGlvbiBNZW51XHJcbiAgZm9yIChsZXQgaSBpbiBuYXZpZ2F0aW9uT3B0aW9ucykge1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuaW5uZXJIVE1MID0gbmF2aWdhdGlvbk9wdGlvbnNbaV07XHJcbiAgICBoZWFkZXJUYWJzLmFwcGVuZENoaWxkKGxpKTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKiBDYXJvdXNlbCAqKioqKioqKioqKi9cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBtYWluIFwic2xpZGVyXCIgZWxlbWVudFxyXG4gIGxldCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNsaWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNsaWRlclwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHNsaWRlcik7XHJcblxyXG5cclxuICAvLyBDcmVhdGUgdGhlIGZvdXIgc2xpZGVzIG9mIHRoZSBjYXJvdXNlbCB3aXRoIHRoZSBiZyBpbWFnZXMgYWRkZWRcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgbGV0IHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVwiKTtcclxuICAgIHNsaWRlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwaWMke2krMX1gKTtcclxuICAgIHNsaWRlci5hcHBlbmRDaGlsZChzbGlkZSk7XHJcbiAgfVxyXG4gIC8vIEFkZCB0aGUgXCJmaXJzdC1waWNcIiBpZCB0byB0aGUgdG9wIHBpY3R1cmUsIHdoaWNoIHNldHMgaXRzIFwiei1pbmRleFwiIHRvIGJlIG9uIHRvcCwgYW5kIGNvdmVyIHRoZSBpbml0aWFsIHRyYW5zaXRpb24gb2YgdGhlIHNsaWRlc1xyXG5cclxuICAvKioqKioqKiogTG9nbyBjb250YWluZXIgKioqKioqKioqKiovXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbG9nbyBjb250YWluZXIgZWxlbWVudFxyXG4gIGxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2dvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nby1jb250YWluZXJcIik7XHJcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2VudGVyZWQtZmxleFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIGxvZ28gZWxlbWVudCBmb3IgdGhlIGxvZ28gaW1hZ2VcclxuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbG9nby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ29cIik7XHJcbiAgbG9nby5zcmMgPSBMb2dvO1xyXG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbG9nb3RleHQgZWxlbWVudCBmb3IgdGhlIFwibW90dG9cIlxyXG4gIGxldCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9nb1RleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dvLXRleHRcIik7XHJcbiAgbG9nb1RleHQuaW5uZXJIVE1MID0gXCJBYm92ZSB0aGUgY2l0eS4uLlwiO1xyXG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIHJlc2VydmF0aW9uIGJ1dHRvbiBlbGVtZW50XHJcbiAgbGV0IHJlc2VydmF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXNlcnZhdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc2VydmF0aW9uLWJ1dHRvblwiKTtcclxuICByZXNlcnZhdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSBcIlJlc2VydmF0aW9uXCI7XHJcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkJ1dHRvbik7XHJcblxyXG5cclxuICAvKioqKioqKiogQ2Fyb3VzZWwgZG90cyAqKioqKioqKioqKi9cclxuXHJcbiAgLy8gQWRkIHRocmVlIGRvdHMgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY2Fyb3VzZWwsIHRvIGRpc3BsYXkgYXQgd2hhdCBzdGFnZSB0aGUgY2Fyb3VzZWwgaXNcclxuXHJcbiAgbGV0IGNhcm91c2VsRG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2Fyb3VzZWxEb3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2Fyb3VzZWwtZG90c1wiKTtcclxuICBjYXJvdXNlbERvdHMuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjYXJvdXNlbERvdHMpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgbGV0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZG90LmlubmVySFRNTCA9IFwiLlwiO1xyXG4gICAgY2Fyb3VzZWxEb3RzLmFwcGVuZENoaWxkKGRvdCk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKiogTWlkbGUgY29udGVudCAqKioqKioqKioqKi9cclxuXHJcbiAgLy8gQ3JlYXRlIG1haW4gY29udGFpbmVyIGZvciB0aGUgbWlkZGxlIGNvbnRlbnQsIGFuZCB0aGUgdHdvIGNvbnRhaW5lcnMgd2l0aGluXHJcblxyXG4gIGxldCBtaWRkbGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtaWRkbGVDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWlkZGxlLWNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtaWRkbGVDb250ZW50KTtcclxuXHJcbiAgbGV0IG1pZGRsZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWlkZGxlVG9wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWlkZGxlLXRvcFwiKTtcclxuICBtaWRkbGVUb3AuaW5uZXJIVE1MID0gbWlkZGxlVGV4dENvbnRlbnQ7XHJcbiAgbWlkZGxlVG9wLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgbWlkZGxlQ29udGVudC5hcHBlbmRDaGlsZChtaWRkbGVUb3ApO1xyXG5cclxuICBsZXQgbWlkZGxlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtaWRkbGVCb3R0b20uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtaWRkbGUtYm90dG9tXCIpO1xyXG4gIG1pZGRsZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWlkZGxlQm90dG9tKTtcclxuXHJcblxyXG4gIC8vIEFkZCB0aGUgXCJjaGVmXCIgaW1hZ2UgdG8gdGhlIG1pZGRsZSBjb250ZW50XHJcblxyXG4gIGxldCBjaGVmSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjaGVmSW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlZi1pbWdcIik7XHJcbiAgY2hlZkltZy5zcmMgPSBDaGVmO1xyXG4gIG1pZGRsZUJvdHRvbS5hcHBlbmRDaGlsZChjaGVmSW1nKTtcclxuXHJcbiAgLy8gQWRkIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIG1pZGRsZSBjb250ZW50IFwiY2hlZiB0ZXh0XCIgZWxlbWVudHNcclxuXHJcbiAgbGV0IGNoZWZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaGVmVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWYtdGV4dFwiKTtcclxuICBtaWRkbGVCb3R0b20uYXBwZW5kQ2hpbGQoY2hlZlRleHQpO1xyXG5cclxuICBmb3IgKGxldCBpIGluIGNoZWZUZXh0Q29udGVudCkge1xyXG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGV4dCR7cGFyc2VJbnQoaSkgKyAxfWApO1xyXG4gICAgdGV4dC5pbm5lckhUTUwgPSBjaGVmVGV4dENvbnRlbnRbaV07XHJcbiAgICBjaGVmVGV4dC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIGNoZWZUZXh0LmZpcnN0Q2hpbGQuc3R5bGUuZm9udFdlaWdodCA9IFwiODAwXCJcclxuXHJcbiAgLyoqKioqKioqIEZvb3RlciAqKioqKioqKioqKi9cclxuXHJcbiAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcblxyXG4gIGxldCBjb3B5cmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29weXJpZ2h0VGV4dC5pbm5lckhUTUwgPSBgQ29weXJpZ2h0IMKpICR7Y3VycmVudFllYXJ9IGRvbWluaWsta2lzc2A7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQpO1xyXG5cclxuICBsZXQgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGdpdEh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2RvbWluaWsta2lzc1wiO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWJMaW5rKTtcclxuXHJcbiAgbGV0IGdpdEh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICBnaXRIdWJMb2dvLmNsYXNzTGlzdC5hZGQoXCJmYWJcIik7XHJcbiAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZmEtZ2l0aHViXCIpO1xyXG4gIGdpdEh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViTG9nbyk7XHJcblxyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==