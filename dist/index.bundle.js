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
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables */\r\n\r\n:root {\r\n    --ff-main: \"Open Sans\";\r\n\r\n    --light1: #fcfefe;\r\n    --light2: #6f6c69;\r\n    --reservation-button-clr: #1293db;\r\n\r\n    --font-small: 18px;\r\n    --font-medium: 24px;\r\n    --font-large: 40px;\r\n    --font-xtra-large: 60px;\r\n\r\n    --front: 2;\r\n    --middle: 1;\r\n\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* General */\r\n\r\n#content {\r\n    overflow: hidden;\r\n    flex-direction: column;\r\n}\r\n\r\n.centered-flex {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/* Header and top carousel */\r\n\r\n#header {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    padding: 30px;\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n}\r\n\r\n\r\n#header-tabs {\r\n    flex-direction: row;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    gap: 20px;\r\n}\r\n\r\n#header-tabs li:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#logo-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    font-family: var(--ff-main);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n    background-color: transparent;\r\n    top: 250px;\r\n    gap: 50px;\r\n}\r\n\r\n#logo {\r\n    height: 160px;\r\n}\r\n\r\n#logo-text {\r\n    font-size: var(--font-large);\r\n}\r\n\r\n#reservation-button {\r\n    font-size: var(--font-medium);\r\n    background-color: var(--reservation-button-clr);\r\n    padding: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n#reservation-button:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#carousel-dots {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    align-items: center;\r\n    font-family: var(--ff-main);\r\n    color: black;\r\n    z-index: var(--front);\r\n    top: 850px;\r\n    gap: 10px;\r\n    font-size: var(--font-xtra-large);\r\n}\r\n\r\n#carousel-dots:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#slider {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    overflow: hidden;\r\n    max-height: 940px;\r\n    width: 100%;\r\n    height: 940px;\r\n}\r\n  \r\n.slide {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: all 1s;\r\n    transition-timing-function: cubic-bezier(0, 0.10, 0.11, 1);\r\n}\r\n\r\n#pic1 {\r\n    z-index: var(--middle);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n#pic2 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n#pic3 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n#pic4 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n\r\n/* Middle content */\r\n\r\n#middle-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--light1);\r\n    width: 50%;\r\n    height: 850px;\r\n    align-items: center;\r\n    color: var(--light2);\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n\r\n}\r\n\r\n#middle-top {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n#middle-bottom {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n}\r\n\r\n#chef-img {\r\n    width: 600px;\r\n}\r\n\r\n#chef-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n/* Footer */\r\n\r\n#footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 5px;\r\n    background-color: var(--light2);\r\n    color: var(--light1);\r\n    padding: 10px;\r\n    width: 100%;\r\n    justify-content: center;\r\n    font-size: var(--font-small);\r\n}\r\n\r\n.fa-github {\r\n    color: black;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.fa-github:hover {\r\n    transform: rotate(360deg) scale(1.2);\r\n}\r\n\r\n.fa-rotate-left {\r\n    color: black;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.fa-rotate-left:hover {\r\n    transform: rotate(-360deg) scale(1.2);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;IACI,sBAAsB;;IAEtB,iBAAiB;IACjB,iBAAiB;IACjB,iCAAiC;;IAEjC,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;;IAEvB,UAAU;IACV,WAAW;;AAEf;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA,YAAY;;AAEZ;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA,4BAA4B;;AAE5B;IACI,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,4BAA4B;IAC5B,oBAAoB;IACpB,qBAAqB;AACzB;;;AAGA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;IACV,SAAS;IACT,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,2BAA2B;IAC3B,oBAAoB;IACpB,qBAAqB;IACrB,6BAA6B;IAC7B,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;IAC7B,+CAA+C;IAC/C,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;IACZ,qBAAqB;IACrB,UAAU;IACV,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,0DAA0D;AAC9D;;AAEA;IACI,sBAAsB;IACtB,yDAAgD;AACpD;;AAEA;IACI,yDAAgD;AACpD;;AAEA;IACI,yDAAgD;AACpD;;AAEA;IACI,yDAAgD;AACpD;;;AAGA,mBAAmB;;AAEnB;IACI,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,2BAA2B;IAC3B,4BAA4B;;AAEhC;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,+BAA+B;IAC/B,oBAAoB;IACpB,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;AACzC","sourcesContent":["/* Variables */\r\n\r\n:root {\r\n    --ff-main: \"Open Sans\";\r\n\r\n    --light1: #fcfefe;\r\n    --light2: #6f6c69;\r\n    --reservation-button-clr: #1293db;\r\n\r\n    --font-small: 18px;\r\n    --font-medium: 24px;\r\n    --font-large: 40px;\r\n    --font-xtra-large: 60px;\r\n\r\n    --front: 2;\r\n    --middle: 1;\r\n\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* General */\r\n\r\n#content {\r\n    overflow: hidden;\r\n    flex-direction: column;\r\n}\r\n\r\n.centered-flex {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/* Header and top carousel */\r\n\r\n#header {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    padding: 30px;\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n}\r\n\r\n\r\n#header-tabs {\r\n    flex-direction: row;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    gap: 20px;\r\n}\r\n\r\n#header-tabs li:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#logo-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    font-family: var(--ff-main);\r\n    color: var(--light1);\r\n    z-index: var(--front);\r\n    background-color: transparent;\r\n    top: 250px;\r\n    gap: 50px;\r\n}\r\n\r\n#logo {\r\n    height: 160px;\r\n}\r\n\r\n#logo-text {\r\n    font-size: var(--font-large);\r\n}\r\n\r\n#reservation-button {\r\n    font-size: var(--font-medium);\r\n    background-color: var(--reservation-button-clr);\r\n    padding: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n#reservation-button:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#carousel-dots {\r\n    flex-direction: row;\r\n    position: absolute;\r\n    align-items: center;\r\n    font-family: var(--ff-main);\r\n    color: black;\r\n    z-index: var(--front);\r\n    top: 850px;\r\n    gap: 10px;\r\n    font-size: var(--font-xtra-large);\r\n}\r\n\r\n#carousel-dots:hover {\r\n    cursor: grab;\r\n}\r\n\r\n#slider {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    overflow: hidden;\r\n    max-height: 940px;\r\n    width: 100%;\r\n    height: 940px;\r\n}\r\n  \r\n.slide {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: all 1s;\r\n    transition-timing-function: cubic-bezier(0, 0.10, 0.11, 1);\r\n}\r\n\r\n#pic1 {\r\n    z-index: var(--middle);\r\n    background-image: url(\"./media/restaurant1.jpg\");\r\n}\r\n\r\n#pic2 {\r\n    background-image: url(\"./media/restaurant2.jpg\");\r\n}\r\n\r\n#pic3 {\r\n    background-image: url(\"./media/restaurant3.jpg\");\r\n}\r\n\r\n#pic4 {\r\n    background-image: url(\"./media/restaurant4.jpg\");\r\n}\r\n\r\n\r\n/* Middle content */\r\n\r\n#middle-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--light1);\r\n    width: 50%;\r\n    height: 850px;\r\n    align-items: center;\r\n    color: var(--light2);\r\n    font-family: var(--ff-main);\r\n    font-size: var(--font-small);\r\n\r\n}\r\n\r\n#middle-top {\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n\r\n#middle-bottom {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n}\r\n\r\n#chef-img {\r\n    width: 600px;\r\n}\r\n\r\n#chef-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n/* Footer */\r\n\r\n#footer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 5px;\r\n    background-color: var(--light2);\r\n    color: var(--light1);\r\n    padding: 10px;\r\n    width: 100%;\r\n    justify-content: center;\r\n    font-size: var(--font-small);\r\n}\r\n\r\n.fa-github {\r\n    color: black;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.fa-github:hover {\r\n    transform: rotate(360deg) scale(1.2);\r\n}\r\n\r\n.fa-rotate-left {\r\n    color: black;\r\n    transition: transform 0.3s ease-in-out;\r\n}\r\n\r\n.fa-rotate-left:hover {\r\n    transform: rotate(-360deg) scale(1.2);\r\n}"],"sourceRoot":""}]);
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
/* import Logo from "./media/logo.png";
import Chef from "./media/chef.PNG"; */

function aboutUsPage() {

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
    li.classList.add("navi");
    li.setAttribute("id", navigationOptions[i].toLowerCase().replace(" ", "-"));
    headerTabs.appendChild(li);
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
  chefImg.src = Chef;
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
  console.log(tab);
  switch (tab) {
    case "about-us":
      (0,_aboutUs__WEBPACK_IMPORTED_MODULE_2__["default"])();
      break;
    case "menu":
      break;
    case "contact-us":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vc3JjL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3NpdGUtcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaXRlLXByb2plY3QvLi9zcmMvcGFnZUNvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbWVkaWEvcmVzdGF1cmFudDEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9yZXN0YXVyYW50Mi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL21lZGlhL3Jlc3RhdXJhbnQzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vbWVkaWEvcmVzdGF1cmFudDQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVmFyaWFibGVzICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWZmLW1haW46IFxcXCJPcGVuIFNhbnNcXFwiO1xcclxcblxcclxcbiAgICAtLWxpZ2h0MTogI2ZjZmVmZTtcXHJcXG4gICAgLS1saWdodDI6ICM2ZjZjNjk7XFxyXFxuICAgIC0tcmVzZXJ2YXRpb24tYnV0dG9uLWNscjogIzEyOTNkYjtcXHJcXG5cXHJcXG4gICAgLS1mb250LXNtYWxsOiAxOHB4O1xcclxcbiAgICAtLWZvbnQtbWVkaXVtOiAyNHB4O1xcclxcbiAgICAtLWZvbnQtbGFyZ2U6IDQwcHg7XFxyXFxuICAgIC0tZm9udC14dHJhLWxhcmdlOiA2MHB4O1xcclxcblxcclxcbiAgICAtLWZyb250OiAyO1xcclxcbiAgICAtLW1pZGRsZTogMTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2VuZXJhbCAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkLWZsZXgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgYW5kIHRvcCBjYXJvdXNlbCAqL1xcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2hlYWRlci10YWJzIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci10YWJzIGxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRvcDogMjUwcHg7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZXNlcnZhdGlvbi1idXR0b24tY2xyKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuI2Nhcm91c2VsLWRvdHMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1mcm9udCk7XFxyXFxuICAgIHRvcDogODUwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXh0cmEtbGFyZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2Fyb3VzZWwtZG90czpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWF4LWhlaWdodDogOTQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDk0MHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi5zbGlkZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMC4xMCwgMC4xMSwgMSk7XFxyXFxufVxcclxcblxcclxcbiNwaWMxIHtcXHJcXG4gICAgei1pbmRleDogdmFyKC0tbWlkZGxlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BpYzIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGljMyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbiNwaWM0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTWlkZGxlIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4jbWlkZGxlLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDEpO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDg1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQyKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLW1haW4pO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbWlkZGxlLXRvcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNtaWRkbGUtYm90dG9tIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2hlZi1pbWcge1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbiNjaGVmLXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWdpdGh1YiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5mYS1naXRodWI6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5mYS1yb3RhdGUtbGVmdCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5mYS1yb3RhdGUtbGVmdDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIHNjYWxlKDEuMik7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7QUFFZDtJQUNJLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQ0FBaUM7O0lBRWpDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1Qjs7SUFFdkIsVUFBVTtJQUNWLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQSw0QkFBNEI7O0FBRTVCO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHlEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHlEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHlEQUFnRDtBQUNwRDs7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVmFyaWFibGVzICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWZmLW1haW46IFxcXCJPcGVuIFNhbnNcXFwiO1xcclxcblxcclxcbiAgICAtLWxpZ2h0MTogI2ZjZmVmZTtcXHJcXG4gICAgLS1saWdodDI6ICM2ZjZjNjk7XFxyXFxuICAgIC0tcmVzZXJ2YXRpb24tYnV0dG9uLWNscjogIzEyOTNkYjtcXHJcXG5cXHJcXG4gICAgLS1mb250LXNtYWxsOiAxOHB4O1xcclxcbiAgICAtLWZvbnQtbWVkaXVtOiAyNHB4O1xcclxcbiAgICAtLWZvbnQtbGFyZ2U6IDQwcHg7XFxyXFxuICAgIC0tZm9udC14dHJhLWxhcmdlOiA2MHB4O1xcclxcblxcclxcbiAgICAtLWZyb250OiAyO1xcclxcbiAgICAtLW1pZGRsZTogMTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2VuZXJhbCAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkLWZsZXgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgYW5kIHRvcCBjYXJvdXNlbCAqL1xcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2hlYWRlci10YWJzIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci10YWJzIGxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHotaW5kZXg6IHZhcigtLWZyb250KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRvcDogMjUwcHg7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZXNlcnZhdGlvbi1idXR0b24tY2xyKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmF0aW9uLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuI2Nhcm91c2VsLWRvdHMge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tYWluKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB6LWluZGV4OiB2YXIoLS1mcm9udCk7XFxyXFxuICAgIHRvcDogODUwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXh0cmEtbGFyZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2Fyb3VzZWwtZG90czpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWF4LWhlaWdodDogOTQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDk0MHB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi5zbGlkZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMC4xMCwgMC4xMSwgMSk7XFxyXFxufVxcclxcblxcclxcbiNwaWMxIHtcXHJcXG4gICAgei1pbmRleDogdmFyKC0tbWlkZGxlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL21lZGlhL3Jlc3RhdXJhbnQxLmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGljMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9tZWRpYS9yZXN0YXVyYW50Mi5qcGdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BpYzMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vbWVkaWEvcmVzdGF1cmFudDMuanBnXFxcIik7XFxyXFxufVxcclxcblxcclxcbiNwaWM0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL21lZGlhL3Jlc3RhdXJhbnQ0LmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNaWRkbGUgY29udGVudCAqL1xcclxcblxcclxcbiNtaWRkbGUtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0MSk7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogODUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodDIpO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtbWFpbik7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNtaWRkbGUtdG9wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21pZGRsZS1ib3R0b20ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjaGVmLWltZyB7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWYtdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodDIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQxKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZ2l0aHViIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXJvdGF0ZS1sZWZ0IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXJvdGF0ZS1sZWZ0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgc2NhbGUoMS4yKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBpbXBvcnQgTG9nbyBmcm9tIFwiLi9tZWRpYS9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgQ2hlZiBmcm9tIFwiLi9tZWRpYS9jaGVmLlBOR1wiOyAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRVc1BhZ2UoKSB7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRpb25PcHRpb25zID0gW1wiSG9tZVwiLCBcIkFib3V0IFVzXCIsIFwiTWVudVwiLCBcIkNvbnRhY3QgVXNcIl07XHJcbiAgY29uc3QgbWlkZGxlVGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIGEgc2VtIGF0IGlwc3VtIGNvbnNlcXVhdCBoZW5kcmVyaXQgcXVpcyBhdCB0b3J0b3IuIER1aXMgbmVjIGRpZ25pc3NpbSBleC5cIjtcclxuICBjb25zdCBjaGVmVGV4dENvbnRlbnQgPSBbXCJPVVIgQ0hFRlwiLCBcIlJhbmRhbGwgUmlzaGlcIiwgXCJQaGFzZWxsdXMgcnV0cnVtIG9kaW8gdmVsIG1hdHRpcyBzZW1wZXIuIEV0aWFtIGRpZ25pc3NpbSBhbnRlIGFyY3UsIHZlbCBmZXJtZW50dW0gZG9sb3IgdnVscHV0YXRlIHZlbC4gUHJvaW4gZmFjaWxpc2lzIHRlbXB1cyBhY2N1bXNhbi4gQ3JhcyBzZWQgdm9sdXRwYXQgYXJjdS4gTWFlY2VuYXMgdXQgc29sbGljaXR1ZGluIG1hdXJpcy4gTW9yYmkgZWxlbWVudHVtIG5pYmggc2l0IGFtZXQgbmliaCB2ZXN0aWJ1bHVtLCBjb25ndWUgcG9ydGEgbWFzc2EgbGFvcmVldC4gU2VkIGFjY3Vtc2FuIGVnZXN0YXMgbWFnbmEsIG5lYyBldWlzbW9kIGVzdCB0aW5jaWR1bnQgdWxsYW1jb3JwZXIuIENyYXMgcG9ydGEgaXBzdW0gZGFwaWJ1cywgY3Vyc3VzIG1ldHVzIG5lYywgdmVuZW5hdGlzIG51bmMuIFByb2luIG1vbGVzdGllLCBsZWN0dXMgYSBhdWN0b3IgdmFyaXVzLCBtYWduYSBudWxsYSBwZWxsZW50ZXNxdWUgb2RpbywgYWMgZWxlaWZlbmQgc2FwaWVuIG1hZ25hIGV0IG1ldHVzLiBBbGlxdWFtIHNlZCBhdWd1ZSBsaWJlcm8uIEZ1c2NlIGVnZXQgcHVsdmluYXIgbWFzc2EsIGV1IGZlcm1lbnR1bSBzZW0uIE5hbSBwZWxsZW50ZXNxdWUsIG5pc2kgZXQgc2NlbGVyaXNxdWUgcHJldGl1bSwgbmlzbCBtZXR1cyBlbGVtZW50dW0gbmliaCwgZXUgYWNjdW1zYW4gbWV0dXMgZXJhdCBlZ2V0IGFudGUuIERvbmVjIGluIHZlc3RpYnVsdW0gbmlzaS4gRHVpcyB2aXRhZSBmZWxpcyBub24gbWF1cmlzIHNjZWxlcmlzcXVlIGF1Y3RvciBxdWlzIGVnZXQgZG9sb3IuIEluIGEgZGlnbmlzc2ltIGxhY3VzLCBldSBhdWN0b3IgZXguXCJdO1xyXG5cclxuICAvLyBDYWNoZSB0aGUgbWFpbiBcImNvbnRlbnRcIiBlbGVtZW50LCB3aGljaCB3aWxsIGNvbnRhaW4gZXZlcnl0aGluZyBvbiB0aGUgcGFnZVxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIC8qKioqKioqKiBIRUFERVIgKioqKioqKioqKiovXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbWFpbiBcImhlYWRlclwiIGVsZW1lbnRcclxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJlZC1mbGV4XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBcInVsXCIgZWxlbWVudCBmb3IgdGhlIFNpdGUgTmF2aWdhdGlvbiBNZW51XHJcbiAgbGV0IGhlYWRlclRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgaGVhZGVyVGFicy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10YWJzXCIpO1xyXG4gIGhlYWRlclRhYnMuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRhYnMpO1xyXG5cclxuICAvLyBDcmVhdGUgbGlzdCBlbGVtZW50cyBvZiB0aGUgU2l0ZSBOYXZpZ2F0aW9uIE1lbnVcclxuICBmb3IgKGxldCBpIGluIG5hdmlnYXRpb25PcHRpb25zKSB7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5pbm5lckhUTUwgPSBuYXZpZ2F0aW9uT3B0aW9uc1tpXTtcclxuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJuYXZpXCIpO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmF2aWdhdGlvbk9wdGlvbnNbaV0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiIFwiLCBcIi1cIikpO1xyXG4gICAgaGVhZGVyVGFicy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKiogTWlkbGUgY29udGVudCAqKioqKioqKioqKi9cclxuXHJcbiAgLy8gQ3JlYXRlIG1haW4gY29udGFpbmVyIGZvciB0aGUgbWlkZGxlIGNvbnRlbnQsIGFuZCB0aGUgdHdvIGNvbnRhaW5lcnMgd2l0aGluXHJcblxyXG4gIGxldCBtaWRkbGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtaWRkbGVDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWlkZGxlLWNvbnRlbnRcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtaWRkbGVDb250ZW50KTtcclxuXHJcbiAgbGV0IG1pZGRsZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWlkZGxlVG9wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWlkZGxlLXRvcFwiKTtcclxuICBtaWRkbGVUb3AuaW5uZXJIVE1MID0gbWlkZGxlVGV4dENvbnRlbnQ7XHJcbiAgbWlkZGxlVG9wLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgbWlkZGxlQ29udGVudC5hcHBlbmRDaGlsZChtaWRkbGVUb3ApO1xyXG5cclxuICBsZXQgbWlkZGxlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtaWRkbGVCb3R0b20uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtaWRkbGUtYm90dG9tXCIpO1xyXG4gIG1pZGRsZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWlkZGxlQm90dG9tKTtcclxuXHJcblxyXG4gIC8vIEFkZCB0aGUgXCJjaGVmXCIgaW1hZ2UgdG8gdGhlIG1pZGRsZSBjb250ZW50XHJcblxyXG4gIGxldCBjaGVmSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjaGVmSW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlZi1pbWdcIik7XHJcbiAgY2hlZkltZy5zcmMgPSBDaGVmO1xyXG4gIG1pZGRsZUJvdHRvbS5hcHBlbmRDaGlsZChjaGVmSW1nKTtcclxuXHJcbiAgLy8gQWRkIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIG1pZGRsZSBjb250ZW50IFwiY2hlZiB0ZXh0XCIgZWxlbWVudHNcclxuXHJcbiAgbGV0IGNoZWZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjaGVmVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWYtdGV4dFwiKTtcclxuICBtaWRkbGVCb3R0b20uYXBwZW5kQ2hpbGQoY2hlZlRleHQpO1xyXG5cclxuICBmb3IgKGxldCBpIGluIGNoZWZUZXh0Q29udGVudCkge1xyXG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGV4dCR7cGFyc2VJbnQoaSkgKyAxfWApO1xyXG4gICAgdGV4dC5pbm5lckhUTUwgPSBjaGVmVGV4dENvbnRlbnRbaV07XHJcbiAgICBjaGVmVGV4dC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIGNoZWZUZXh0LmZpcnN0Q2hpbGQuc3R5bGUuZm9udFdlaWdodCA9IFwiODAwXCJcclxuXHJcbiAgLyoqKioqKioqIEZvb3RlciAqKioqKioqKioqKi9cclxuXHJcbiAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcblxyXG4gIGxldCBjb3B5cmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29weXJpZ2h0VGV4dC5pbm5lckhUTUwgPSBgQ29weXJpZ2h0IMKpICR7Y3VycmVudFllYXJ9IGRvbWluaWsta2lzc2A7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQpO1xyXG5cclxuICBsZXQgZ2l0SHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGdpdEh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2RvbWluaWsta2lzc1wiO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWJMaW5rKTtcclxuXHJcbiAgbGV0IGdpdEh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICBnaXRIdWJMb2dvLmNsYXNzTGlzdC5hZGQoXCJmYWJcIik7XHJcbiAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZmEtZ2l0aHViXCIpO1xyXG4gIGdpdEh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViTG9nbyk7XHJcblxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXJ0aW5nUG9zaXRpb24oc2xpZGVzKSB7ICBcclxuICAgIC8vIGxvb3AgdGhyb3VnaCBjYXJvdXNlbCBwaWN0dXJlcyBhbmQgc2V0IGVhY2ggcGljdHVyZSdzIHRyYW5zbGF0ZVggcHJvcGVydHkgdG8gaW5kZXggKiAxMDAlIFxyXG4gICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpbmR4KSA9PiB7XHJcbiAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aW5keCAqIDEwMH0lKWA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVDYXJvdXNlbChpbWFnZXMsIHRpbWVyLCBjdXJyZW50ID0gMCkge1xyXG4gICAgY29uc3QgbWF4U2xpZGVzID0gaW1hZ2VzLmxlbmd0aCAtIDE7XHJcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsxMDAgKiAoaW5kZXggLSBjdXJyZW50KX0lKWA7XHJcbiAgICB9KTtcclxuICAgIGN1cnJlbnQgPSAoY3VycmVudCAhPT0gbWF4U2xpZGVzKSA/IGN1cnJlbnQgKyAxIDogMDtcclxuICAgIHNldFRpbWVvdXQobW92ZUNhcm91c2VsLCB0aW1lciwgaW1hZ2VzLCB0aW1lciwgY3VycmVudCk7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3BhZ2VDb250ZW50XCI7XHJcbmltcG9ydCBhYm91dFVzUGFnZSBmcm9tICcuL2Fib3V0VXMnO1xyXG5pbXBvcnQgeyBzZXRTdGFydGluZ1Bvc2l0aW9uLCBtb3ZlQ2Fyb3VzZWwgfSBmcm9tICcuL2Nhcm91c2VsJztcclxuXHJcbmNvbnN0IGZpcnN0TG9hZCA9ICgoKSA9PiB7XHJcbiAgbGV0IGZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmaXJzdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XHJcbiAgZmlyc3REaXYuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmaXJzdERpdik7XHJcblxyXG4gIHNpdGVDb250cm9sKCk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBzaXRlQ29udHJvbCh0YWIpIHtcclxuICBjb25zb2xlLmxvZyh0YWIpO1xyXG4gIHN3aXRjaCAodGFiKSB7XHJcbiAgICBjYXNlIFwiYWJvdXQtdXNcIjpcclxuICAgICAgYWJvdXRVc1BhZ2UoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibWVudVwiOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJjb250YWN0LXVzXCI6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgaG9tZVBhZ2UoKTtcclxuICAgICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKTtcclxuICAgICAgc2V0U3RhcnRpbmdQb3NpdGlvbihzbGlkZXMpO1xyXG4gICAgICBtb3ZlQ2Fyb3VzZWwoc2xpZGVzLCA3MDAwKTtcclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlVGFiU3dpdGNoKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUYWJTd2l0Y2goKSB7XHJcbiAgLy8gU2V0IHVwIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIHNpdGUgbmF2aWdhdGlvbiB0YWJzXHJcbiAgY29uc3QgbmF2aVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlcIik7XHJcbiAgbmF2aVRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAvLyBXaGVuIG9uZSBvZiB0aGUgdGFicyBpcyBjbGlja2VkLi4uXHJcbiAgICAvLyBTdG9yZSB0aGUgaWQgb2YgdGhlIGNsaWNrZWQgdGFiIGZvciBsYXRlciByZWZlcmVuY2VcclxuICAgIGxldCB0YWJDbGlja2VkID0gZXZlbnQudGFyZ2V0LmlkO1xyXG5cclxuICAgIC8vIENsZWFyIGFsbCBjaGlsZCBub2RlcyBmcm9tIHVuZGVyIHRoZSBcImNvbnRlbnRcIiBkaXZcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgLy8gUG9wdWxhdGUgdGhlIHBhZ2Ugd2l0aCB0aGUgSFRNTCBjb250ZW50IGFuZCBzdHlsZXMgb2YgdGhlIHRhYiB0aGF0IHdhcyBjbGlja2VkXHJcbiAgICBzaXRlQ29udHJvbCh0YWJDbGlja2VkKTtcclxuICB9KSk7XHJcbn0iLCJpbXBvcnQgTG9nbyBmcm9tIFwiLi9tZWRpYS9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgQ2hlZiBmcm9tIFwiLi9tZWRpYS9jaGVmLlBOR1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRpb25PcHRpb25zID0gW1wiSG9tZVwiLCBcIkFib3V0IFVzXCIsIFwiTWVudVwiLCBcIkNvbnRhY3QgVXNcIl07XHJcbiAgY29uc3QgbWlkZGxlVGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIGEgc2VtIGF0IGlwc3VtIGNvbnNlcXVhdCBoZW5kcmVyaXQgcXVpcyBhdCB0b3J0b3IuIER1aXMgbmVjIGRpZ25pc3NpbSBleC5cIjtcclxuICBjb25zdCBjaGVmVGV4dENvbnRlbnQgPSBbXCJPVVIgQ0hFRlwiLCBcIlJhbmRhbGwgUmlzaGlcIiwgXCJQaGFzZWxsdXMgcnV0cnVtIG9kaW8gdmVsIG1hdHRpcyBzZW1wZXIuIEV0aWFtIGRpZ25pc3NpbSBhbnRlIGFyY3UsIHZlbCBmZXJtZW50dW0gZG9sb3IgdnVscHV0YXRlIHZlbC4gUHJvaW4gZmFjaWxpc2lzIHRlbXB1cyBhY2N1bXNhbi4gQ3JhcyBzZWQgdm9sdXRwYXQgYXJjdS4gTWFlY2VuYXMgdXQgc29sbGljaXR1ZGluIG1hdXJpcy4gTW9yYmkgZWxlbWVudHVtIG5pYmggc2l0IGFtZXQgbmliaCB2ZXN0aWJ1bHVtLCBjb25ndWUgcG9ydGEgbWFzc2EgbGFvcmVldC4gU2VkIGFjY3Vtc2FuIGVnZXN0YXMgbWFnbmEsIG5lYyBldWlzbW9kIGVzdCB0aW5jaWR1bnQgdWxsYW1jb3JwZXIuIENyYXMgcG9ydGEgaXBzdW0gZGFwaWJ1cywgY3Vyc3VzIG1ldHVzIG5lYywgdmVuZW5hdGlzIG51bmMuIFByb2luIG1vbGVzdGllLCBsZWN0dXMgYSBhdWN0b3IgdmFyaXVzLCBtYWduYSBudWxsYSBwZWxsZW50ZXNxdWUgb2RpbywgYWMgZWxlaWZlbmQgc2FwaWVuIG1hZ25hIGV0IG1ldHVzLiBBbGlxdWFtIHNlZCBhdWd1ZSBsaWJlcm8uIEZ1c2NlIGVnZXQgcHVsdmluYXIgbWFzc2EsIGV1IGZlcm1lbnR1bSBzZW0uIE5hbSBwZWxsZW50ZXNxdWUsIG5pc2kgZXQgc2NlbGVyaXNxdWUgcHJldGl1bSwgbmlzbCBtZXR1cyBlbGVtZW50dW0gbmliaCwgZXUgYWNjdW1zYW4gbWV0dXMgZXJhdCBlZ2V0IGFudGUuIERvbmVjIGluIHZlc3RpYnVsdW0gbmlzaS4gRHVpcyB2aXRhZSBmZWxpcyBub24gbWF1cmlzIHNjZWxlcmlzcXVlIGF1Y3RvciBxdWlzIGVnZXQgZG9sb3IuIEluIGEgZGlnbmlzc2ltIGxhY3VzLCBldSBhdWN0b3IgZXguXCJdO1xyXG5cclxuICAvLyBDYWNoZSB0aGUgbWFpbiBcImNvbnRlbnRcIiBlbGVtZW50LCB3aGljaCB3aWxsIGNvbnRhaW4gZXZlcnl0aGluZyBvbiB0aGUgcGFnZVxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIC8qKioqKioqKiBIRUFERVIgKioqKioqKioqKiovXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbWFpbiBcImhlYWRlclwiIGVsZW1lbnRcclxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJlZC1mbGV4XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBcInVsXCIgZWxlbWVudCBmb3IgdGhlIFNpdGUgTmF2aWdhdGlvbiBNZW51XHJcbiAgbGV0IGhlYWRlclRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgaGVhZGVyVGFicy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10YWJzXCIpO1xyXG4gIGhlYWRlclRhYnMuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRhYnMpO1xyXG5cclxuICAvLyBDcmVhdGUgbGlzdCBlbGVtZW50cyBvZiB0aGUgU2l0ZSBOYXZpZ2F0aW9uIE1lbnVcclxuICBmb3IgKGxldCBpIGluIG5hdmlnYXRpb25PcHRpb25zKSB7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5pbm5lckhUTUwgPSBuYXZpZ2F0aW9uT3B0aW9uc1tpXTtcclxuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJuYXZpXCIpO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmF2aWdhdGlvbk9wdGlvbnNbaV0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKFwiIFwiLCBcIi1cIikpO1xyXG4gICAgaGVhZGVyVGFicy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKiogQ2Fyb3VzZWwgKioqKioqKioqKiovXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbWFpbiBcInNsaWRlclwiIGVsZW1lbnRcclxuICBsZXQgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGlkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzbGlkZXJcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChzbGlkZXIpO1xyXG5cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBmb3VyIHNsaWRlcyBvZiB0aGUgY2Fyb3VzZWwgd2l0aCB0aGUgYmcgaW1hZ2VzIGFkZGVkXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgIGxldCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIik7XHJcbiAgICBzbGlkZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGljJHtpKzF9YCk7XHJcbiAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoc2xpZGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqIExvZ28gY29udGFpbmVyICoqKioqKioqKioqL1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIGxvZ28gY29udGFpbmVyIGVsZW1lbnRcclxuICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9nb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ28tY29udGFpbmVyXCIpO1xyXG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBsb2dvIGVsZW1lbnQgZm9yIHRoZSBsb2dvIGltYWdlXHJcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxvZ28uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dvXCIpO1xyXG4gIGxvZ28uc3JjID0gTG9nbztcclxuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIGxvZ290ZXh0IGVsZW1lbnQgZm9yIHRoZSBcIm1vdHRvXCJcclxuICBsZXQgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ29UZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nby10ZXh0XCIpO1xyXG4gIGxvZ29UZXh0LmlubmVySFRNTCA9IFwiQWJvdmUgdGhlIGNpdHkuLi5cIjtcclxuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSByZXNlcnZhdGlvbiBidXR0b24gZWxlbWVudFxyXG4gIGxldCByZXNlcnZhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmVzZXJ2YXRpb25CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXNlcnZhdGlvbi1idXR0b25cIik7XHJcbiAgcmVzZXJ2YXRpb25CdXR0b24uaW5uZXJIVE1MID0gXCJSZXNlcnZhdGlvblwiO1xyXG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25CdXR0b24pO1xyXG5cclxuXHJcbiAgLyoqKioqKioqIENhcm91c2VsIGRvdHMgKioqKioqKioqKiovXHJcblxyXG4gIC8vIEFkZCB0aHJlZSBkb3RzIHRvIHRoZSBib3R0b20gb2YgdGhlIGNhcm91c2VsLCB0byBkaXNwbGF5IGF0IHdoYXQgc3RhZ2UgdGhlIGNhcm91c2VsIGlzXHJcblxyXG4gIGxldCBjYXJvdXNlbERvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhcm91c2VsRG90cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhcm91c2VsLWRvdHNcIik7XHJcbiAgY2Fyb3VzZWxEb3RzLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJlZC1mbGV4XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxEb3RzKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGxldCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRvdC5pbm5lckhUTUwgPSBcIi5cIjtcclxuICAgIGNhcm91c2VsRG90cy5hcHBlbmRDaGlsZChkb3QpO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqIE1pZGxlIGNvbnRlbnQgKioqKioqKioqKiovXHJcblxyXG4gIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lciBmb3IgdGhlIG1pZGRsZSBjb250ZW50LCBhbmQgdGhlIHR3byBjb250YWluZXJzIHdpdGhpblxyXG5cclxuICBsZXQgbWlkZGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWlkZGxlQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1pZGRsZS1jb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWlkZGxlQ29udGVudCk7XHJcblxyXG4gIGxldCBtaWRkbGVUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1pZGRsZVRvcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1pZGRsZS10b3BcIik7XHJcbiAgbWlkZGxlVG9wLmlubmVySFRNTCA9IG1pZGRsZVRleHRDb250ZW50O1xyXG4gIG1pZGRsZVRvcC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIG1pZGRsZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWlkZGxlVG9wKTtcclxuXHJcbiAgbGV0IG1pZGRsZUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWlkZGxlQm90dG9tLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWlkZGxlLWJvdHRvbVwiKTtcclxuICBtaWRkbGVDb250ZW50LmFwcGVuZENoaWxkKG1pZGRsZUJvdHRvbSk7XHJcblxyXG5cclxuICAvLyBBZGQgdGhlIFwiY2hlZlwiIGltYWdlIHRvIHRoZSBtaWRkbGUgY29udGVudFxyXG5cclxuICBsZXQgY2hlZkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2hlZkltZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWYtaW1nXCIpO1xyXG4gIGNoZWZJbWcuc3JjID0gQ2hlZjtcclxuICBtaWRkbGVCb3R0b20uYXBwZW5kQ2hpbGQoY2hlZkltZyk7XHJcblxyXG4gIC8vIEFkZCB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBtaWRkbGUgY29udGVudCBcImNoZWYgdGV4dFwiIGVsZW1lbnRzXHJcblxyXG4gIGxldCBjaGVmVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2hlZlRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVmLXRleHRcIik7XHJcbiAgbWlkZGxlQm90dG9tLmFwcGVuZENoaWxkKGNoZWZUZXh0KTtcclxuXHJcbiAgZm9yIChsZXQgaSBpbiBjaGVmVGV4dENvbnRlbnQpIHtcclxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRleHQke3BhcnNlSW50KGkpICsgMX1gKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gY2hlZlRleHRDb250ZW50W2ldO1xyXG4gICAgY2hlZlRleHQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBjaGVmVGV4dC5maXJzdENoaWxkLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjgwMFwiXHJcblxyXG4gIC8qKioqKioqKiBGb290ZXIgKioqKioqKioqKiovXHJcblxyXG4gIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG5cclxuICBsZXQgY29weXJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvcHlyaWdodFRleHQuaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAke2N1cnJlbnRZZWFyfSBkb21pbmlrLWtpc3NgO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRUZXh0KTtcclxuXHJcbiAgbGV0IGdpdEh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBnaXRIdWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9kb21pbmlrLWtpc3NcIjtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViTGluayk7XHJcblxyXG4gIGxldCBnaXRIdWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZmFiXCIpO1xyXG4gIGdpdEh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImZhLWdpdGh1YlwiKTtcclxuICBnaXRIdWJMaW5rLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==