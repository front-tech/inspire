/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/single-spa-html/lib/single-spa-html.js":
/*!*************************************************************!*\
  !*** ./node_modules/single-spa-html/lib/single-spa-html.js ***!
  \*************************************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(typeof globalThis !== \"undefined\" ? globalThis : typeof self !== \"undefined\" ? self : this, function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = singleSpaHtml;\n\n  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\n  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n  var defaultOpts = {\n    template: \"\",\n    domElementGetter: null\n  };\n\n  function singleSpaHtml(opts) {\n    if (!opts) {\n      throw Error(\"single-spa-html must be called with an opts object\");\n    }\n\n    opts = _objectSpread(_objectSpread({}, defaultOpts), opts);\n\n    if ((typeof opts.template !== \"string\" || opts.template.trim().length === 0) && typeof opts.template !== \"function\") {\n      throw Error(\"single-spa-html must be passed a 'template' opt that is a non empty string or function\");\n    }\n\n    if (opts.domElementGetter && typeof opts.domElementGetter !== \"function\") {\n      throw Error(\"single-spa-html was given 'opts.domElementGetter', but it isn't a function\");\n    }\n\n    return {\n      bootstrap: bootstrap.bind(null, opts),\n      mount: mount.bind(null, opts),\n      unmount: unmount.bind(null, opts)\n    };\n  }\n\n  function bootstrap(opts, props) {\n    return Promise.resolve();\n  }\n\n  function mount(opts, props) {\n    return Promise.resolve(typeof opts.template === \"function\" ? opts.template(props) : opts.template).then(function (template) {\n      var domElementGetter = chooseDomElementGetter(opts, props);\n      var domEl = domElementGetter(props);\n\n      if (!domEl) {\n        throw Error(\"single-spa-html: domElementGetter did not return a valid dom element\");\n      }\n\n      domEl.innerHTML = template;\n    });\n  }\n\n  function unmount(opts, props) {\n    return Promise.resolve().then(function () {\n      var domElementGetter = chooseDomElementGetter(opts, props);\n      var domEl = domElementGetter(props);\n\n      if (!domEl) {\n        throw Error(\"single-spa-html: domElementGetter did not return a valid dom element\");\n      }\n\n      domEl.innerHTML = \"\";\n    });\n  }\n\n  function chooseDomElementGetter(opts, props) {\n    if (props.domElement) {\n      return function () {\n        return props.domElement;\n      };\n    } else if (props.domElementGetter) {\n      return props.domElementGetter;\n    } else if (opts.domElementGetter) {\n      return opts.domElementGetter;\n    } else {\n      return defaultDomElementGetter(props);\n    }\n  }\n\n  function defaultDomElementGetter(props) {\n    var name = props.appName || props.name;\n\n    if (!name) {\n      throw Error(\"single-spa-html was not given an application name as a prop, so it can't make a unique dom element container for the ht l application\");\n    }\n\n    var htmlId = \"single-spa-application:\".concat(name);\n    return function defaultDomEl() {\n      var domElement = document.getElementById(htmlId);\n\n      if (!domElement) {\n        domElement = document.createElement(\"div\");\n        domElement.id = htmlId;\n        document.body.appendChild(domElement);\n      }\n\n      return domElement;\n    };\n  }\n});\n//# sourceMappingURL=single-spa-html.js.map\n\n//# sourceURL=webpack://inspire/./node_modules/single-spa-html/lib/single-spa-html.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bootstrap\": () => (/* binding */ bootstrap),\n/* harmony export */   \"mount\": () => (/* binding */ mount),\n/* harmony export */   \"unmount\": () => (/* binding */ unmount)\n/* harmony export */ });\n/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa-html */ \"./node_modules/single-spa-html/lib/single-spa-html.js\");\n/* harmony import */ var single_spa_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(single_spa_html__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ItemsList extends HTMLElement {\n  constructor() {\n    // establish prototype chain\n    super();\n\n    // attaches shadow tree and returns shadow root reference\n    const shadow = this.attachShadow({ mode: 'open' });\n\n    // creating a container for the items-list component\n    const ItemsListContainer = document.createElement('div');\n\n    // get attribute values from getters\n    const title = this.title;\n    const listItems = this.items;\n\n    // adding a class to our container for the sake of clarity\n    ItemsListContainer.classList.add('items-list');\n\n    // creating the inner HTML of the items list element\n    ItemsListContainer.innerHTML = `\n      <style>\n        ul {\n          padding: 0;\n        } \n        li,\n        div > div {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n        \n        .items-list {\n          color: #2b2b2b;\n          font-family: sans-serif;\n          margin: 0 auto;\n          max-width: 350px;\n          padding-top: 5rem;\n        }\n        \n        .list-item {\n          display: block;\n          border: 1px solid gray;\n          border-radius: 2px;\n          margin-bottom: 10px;\n        }\n        \n        .list-item a {\n            align-items: center;\n            display: block;\n            display: flex;\n            flex-direction: column;\n            color: black;\n            text-decoration: none;\n            cursor: pointer;\n        }\n        \n        .list-item:hover {\n            border: 1px solid blue;\n        }\n        \n        .list-item img {\n            display: block;\n        }\n      </style>\n      <h3>${title}</h3>\n      <ul class=\"item-list\">\n        ${listItems.map(item => `\n          <li class=\"list-item\">\n            <a href=\"${item.url}?product=${item.id}\">\n              <img src=\"${item.img}\">\n              <span>${item.name}</span>\n            </a>\n          </li>\n        `).join('')}\n      </ul>\n    `;\n\n    // appending the container to the shadow DOM\n    shadow.appendChild(ItemsListContainer);\n  }\n\n  // gathering data from element attributes\n  get title() {\n    return this.getAttribute('title') || '';\n  }\n\n  get items() {\n    let items = [];\n\n    [...this.attributes].forEach(attr => {\n      if (attr.name.includes('items')) {\n        items = JSON.parse(attr.value);\n      }\n    });\n\n    return items;\n  }\n\n}\n\n// let the browser know about the custom element\nwindow.customElements.define('inspire-comp', ItemsList);\n\nconst htmlLifecycles = single_spa_html__WEBPACK_IMPORTED_MODULE_0___default()({\n  template: '<inspire-comp></inspire-comp>',\n})\nconst bootstrap = htmlLifecycles.bootstrap;\nconst mount = htmlLifecycles.mount;\nconst unmount = htmlLifecycles.unmount;\n\n//# sourceURL=webpack://inspire/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});