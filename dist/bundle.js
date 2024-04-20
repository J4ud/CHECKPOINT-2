/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CatButton/Catbutton.ts":
/*!***********************************************!*\
  !*** ./src/components/CatButton/Catbutton.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attrs\": () => (/* binding */ Attrs),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_getFact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/getFact */ \"./src/services/getFact.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nvar Attrs;\n(function (Attrs) {\n    Attrs[\"img\"] = \"img\";\n    Attrs[\"fact\"] = \"fact\";\n})(Attrs || (Attrs = {}));\nclass CatButton extends HTMLElement {\n    constructor() {\n        super(); // always call super() first in the ctor.\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render;\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\r\n\r\n        `;\n            }\n            const bton = this.ownerDocument.createElement('button');\n            const btonText = this.ownerDocument.createElement('h2');\n            btonText.textContent = 'GET A NEW FACT';\n            bton.appendChild(btonText);\n            bton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\n                var _a;\n                if (this.fact) {\n                    const catfData = yield (0,_services_getFact__WEBPACK_IMPORTED_MODULE_0__.getFact)();\n                    const fact = this.ownerDocument.createElement('fact');\n                    fact.textContent = catfData.fact;\n                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(fact);\n                }\n            }));\n            this.shadowRoot.appendChild(bton);\n        }\n    }\n    static() {\n        const Attributes = {\n            img: null,\n            fact: null,\n        };\n        return Object.keys(Attributes);\n    }\n    attributeChangedCallback(attrName, oldVal, newVal) {\n        switch (attrName) {\n            default:\n                this[attrName] = newVal;\n                break;\n        }\n        this.render;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatButton);\nwindow.customElements.define('cat-button', CatButton);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/CatButton/Catbutton.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CatButton_Catbutton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CatButton/Catbutton */ \"./src/components/CatButton/Catbutton.ts\");\n/* harmony import */ var _services_getFact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getFact */ \"./src/services/getFact.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const dataFact = yield (0,_services_getFact__WEBPACK_IMPORTED_MODULE_1__.getFact)();\n            console.log(dataFact);\n            this.render(dataFact);\n        });\n    }\n    render(dataFact) {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n        }\n        const catSection = this.ownerDocument.createElement('section');\n        catSection.setAttribute(_components_CatButton_Catbutton__WEBPACK_IMPORTED_MODULE_0__.Attrs.fact, dataFact.fact);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/services/getFact.ts":
/*!*********************************!*\
  !*** ./src/services/getFact.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFact\": () => (/* binding */ getFact)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst getFact = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const dataFact = yield fetch(`https://catfact.ninja/fact`).then((res) => res.json());\n        console.log(dataFact);\n        return dataFact.fact;\n    }\n    catch (error) {\n        console.log('error', error);\n        return error;\n    }\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/getFact.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;