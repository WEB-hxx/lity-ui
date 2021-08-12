(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lity-ui"] = factory(require("vue"));
	else
		root["lity-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0289":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "037c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0b8c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_item_vue_vue_type_style_index_0_id_1f62f882_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f6ed");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_item_vue_vue_type_style_index_0_id_1f62f882_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_item_vue_vue_type_style_index_0_id_1f62f882_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0ddd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_checkbox_vue_vue_type_style_index_0_id_b688a1f2_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("037c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_checkbox_vue_vue_type_style_index_0_id_b688a1f2_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_checkbox_vue_vue_type_style_index_0_id_b688a1f2_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1cd2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_toast_vue_vue_type_style_index_0_id_48b8e553_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4c0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_toast_vue_vue_type_style_index_0_id_48b8e553_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_toast_vue_vue_type_style_index_0_id_48b8e553_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2a0f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2ac7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_input_vue_vue_type_style_index_0_id_5e9d15b7_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b6cd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_input_vue_vue_type_style_index_0_id_5e9d15b7_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_input_vue_vue_type_style_index_0_id_5e9d15b7_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2b31":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_textarea_vue_vue_type_style_index_0_id_707d1bb8_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3159");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_textarea_vue_vue_type_style_index_0_id_707d1bb8_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_textarea_vue_vue_type_style_index_0_id_707d1bb8_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "30f8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3159":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4abf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_rate_vue_vue_type_style_index_0_id_053b55c8_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d180");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_rate_vue_vue_type_style_index_0_id_053b55c8_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_rate_vue_vue_type_style_index_0_id_053b55c8_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "55a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grid_item_vue_vue_type_style_index_0_id_b663807a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ddd7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grid_item_vue_vue_type_style_index_0_id_b663807a_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grid_item_vue_vue_type_style_index_0_id_b663807a_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6077":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tab_panel_vue_vue_type_style_index_0_id_5efbbf17_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fbf6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tab_panel_vue_vue_type_style_index_0_id_5efbbf17_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tab_panel_vue_vue_type_style_index_0_id_5efbbf17_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6716":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_vue_vue_type_style_index_0_id_f004cc76_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f035");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_vue_vue_type_style_index_0_id_f004cc76_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_slider_vue_vue_type_style_index_0_id_f004cc76_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "70fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tab_vue_vue_type_style_index_0_id_3d912c5c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0289");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tab_vue_vue_type_style_index_0_id_3d912c5c_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tab_vue_vue_type_style_index_0_id_3d912c5c_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9244":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9e51":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_button_vue_vue_type_style_index_0_id_76164b0c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f94e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_button_vue_vue_type_style_index_0_id_76164b0c_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_button_vue_vue_type_style_index_0_id_76164b0c_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ac38":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "adba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tag_vue_vue_type_style_index_0_id_5c056d6c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b580");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tag_vue_vue_type_style_index_0_id_5c056d6c_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_tag_vue_vue_type_style_index_0_id_5c056d6c_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b580":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b6cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b735":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_switch_vue_vue_type_style_index_0_id_f57ddda0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb88");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_switch_vue_vue_type_style_index_0_id_f57ddda0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_switch_vue_vue_type_style_index_0_id_f57ddda0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c4c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cd72":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_radio_vue_vue_type_style_index_0_id_284807f4_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6ac");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_radio_vue_vue_type_style_index_0_id_284807f4_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_radio_vue_vue_type_style_index_0_id_284807f4_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d180":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d3c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_loading_vue_vue_type_style_index_0_id_46ec33ad_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b50d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_loading_vue_vue_type_style_index_0_id_46ec33ad_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_loading_vue_vue_type_style_index_0_id_46ec33ad_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d504":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_dialog_vue_vue_type_style_index_0_id_99f5b8de_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac38");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_dialog_vue_vue_type_style_index_0_id_99f5b8de_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_dialog_vue_vue_type_style_index_0_id_99f5b8de_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ddd7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e6ac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ea2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grid_vue_vue_type_style_index_0_id_6087d64a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9244");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grid_vue_vue_type_style_index_0_id_6087d64a_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_grid_vue_vue_type_style_index_0_id_6087d64a_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "eb88":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f035":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6ed":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f94e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Base", function() { return /* reexport */ base_default.a; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ Button; });
__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return /* reexport */ CheckboxGroup; });
__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return /* reexport */ Checkbox; });
__webpack_require__.d(__webpack_exports__, "GridItem", function() { return /* reexport */ GridItem; });
__webpack_require__.d(__webpack_exports__, "Icon", function() { return /* reexport */ Icon; });
__webpack_require__.d(__webpack_exports__, "Input", function() { return /* reexport */ Input; });
__webpack_require__.d(__webpack_exports__, "Loading", function() { return /* reexport */ Loading; });
__webpack_require__.d(__webpack_exports__, "Radio", function() { return /* reexport */ Radio; });
__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return /* reexport */ RadioGroup; });
__webpack_require__.d(__webpack_exports__, "Rate", function() { return /* reexport */ Rate; });
__webpack_require__.d(__webpack_exports__, "Slider", function() { return /* reexport */ Slider; });
__webpack_require__.d(__webpack_exports__, "SliderItem", function() { return /* reexport */ SliderItem; });
__webpack_require__.d(__webpack_exports__, "Switch", function() { return /* reexport */ Switch; });
__webpack_require__.d(__webpack_exports__, "Tab", function() { return /* reexport */ Tab; });
__webpack_require__.d(__webpack_exports__, "TabPanel", function() { return /* reexport */ TabPanel; });
__webpack_require__.d(__webpack_exports__, "Tag", function() { return /* reexport */ Tag; });
__webpack_require__.d(__webpack_exports__, "Textarea", function() { return /* reexport */ Textarea; });
__webpack_require__.d(__webpack_exports__, "Toast", function() { return /* reexport */ packages_toast; });
__webpack_require__.d(__webpack_exports__, "Dialog", function() { return /* reexport */ packages_dialog; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./packages/assets/scss/index.scss
var scss = __webpack_require__("2a0f");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/button/button.vue?vue&type=template&id=76164b0c


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
    class: ["lity-btn", $setup.btnClass],
    type: $props.type,
    style: {},
    onClick: _cache[1] || (_cache[1] = (...args) => ($setup.handleClick && $setup.handleClick(...args)))
  }, [
    ($props.icon)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
          key: 0,
          class: $props.icon
        }, null, 2))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
  ], 10, ["type"]))
}
// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=template&id=76164b0c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/button/button.vue?vue&type=script&lang=js


const COMPONENT_NAME = 'lity-button'
/* harmony default export */ var buttonvue_type_script_lang_js = ({
  name: COMPONENT_NAME,
  emits: ['click'],
  props: {
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    default: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  setup (props, context) {
    const btnClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return {
        'lity-btn_active': props.active,
        'lity-btn_disabled': props.disabled,
        'lity-btn-inline': props.inline,
        'lity-btn-primary': props.primary,
        'lity-btn-success': props.success,
        'lity-btn-warning': props.warning,
        'lity-btn-danger': props.danger,
        'lity-btn-outline': props.outline,
        'lity-btn-square': props.square,
        'lity-btn-default': props.default
      }
    })
    function handleClick (event) {
      if (props.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      context.emit('click', event)
    }
    return {
      handleClick,
      btnClass
    }
  }
});


// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/button/button.vue?vue&type=style&index=0&id=76164b0c&lang=scss
var buttonvue_type_style_index_0_id_76164b0c_lang_scss = __webpack_require__("9e51");

// CONCATENATED MODULE: ./packages/button/button.vue





buttonvue_type_script_lang_js.render = render

/* harmony default export */ var button_button = (buttonvue_type_script_lang_js);
// EXTERNAL MODULE: ./packages/assets/scss/base.scss
var base = __webpack_require__("30f8");
var base_default = /*#__PURE__*/__webpack_require__.n(base);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/checkbox/checkbox-group.vue?vue&type=template&id=f07e0fa0


const _hoisted_1 = { class: "lity-checkbox-group" }

function checkbox_groupvue_type_template_id_f07e0fa0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
  ]))
}
// CONCATENATED MODULE: ./packages/checkbox/checkbox-group.vue?vue&type=template&id=f07e0fa0

// CONCATENATED MODULE: ./packages/assets/js/common.js
const isColor = function (value) {
  const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/
  const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/
  const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/
  return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value)
}

const isLock = (function () {
  const fn = function (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  let islock = false
  return {
    lock (el) {
      if (islock) return
      islock = true;
      (el || document).addEventListener('touchmove', fn)
    },
    unlock (el) {
      islock = false;
      (el || document).removeEventListener('touchmove', fn)
    }
  }
})()



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/checkbox/checkbox-group.vue?vue&type=script&lang=js



const checkbox_groupvue_type_script_lang_js_COMPONENT_NAME = 'lity-checkbox-group'
/* harmony default export */ var checkbox_groupvue_type_script_lang_js = ({
  name: checkbox_groupvue_type_script_lang_js_COMPONENT_NAME,
  emits: ['change', 'update:modelValue'],
  props: {
    modelValue: {
      type: Array,
      default () {
        return []
      }
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#07c160'
    },
    size: {
      type: Number,
      default: 20
    },
    shape: {
      validator (value) {
        return ['square', 'circle'].indexOf(value) > -1
      },
      default: 'square'
    }
  },
  setup (props, context) {
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('groupCheckbox', { props, context })
  }
});

// CONCATENATED MODULE: ./packages/checkbox/checkbox-group.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/checkbox/checkbox-group.vue



checkbox_groupvue_type_script_lang_js.render = checkbox_groupvue_type_template_id_f07e0fa0_render

/* harmony default export */ var checkbox_group = (checkbox_groupvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/checkbox/checkbox.vue?vue&type=template&id=b688a1f2


const checkboxvue_type_template_id_b688a1f2_hoisted_1 = {
  key: 0,
  class: "lity-checkbox-text"
}
const _hoisted_2 = {
  key: 1,
  class: "lity-checkbox-text"
}

function checkboxvue_type_template_id_b688a1f2_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", {
    class: ["lity-checkbox", $setup.shapeClass == 'circle' ? 'lity-checkbox-circle' : '']
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
      type: "checkbox",
      onChange: _cache[1] || (_cache[1] = $event => ($setup.changeHandler($setup.checked))),
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($setup.checked = $event)),
      value: $props.val,
      disabled: $props.disabled
    }, null, 40, ["value", "disabled"]), [
      [external_commonjs_vue_commonjs2_vue_root_Vue_["vModelCheckbox"], $setup.checked]
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
      class: "lity-checkbox-icon",
      style: $setup.iconStyles
    }, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", { style: $setup.checkIconStyles }, null, 4)
    ], 4),
    (!$setup.slots)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", checkboxvue_type_template_id_b688a1f2_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.val), 1))
      : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", _hoisted_2, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
        ]))
  ], 2))
}
// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue?vue&type=template&id=b688a1f2

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/checkbox/checkbox.vue?vue&type=script&lang=js



const checkboxvue_type_script_lang_js_COMPONENT_NAME = 'lity-checkbox'
/* harmony default export */ var checkboxvue_type_script_lang_js = ({
  name: checkboxvue_type_script_lang_js_COMPONENT_NAME,
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    val: {
      type: [Boolean, String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#07c160'
    },
    size: {
      type: Number,
      default: 20
    },
    shape: {
      validator (value) {
        return ['square', 'circle'].indexOf(value) > -1
      },
      default: 'square'
    }
  },
  emits: ['change', 'update:modelValue'],
  setup (props, context) {
    const groupCheckbox = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('groupCheckbox', '')
    const slots = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(context.slots.default && context.slots.default())
    const shapeClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return groupCheckbox ? groupCheckbox.props.shape : props.shape
    })
    const checked = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])({
      get () {
        return groupCheckbox ? groupCheckbox.props.modelValue : props.modelValue
      },
      set (value) {
        groupCheckbox ? groupCheckbox.context.emit('update:modelValue', value) : context.emit('update:modelValue', value)
      }
    })
    const iconStyles = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      const size = (groupCheckbox ? groupCheckbox.props.size : props.size) + 'px'
      const color = groupCheckbox ? groupCheckbox.props.color : props.color
      return {
        width: size,
        height: size,
        color: color
      }
    })
    const checkIconStyles = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      const size = groupCheckbox ? groupCheckbox.props.size : props.size
      return {
        width: Math.round(size / 3.2) + 'px',
        height: Math.round(size / 1.7) + 'px'
      }
    })
    function changeHandler (event) {
      if (props.disabled) return false
      groupCheckbox ? groupCheckbox.context.emit('change', event) : context.emit('change', event)
    }
    return {
      changeHandler,
      iconStyles,
      slots,
      checked,
      shapeClass,
      checkIconStyles
    }
  }

});

// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/checkbox/checkbox.vue?vue&type=style&index=0&id=b688a1f2&lang=scss
var checkboxvue_type_style_index_0_id_b688a1f2_lang_scss = __webpack_require__("0ddd");

// CONCATENATED MODULE: ./packages/checkbox/checkbox.vue





checkboxvue_type_script_lang_js.render = checkboxvue_type_template_id_b688a1f2_render

/* harmony default export */ var checkbox_checkbox = (checkboxvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/grid/grid.vue?vue&type=template&id=6087d64a


function gridvue_type_template_id_6087d64a_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", { class: $setup.classes }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
  ], 2))
}
// CONCATENATED MODULE: ./packages/grid/grid.vue?vue&type=template&id=6087d64a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/grid/grid.vue?vue&type=script&lang=js


const gridvue_type_script_lang_js_COMPONENT_NAME = 'lity-grid'
/* harmony default export */ var gridvue_type_script_lang_js = ({
  name: gridvue_type_script_lang_js_COMPONENT_NAME,
  props: {
    rows: {
      validator (value) {
        return ['2', '3', '4', '5'].indexOf(value + '') > -1
      },
      default: '4'
    }
  },
  setup (props) {
    const classes = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return 'lity-grids-' + props.rows
    })
    return {
      classes
    }
  }
});

// CONCATENATED MODULE: ./packages/grid/grid.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/grid/grid.vue?vue&type=style&index=0&id=6087d64a&lang=scss
var gridvue_type_style_index_0_id_6087d64a_lang_scss = __webpack_require__("ea2f");

// CONCATENATED MODULE: ./packages/grid/grid.vue





gridvue_type_script_lang_js.render = gridvue_type_template_id_6087d64a_render

/* harmony default export */ var grid = (gridvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/grid/grid-item.vue?vue&type=template&id=b663807a


const grid_itemvue_type_template_id_b663807a_hoisted_1 = {
  key: 0,
  class: "lity-grids-icon"
}
const grid_itemvue_type_template_id_b663807a_hoisted_2 = {
  key: 1,
  class: "lity-grids-txt"
}
const _hoisted_3 = {
  key: 0,
  class: "lity-grids-icon"
}
const _hoisted_4 = {
  key: 1,
  class: "lity-grids-txt"
}

function grid_itemvue_type_template_id_b663807a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("router-link")

  return ($props.type == 'link')
    ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_router_link, {
        key: 0,
        class: "lity-grids-item",
        to: $props.link || '',
        style: $setup.styles
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
          ($setup.checkIcon)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", grid_itemvue_type_template_id_b663807a_hoisted_1, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "icon")
              ]))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
          ($setup.checkText)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", grid_itemvue_type_template_id_b663807a_hoisted_2, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "text")
              ]))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "other")
        ]),
        _: 3
      }, 8, ["to", "style"]))
    : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("a", {
        key: 1,
        class: "lity-grids-item",
        href: $props.link || '',
        style: $setup.styles
      }, [
        ($setup.checkIcon)
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_3, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "icon")
            ]))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
        ($setup.checkText)
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_4, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "text")
            ]))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "other")
      ], 12, ["href"]))
}
// CONCATENATED MODULE: ./packages/grid/grid-item.vue?vue&type=template&id=b663807a

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/grid/grid-item.vue?vue&type=script&lang=js


const grid_itemvue_type_script_lang_js_COMPONENT_NAME = 'lity-grid-item'
/* harmony default export */ var grid_itemvue_type_script_lang_js = ({
  name: grid_itemvue_type_script_lang_js_COMPONENT_NAME,
  props: {
    type: {
      validator (value) {
        return ['link', 'a'].indexOf(value + '') > -1
      },
      default: 'link'
    },
    link: [String, Object],
    style: {
      type: String
    }
  },
  setup (props, context) {
    // 强制转换为Boolean 用 !!
    const checkIcon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return !!context.slots.icon
    })
    const checkText = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return !!context.slots.text
    })
    const styles = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return context.style
    })
    return {
      checkIcon,
      checkText,
      styles
    }
  }
});

// CONCATENATED MODULE: ./packages/grid/grid-item.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/grid/grid-item.vue?vue&type=style&index=0&id=b663807a&lang=scss
var grid_itemvue_type_style_index_0_id_b663807a_lang_scss = __webpack_require__("55a1");

// CONCATENATED MODULE: ./packages/grid/grid-item.vue





grid_itemvue_type_script_lang_js.render = grid_itemvue_type_template_id_b663807a_render

/* harmony default export */ var grid_item = (grid_itemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/icon/icon.vue?vue&type=template&id=0c581a64


function iconvue_type_template_id_0c581a64_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
    class: $props.name,
    style: {fontSize:$props.size+'px',color: $props.color}
  }, null, 6))
}
// CONCATENATED MODULE: ./packages/icon/icon.vue?vue&type=template&id=0c581a64

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/icon/icon.vue?vue&type=script&lang=js


const iconvue_type_script_lang_js_COMPONENT_NAME = 'lity-icon'
/* harmony default export */ var iconvue_type_script_lang_js = ({
  name: iconvue_type_script_lang_js_COMPONENT_NAME,
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: 'inherit'
    }
  }
});


// CONCATENATED MODULE: ./packages/icon/icon.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/icon/icon.vue



iconvue_type_script_lang_js.render = iconvue_type_template_id_0c581a64_render

/* harmony default export */ var icon = (iconvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/input/input.vue?vue&type=template&id=5e9d15b7


const inputvue_type_template_id_5e9d15b7_hoisted_1 = {
  key: 0,
  class: "lity-input-prepend"
}
const inputvue_type_template_id_5e9d15b7_hoisted_2 = {
  key: 1,
  class: "lity-input-append"
}
const inputvue_type_template_id_5e9d15b7_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", { class: "lityic-close_fill" }, null, -1)

function inputvue_type_template_id_5e9d15b7_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["lity-input", {'lity-input_active': $setup.isFocus}]
  }, [
    (_ctx.$slots.prepend)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", inputvue_type_template_id_5e9d15b7_hoisted_1, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "prepend")
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
      class: "lity-input-field",
      ref: "input",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($setup.inputValue = $event)),
      name: $props.name,
      placeholder: $props.placeholder,
      minlength: $props.minlength,
      maxlength: $props.maxlength,
      type: $props.type,
      disabled: $props.disabled,
      readonly: $props.readonly,
      autocomplete: $props.autocomplete,
      autofocus: $props.autofocus,
      onFocus: _cache[2] || (_cache[2] = (...args) => ($setup.handleFocus && $setup.handleFocus(...args))),
      onBlur: _cache[3] || (_cache[3] = (...args) => ($setup.handleBlur && $setup.handleBlur(...args))),
      onChange: _cache[4] || (_cache[4] = (...args) => ($setup.changeHander && $setup.changeHander(...args)))
    }, null, 40, ["name", "placeholder", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "autofocus"]), [
      [external_commonjs_vue_commonjs2_vue_root_Vue_["vModelDynamic"], $setup.inputValue]
    ]),
    (_ctx.$slots.append || $setup.showClear)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", inputvue_type_template_id_5e9d15b7_hoisted_2, [
          ($setup.showClear)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
                key: 0,
                class: "lity-input-clear",
                onClick: _cache[5] || (_cache[5] = (...args) => ($setup.handleClear && $setup.handleClear(...args)))
              }, [
                inputvue_type_template_id_5e9d15b7_hoisted_3
              ]))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "append")
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
  ], 2))
}
// CONCATENATED MODULE: ./packages/input/input.vue?vue&type=template&id=5e9d15b7

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/input/input.vue?vue&type=script&lang=js


const inputvue_type_script_lang_js_COMPONENT_NAME = 'lity-input'
/* harmony default export */ var inputvue_type_script_lang_js = ({
  name: inputvue_type_script_lang_js_COMPONENT_NAME,
  emits: ['change', 'blur', 'focus', 'clear', 'update:modelValue'],
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    },
    name: String,
    minlength: Number,
    maxlength: Number,
    clearable: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const isFocus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false)
    const showClear = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return !!inputValue.value
    })
    const inputValue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])({
      get () {
        return props.modelValue
      },
      set (value) {
        context.emit('update:modelValue', value)
      }
    })
    function handleClear (e) {
      inputValue.value = ''
      showClear.value = false
      context.emit('clear', e)
    }
    function handleFocus (e) {
      context.emit('focus', e)
      isFocus.value = true
    }
    function handleBlur (e) {
      context.emit('blur', e)
      isFocus.value = false
    }
    function changeHander (e) {
      context.emit('change', inputValue.value)
    }
    return {
      inputValue,
      isFocus,
      showClear,
      handleClear,
      handleFocus,
      handleBlur,
      changeHander
    }
  }
});

// CONCATENATED MODULE: ./packages/input/input.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/input/input.vue?vue&type=style&index=0&id=5e9d15b7&lang=scss
var inputvue_type_style_index_0_id_5e9d15b7_lang_scss = __webpack_require__("2ac7");

// CONCATENATED MODULE: ./packages/input/input.vue





inputvue_type_script_lang_js.render = inputvue_type_template_id_5e9d15b7_render

/* harmony default export */ var input = (inputvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/loading/loading.vue?vue&type=template&id=46ec33ad


const loadingvue_type_template_id_46ec33ad_hoisted_1 = { class: "lity-loading" }

function loadingvue_type_template_id_46ec33ad_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", loadingvue_type_template_id_46ec33ad_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
      class: "lity-loading-spinners",
      style: $setup.sizeFont
    }, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($setup.balde, (item) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
          class: "lity-loading-spinner",
          style: $setup.bgColor,
          key: item
        }, null, 4))
      }), 128))
    ], 4)
  ]))
}
// CONCATENATED MODULE: ./packages/loading/loading.vue?vue&type=template&id=46ec33ad

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/loading/loading.vue?vue&type=script&lang=js



const loadingvue_type_script_lang_js_COMPONENT_NAME = 'lity-loading'
/* harmony default export */ var loadingvue_type_script_lang_js = ({
  name: loadingvue_type_script_lang_js_COMPONENT_NAME,
  props: {
    size: {
      type: Number
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#666'
    }
  },
  setup (props) {
    const balde = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(12)
    const sizeFont = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      if (!props.size) {
        return
      }
      const value = `${props.size}px`
      return {
        width: value,
        height: value
      }
    })
    const bgColor = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      if (!props.color) {
        return
      }
      const value = `${props.color}`
      return {
        backgroundColor: value
      }
    })
    return {
      balde,
      sizeFont,
      bgColor
    }
  }
});

// CONCATENATED MODULE: ./packages/loading/loading.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/loading/loading.vue?vue&type=style&index=0&id=46ec33ad&lang=scss
var loadingvue_type_style_index_0_id_46ec33ad_lang_scss = __webpack_require__("d3c0");

// CONCATENATED MODULE: ./packages/loading/loading.vue





loadingvue_type_script_lang_js.render = loadingvue_type_template_id_46ec33ad_render

/* harmony default export */ var loading = (loadingvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/radio/radio.vue?vue&type=template&id=284807f4


const radiovue_type_template_id_284807f4_hoisted_1 = { class: "lity-radio" }
const radiovue_type_template_id_284807f4_hoisted_2 = {
  key: 0,
  class: "lity-radio-text"
}
const radiovue_type_template_id_284807f4_hoisted_3 = {
  key: 1,
  class: "lity-radio-text"
}

function radiovue_type_template_id_284807f4_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("label", radiovue_type_template_id_284807f4_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("input", {
      type: "radio",
      onChange: _cache[1] || (_cache[1] = (...args) => ($setup.changeHandler && $setup.changeHandler(...args))),
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($setup.checked = $event)),
      value: $props.val,
      disabled: $props.disabled
    }, null, 40, ["value", "disabled"]), [
      [external_commonjs_vue_commonjs2_vue_root_Vue_["vModelRadio"], $setup.checked]
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
      class: "lity-radio-icon",
      style: [{color:$setup.iconColor}, $setup.iconStyles(1)]
    }, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
        style: $setup.iconStyles(2)
      }, null, 4)
    ], 4),
    (!$setup.slots)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", radiovue_type_template_id_284807f4_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.val), 1))
      : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", radiovue_type_template_id_284807f4_hoisted_3, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
        ]))
  ]))
}
// CONCATENATED MODULE: ./packages/radio/radio.vue?vue&type=template&id=284807f4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/radio/radio.vue?vue&type=script&lang=js


const radiovue_type_script_lang_js_COMPONENT_NAME = 'lity-radio'
/* harmony default export */ var radiovue_type_script_lang_js = ({
  name: radiovue_type_script_lang_js_COMPONENT_NAME,
  props: {
    val: {
      type: [Boolean, String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup (props, context) {
    const groupRadio = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('groupRadio')
    const slots = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(context.slots.default && context.slots.default())
    const iconColor = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      return groupRadio.props.color
    })
    const checked = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])({
      get () {
        return groupRadio.props.modelValue
      },
      set (value) {
        groupRadio.context.emit('update:modelValue', value)
      }
    })
    function iconStyles (size) {
      const sizes = groupRadio.props.size / size + 'px'
      return {
        width: sizes,
        height: sizes
      }
    }
    function changeHandler (event) {
      if (props.disabled) return false
      groupRadio.context.emit('change', event.target.checked)
    }
    return {
      slots,
      checked,
      changeHandler,
      iconStyles,
      iconColor
    }
  }

});

// CONCATENATED MODULE: ./packages/radio/radio.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/radio/radio.vue?vue&type=style&index=0&id=284807f4&lang=scss
var radiovue_type_style_index_0_id_284807f4_lang_scss = __webpack_require__("cd72");

// CONCATENATED MODULE: ./packages/radio/radio.vue





radiovue_type_script_lang_js.render = radiovue_type_template_id_284807f4_render

/* harmony default export */ var radio_radio = (radiovue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/radio/radio-group.vue?vue&type=template&id=7e1e346e


const radio_groupvue_type_template_id_7e1e346e_hoisted_1 = { class: "lity-radio-group" }

function radio_groupvue_type_template_id_7e1e346e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", radio_groupvue_type_template_id_7e1e346e_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
  ]))
}
// CONCATENATED MODULE: ./packages/radio/radio-group.vue?vue&type=template&id=7e1e346e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/radio/radio-group.vue?vue&type=script&lang=js



const radio_groupvue_type_script_lang_js_COMPONENT_NAME = 'lity-radio-group'
/* harmony default export */ var radio_groupvue_type_script_lang_js = ({
  name: radio_groupvue_type_script_lang_js_COMPONENT_NAME,
  emits: ['change'],
  props: {
    modelValue: {
      type: [String, Number]
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#07c160'
    },
    size: {
      type: Number,
      default: 20
    }
  },
  setup (props, context) {
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('groupRadio', { props, context })
  }
});

// CONCATENATED MODULE: ./packages/radio/radio-group.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/radio/radio-group.vue



radio_groupvue_type_script_lang_js.render = radio_groupvue_type_template_id_7e1e346e_render

/* harmony default export */ var radio_group = (radio_groupvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/rate/rate.vue?vue&type=template&id=053b55c8


function ratevue_type_template_id_053b55c8_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
    class: "lity-rate",
    style: { color: $props.color}
  }, [
    (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(~~$props.count, (item, key) => {
      return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("a", {
        href: "javascript:;",
        key: key,
        class: $setup.checkVal >= item ? 'lityic-collect_fill' : 'lityic-collect',
        style: {color: $setup.checkVal >= item ? $props.activeColor : $props.color, fontSize: $props.size+'px', paddingRight: $props.justify+'px'},
        onClick: $event => (!$props.readonly && $setup.choose(item))
      }, null, 14, ["onClick"]))
    }), 128)),
    (!!$setup.str)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
          key: 0,
          class: "lity-rate-text",
          innerHTML: $setup.str
        }, null, 8, ["innerHTML"]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
  ], 4))
}
// CONCATENATED MODULE: ./packages/rate/rate.vue?vue&type=template&id=053b55c8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/rate/rate.vue?vue&type=script&lang=js



const ratevue_type_script_lang_js_COMPONENT_NAME = 'lity-rate'
/* harmony default export */ var ratevue_type_script_lang_js = ({
  name: ratevue_type_script_lang_js_COMPONENT_NAME,
  emits: ['update:modelValue'],
  props: {
    count: {
      validator (val) {
        return /^(([1-9]\d*)|0)$/.test(val)
      },
      default: 5
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#EAEAEA'
    },
    activeColor: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#FF5D50'
    },
    modelValue: {
      type: Number,
      default: 0
    },
    showText: {
      type: Array,
      default () {
        return []
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    justify: {
      type: Number,
      default: 5
    }
  },
  setup (props, context) {
    const str = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('')
    const checkVal = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue)
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => choose(props.modelValue))
    })
    function choose (index) {
      checkVal.value = index
      context.emit('update:modelValue', index)
      if (props.showText) {
        str.value = props.showText[index - 1] || ''
      }
    }
    return {
      checkVal,
      str,
      choose
    }
  }
});

// CONCATENATED MODULE: ./packages/rate/rate.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/rate/rate.vue?vue&type=style&index=0&id=053b55c8&lang=scss
var ratevue_type_style_index_0_id_053b55c8_lang_scss = __webpack_require__("4abf");

// CONCATENATED MODULE: ./packages/rate/rate.vue





ratevue_type_script_lang_js.render = ratevue_type_template_id_053b55c8_render

/* harmony default export */ var rate = (ratevue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/slider/slider.vue?vue&type=template&id=f004cc76


const slidervue_type_template_id_f004cc76_hoisted_1 = { class: "lity-slider-group" }

function slidervue_type_template_id_f004cc76_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["lity-slider", $props.direction == 'vertical' ? 'lity-slider-vertical':''],
    ref: "rootRef",
    onChange: _cache[1] || (_cache[1] = (...args) => (_ctx.changeHander && _ctx.changeHander(...args)))
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", slidervue_type_template_id_f004cc76_hoisted_1, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
    ]),
    ($props.showDot && $props.data.length>1)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
          key: 0,
          class: $props.direction == 'vertical' ? 'lity-dots-vertical':'lity-dots-wrapper'
        }, [
          (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.data, (item, index) => {
            return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
              class: ["lity-dot", {'lity-dot-active': $setup.currentPageIndex === index}],
              key: index
            }, null, 2))
          }), 128))
        ], 2))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
  ], 34))
}
// CONCATENATED MODULE: ./packages/slider/slider.vue?vue&type=template&id=f004cc76

// CONCATENATED MODULE: ./node_modules/@better-scroll/core/dist/core.esm.js
/*!
 * better-scroll / core
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var propertiesConfig = [
    {
        sourceKey: 'scroller.scrollBehaviorX.currentPos',
        key: 'x'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.currentPos',
        key: 'y'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.hasScroll',
        key: 'hasHorizontalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.hasScroll',
        key: 'hasVerticalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.contentSize',
        key: 'scrollerWidth'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.contentSize',
        key: 'scrollerHeight'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.maxScrollPos',
        key: 'maxScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.maxScrollPos',
        key: 'maxScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.minScrollPos',
        key: 'minScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.minScrollPos',
        key: 'minScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.movingDirection',
        key: 'movingDirectionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.movingDirection',
        key: 'movingDirectionY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.direction',
        key: 'directionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.direction',
        key: 'directionY'
    },
    {
        sourceKey: 'scroller.actions.enabled',
        key: 'enabled'
    },
    {
        sourceKey: 'scroller.animater.pending',
        key: 'pending'
    },
    {
        sourceKey: 'scroller.animater.stop',
        key: 'stop'
    },
    {
        sourceKey: 'scroller.scrollTo',
        key: 'scrollTo'
    },
    {
        sourceKey: 'scroller.scrollBy',
        key: 'scrollBy'
    },
    {
        sourceKey: 'scroller.scrollToElement',
        key: 'scrollToElement'
    },
    {
        sourceKey: 'scroller.resetPosition',
        key: 'resetPosition'
    }
];

function warn(msg) {
    console.error("[BScroll warn]: " + msg);
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = !!(ua && /wechatdevtools/.test(ua));
var isAndroid = ua && ua.indexOf('android') > 0;
/* istanbul ignore next */
var isIOSBadVersion = (function () {
    if (typeof ua === 'string') {
        var regex = /os (\d\d?_\d(_\d)?)/;
        var matches = regex.exec(ua);
        if (!matches)
            return false;
        var parts = matches[1].split('_').map(function (item) {
            return parseInt(item, 10);
        });
        // ios version >= 13.4 issue 982
        return !!(parts[0] === 13 && parts[1] >= 4);
    }
    return false;
})();
/* istanbul ignore next */
var supportsPassive = false;
/* istanbul ignore next */
if (inBrowser) {
    var EventName = 'test-passive';
    try {
        var opts = {};
        Object.defineProperty(opts, 'passive', {
            get: function () {
                supportsPassive = true;
            },
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener(EventName, function () { }, opts);
    }
    catch (e) { }
}

function getNow() {
    return window.performance &&
        window.performance.now &&
        window.performance.timing
        ? window.performance.now() + window.performance.timing.navigationStart
        : +new Date();
}
var extend = function (target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
    return target;
};
function isUndef(v) {
    return v === undefined || v === null;
}
function between(x, min, max) {
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}

var elementStyle = (inBrowser &&
    document.createElement('div').style);
var vendor = (function () {
    /* istanbul ignore if  */
    if (!inBrowser) {
        return false;
    }
    var transformNames = [
        {
            key: 'standard',
            value: 'transform',
        },
        {
            key: 'webkit',
            value: 'webkitTransform',
        },
        {
            key: 'Moz',
            value: 'MozTransform',
        },
        {
            key: 'O',
            value: 'OTransform',
        },
        {
            key: 'ms',
            value: 'msTransform',
        },
    ];
    for (var _i = 0, transformNames_1 = transformNames; _i < transformNames_1.length; _i++) {
        var obj = transformNames_1[_i];
        if (elementStyle[obj.value] !== undefined) {
            return obj.key;
        }
    }
    /* istanbul ignore next  */
    return false;
})();
/* istanbul ignore next  */
function prefixStyle(style) {
    if (vendor === false) {
        return style;
    }
    if (vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
function getElement(el) {
    return (typeof el === 'string'
        ? document.querySelector(el)
        : el);
}
function addEvent(el, type, fn, capture) {
    var useCapture = supportsPassive
        ? {
            passive: false,
            capture: !!capture,
        }
        : !!capture;
    el.addEventListener(type, fn, useCapture);
}
function removeEvent(el, type, fn, capture) {
    el.removeEventListener(type, fn, {
        capture: !!capture,
    });
}
function offset(el) {
    var left = 0;
    var top = 0;
    while (el) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
        el = el.offsetParent;
    }
    return {
        left: left,
        top: top,
    };
}
vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';
var transform = prefixStyle('transform');
var transition = prefixStyle('transition');
var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransition = inBrowser && transition in elementStyle;
var style = {
    transform: transform,
    transition: transition,
    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
    transitionDuration: prefixStyle('transitionDuration'),
    transitionDelay: prefixStyle('transitionDelay'),
    transformOrigin: prefixStyle('transformOrigin'),
    transitionEnd: prefixStyle('transitionEnd'),
    transitionProperty: prefixStyle('transitionProperty'),
};
var eventTypeMap = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    touchcancel: 1,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2,
};
function getRect(el) {
    /* istanbul ignore if  */
    if (el instanceof window.SVGElement) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        };
    }
    else {
        return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight,
        };
    }
}
function preventDefaultExceptionFn(el, exceptions) {
    for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
            return true;
        }
    }
    return false;
}
var tagExceptionFn = preventDefaultExceptionFn;
function tap(e, eventName) {
    var ev = document.createEvent('Event');
    ev.initEvent(eventName, true, true);
    ev.pageX = e.pageX;
    ev.pageY = e.pageY;
    e.target.dispatchEvent(ev);
}
function click(e, event) {
    if (event === void 0) { event = 'click'; }
    var eventSource;
    if (e.type === 'mouseup') {
        eventSource = e;
    }
    else if (e.type === 'touchend' || e.type === 'touchcancel') {
        eventSource = e.changedTouches[0];
    }
    var posSrc = {};
    if (eventSource) {
        posSrc.screenX = eventSource.screenX || 0;
        posSrc.screenY = eventSource.screenY || 0;
        posSrc.clientX = eventSource.clientX || 0;
        posSrc.clientY = eventSource.clientY || 0;
    }
    var ev;
    var bubbles = true;
    var cancelable = true;
    var ctrlKey = e.ctrlKey, shiftKey = e.shiftKey, altKey = e.altKey, metaKey = e.metaKey;
    var pressedKeysMap = {
        ctrlKey: ctrlKey,
        shiftKey: shiftKey,
        altKey: altKey,
        metaKey: metaKey,
    };
    if (typeof MouseEvent !== 'undefined') {
        try {
            ev = new MouseEvent(event, extend(__assign({ bubbles: bubbles,
                cancelable: cancelable }, pressedKeysMap), posSrc));
        }
        catch (e) {
            /* istanbul ignore next */
            createEvent();
        }
    }
    else {
        createEvent();
    }
    function createEvent() {
        ev = document.createEvent('Event');
        ev.initEvent(event, bubbles, cancelable);
        extend(ev, posSrc);
    }
    // forwardedTouchEvent set to true in case of the conflict with fastclick
    ev.forwardedTouchEvent = true;
    ev._constructed = true;
    e.target.dispatchEvent(ev);
}
function dblclick(e) {
    click(e, 'dblclick');
}

var ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var DEFAULT_INTERVAL = 1000 / 60;
var windowCompat = inBrowser && window;
/* istanbul ignore next */
function noop$1() { }
var requestAnimationFrame = (function () {
    /* istanbul ignore if  */
    if (!inBrowser) {
        return noop$1;
    }
    return (windowCompat.requestAnimationFrame ||
        windowCompat.webkitRequestAnimationFrame ||
        windowCompat.mozRequestAnimationFrame ||
        windowCompat.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
            return window.setTimeout(callback, callback.interval || DEFAULT_INTERVAL); // make interval as precise as possible.
        });
})();
var cancelAnimationFrame = (function () {
    /* istanbul ignore if  */
    if (!inBrowser) {
        return noop$1;
    }
    return (windowCompat.cancelAnimationFrame ||
        windowCompat.webkitCancelAnimationFrame ||
        windowCompat.mozCancelAnimationFrame ||
        windowCompat.oCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        });
})();

/* istanbul ignore next */
var noop = function (val) { };
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop,
};
var getProperty = function (obj, key) {
    var keys = key.split('.');
    for (var i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
        if (typeof obj !== 'object' || !obj)
            return;
    }
    var lastKey = keys.pop();
    if (typeof obj[lastKey] === 'function') {
        return function () {
            return obj[lastKey].apply(obj, arguments);
        };
    }
    else {
        return obj[lastKey];
    }
};
var setProperty = function (obj, key, value) {
    var keys = key.split('.');
    var temp;
    for (var i = 0; i < keys.length - 1; i++) {
        temp = keys[i];
        if (!obj[temp])
            obj[temp] = {};
        obj = obj[temp];
    }
    obj[keys.pop()] = value;
};
function propertiesProxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return getProperty(this, sourceKey);
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        setProperty(this, sourceKey, val);
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}

var EventEmitter = /** @class */ (function () {
    function EventEmitter(names) {
        this.events = {};
        this.eventTypes = {};
        this.registerType(names);
    }
    EventEmitter.prototype.on = function (type, fn, context) {
        if (context === void 0) { context = this; }
        this.hasType(type);
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push([fn, context]);
        return this;
    };
    EventEmitter.prototype.once = function (type, fn, context) {
        var _this = this;
        if (context === void 0) { context = this; }
        this.hasType(type);
        var magic = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.off(type, magic);
            var ret = fn.apply(context, args);
            if (ret === true) {
                return ret;
            }
        };
        magic.fn = fn;
        this.on(type, magic);
        return this;
    };
    EventEmitter.prototype.off = function (type, fn) {
        if (!type && !fn) {
            this.events = {};
            return this;
        }
        if (type) {
            this.hasType(type);
            if (!fn) {
                this.events[type] = [];
                return this;
            }
            var events = this.events[type];
            if (!events) {
                return this;
            }
            var count = events.length;
            while (count--) {
                if (events[count][0] === fn ||
                    (events[count][0] && events[count][0].fn === fn)) {
                    events.splice(count, 1);
                }
            }
            return this;
        }
    };
    EventEmitter.prototype.trigger = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.hasType(type);
        var events = this.events[type];
        if (!events) {
            return;
        }
        var len = events.length;
        var eventsCopy = __spreadArrays(events);
        var ret;
        for (var i = 0; i < len; i++) {
            var event_1 = eventsCopy[i];
            var fn = event_1[0], context = event_1[1];
            if (fn) {
                ret = fn.apply(context, args);
                if (ret === true) {
                    return ret;
                }
            }
        }
    };
    EventEmitter.prototype.registerType = function (names) {
        var _this = this;
        names.forEach(function (type) {
            _this.eventTypes[type] = type;
        });
    };
    EventEmitter.prototype.destroy = function () {
        this.events = {};
        this.eventTypes = {};
    };
    EventEmitter.prototype.hasType = function (type) {
        var types = this.eventTypes;
        var isType = types[type] === type;
        if (!isType) {
            warn("EventEmitter has used unknown event type: \"" + type + "\", should be oneof [" +
                ("" + Object.keys(types).map(function (_) { return JSON.stringify(_); })) +
                "]");
        }
    };
    return EventEmitter;
}());
var EventRegister = /** @class */ (function () {
    function EventRegister(wrapper, events) {
        this.wrapper = wrapper;
        this.events = events;
        this.addDOMEvents();
    }
    EventRegister.prototype.destroy = function () {
        this.removeDOMEvents();
        this.events = [];
    };
    EventRegister.prototype.addDOMEvents = function () {
        this.handleDOMEvents(addEvent);
    };
    EventRegister.prototype.removeDOMEvents = function () {
        this.handleDOMEvents(removeEvent);
    };
    EventRegister.prototype.handleDOMEvents = function (eventOperation) {
        var _this = this;
        var wrapper = this.wrapper;
        this.events.forEach(function (event) {
            eventOperation(wrapper, event.name, _this, !!event.capture);
        });
    };
    EventRegister.prototype.handleEvent = function (e) {
        var eventType = e.type;
        this.events.some(function (event) {
            if (event.name === eventType) {
                event.handler(e);
                return true;
            }
            return false;
        });
    };
    return EventRegister;
}());

var CustomOptions = /** @class */ (function () {
    function CustomOptions() {
    }
    return CustomOptions;
}());
var OptionsConstructor = /** @class */ (function (_super) {
    __extends(OptionsConstructor, _super);
    function OptionsConstructor() {
        var _this = _super.call(this) || this;
        _this.startX = 0;
        _this.startY = 0;
        _this.scrollX = false;
        _this.scrollY = true;
        _this.freeScroll = false;
        _this.directionLockThreshold = 0;
        _this.eventPassthrough = "" /* None */;
        _this.click = false;
        _this.dblclick = false;
        _this.tap = '';
        _this.bounce = {
            top: true,
            bottom: true,
            left: true,
            right: true,
        };
        _this.bounceTime = 800;
        _this.momentum = true;
        _this.momentumLimitTime = 300;
        _this.momentumLimitDistance = 15;
        _this.swipeTime = 2500;
        _this.swipeBounceTime = 500;
        _this.deceleration = 0.0015;
        _this.flickLimitTime = 200;
        _this.flickLimitDistance = 100;
        _this.resizePolling = 60;
        _this.probeType = 0 /* Default */;
        _this.stopPropagation = false;
        _this.preventDefault = true;
        _this.preventDefaultException = {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/,
        };
        _this.tagException = {
            tagName: /^TEXTAREA$/,
        };
        _this.HWCompositing = true;
        _this.useTransition = true;
        _this.bindToWrapper = false;
        _this.bindToTarget = false;
        _this.disableMouse = hasTouch;
        _this.disableTouch = !hasTouch;
        _this.autoBlur = true;
        _this.autoEndDistance = 5;
        _this.outOfBoundaryDampingFactor = 1 / 3;
        _this.specifiedIndexAsContent = 0;
        _this.quadrant = 1 /* First */;
        return _this;
    }
    OptionsConstructor.prototype.merge = function (options) {
        if (!options)
            return this;
        for (var key in options) {
            if (key === 'bounce') {
                this.bounce = this.resolveBounce(options[key]);
                continue;
            }
            this[key] = options[key];
        }
        return this;
    };
    OptionsConstructor.prototype.process = function () {
        this.translateZ =
            this.HWCompositing && hasPerspective ? ' translateZ(1px)' : '';
        this.useTransition = this.useTransition && hasTransition;
        this.preventDefault = !this.eventPassthrough && this.preventDefault;
        // If you want eventPassthrough I have to lock one of the axes
        this.scrollX =
            this.eventPassthrough === "horizontal" /* Horizontal */
                ? false
                : this.scrollX;
        this.scrollY =
            this.eventPassthrough === "vertical" /* Vertical */ ? false : this.scrollY;
        // With eventPassthrough we also need lockDirection mechanism
        this.freeScroll = this.freeScroll && !this.eventPassthrough;
        // force true when freeScroll is true
        this.scrollX = this.freeScroll ? true : this.scrollX;
        this.scrollY = this.freeScroll ? true : this.scrollY;
        this.directionLockThreshold = this.eventPassthrough
            ? 0
            : this.directionLockThreshold;
        return this;
    };
    OptionsConstructor.prototype.resolveBounce = function (bounceOptions) {
        var DEFAULT_BOUNCE = {
            top: true,
            right: true,
            bottom: true,
            left: true,
        };
        var NEGATED_BOUNCE = {
            top: false,
            right: false,
            bottom: false,
            left: false,
        };
        var ret;
        if (typeof bounceOptions === 'object') {
            ret = extend(DEFAULT_BOUNCE, bounceOptions);
        }
        else {
            ret = bounceOptions ? DEFAULT_BOUNCE : NEGATED_BOUNCE;
        }
        return ret;
    };
    return OptionsConstructor;
}(CustomOptions));

var ActionsHandler = /** @class */ (function () {
    function ActionsHandler(wrapper, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter([
            'beforeStart',
            'start',
            'move',
            'end',
            'click',
        ]);
        this.handleDOMEvents();
    }
    ActionsHandler.prototype.handleDOMEvents = function () {
        var _a = this.options, bindToWrapper = _a.bindToWrapper, disableMouse = _a.disableMouse, disableTouch = _a.disableTouch, click = _a.click;
        var wrapper = this.wrapper;
        var target = bindToWrapper ? wrapper : window;
        var wrapperEvents = [];
        var targetEvents = [];
        var shouldRegisterTouch = !disableTouch;
        var shouldRegisterMouse = !disableMouse;
        if (click) {
            wrapperEvents.push({
                name: 'click',
                handler: this.click.bind(this),
                capture: true,
            });
        }
        if (shouldRegisterTouch) {
            wrapperEvents.push({
                name: 'touchstart',
                handler: this.start.bind(this),
            });
            targetEvents.push({
                name: 'touchmove',
                handler: this.move.bind(this),
            }, {
                name: 'touchend',
                handler: this.end.bind(this),
            }, {
                name: 'touchcancel',
                handler: this.end.bind(this),
            });
        }
        if (shouldRegisterMouse) {
            wrapperEvents.push({
                name: 'mousedown',
                handler: this.start.bind(this),
            });
            targetEvents.push({
                name: 'mousemove',
                handler: this.move.bind(this),
            }, {
                name: 'mouseup',
                handler: this.end.bind(this),
            });
        }
        this.wrapperEventRegister = new EventRegister(wrapper, wrapperEvents);
        this.targetEventRegister = new EventRegister(target, targetEvents);
    };
    ActionsHandler.prototype.beforeHandler = function (e, type) {
        var _a = this.options, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, preventDefaultException = _a.preventDefaultException;
        var preventDefaultConditions = {
            start: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            end: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            move: function () {
                return preventDefault;
            },
        };
        if (preventDefaultConditions[type]()) {
            e.preventDefault();
        }
        if (stopPropagation) {
            e.stopPropagation();
        }
    };
    ActionsHandler.prototype.setInitiated = function (type) {
        if (type === void 0) { type = 0; }
        this.initiated = type;
    };
    ActionsHandler.prototype.start = function (e) {
        var _eventType = eventTypeMap[e.type];
        if (this.initiated && this.initiated !== _eventType) {
            return;
        }
        this.setInitiated(_eventType);
        // if textarea or other html tags in options.tagException is manipulated
        // do not make bs scroll
        if (tagExceptionFn(e.target, this.options.tagException)) {
            this.setInitiated();
            return;
        }
        // only allow mouse left button
        if (_eventType === 2 /* Mouse */ && e.button !== 0 /* Left */)
            return;
        if (this.hooks.trigger(this.hooks.eventTypes.beforeStart, e)) {
            return;
        }
        this.beforeHandler(e, 'start');
        var point = (e.touches ? e.touches[0] : e);
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ActionsHandler.prototype.move = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.beforeHandler(e, 'move');
        var point = (e.touches ? e.touches[0] : e);
        var deltaX = point.pageX - this.pointX;
        var deltaY = point.pageY - this.pointY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        if (this.hooks.trigger(this.hooks.eventTypes.move, {
            deltaX: deltaX,
            deltaY: deltaY,
            e: e,
        })) {
            return;
        }
        // auto end when out of viewport
        var scrollLeft = document.documentElement.scrollLeft ||
            window.pageXOffset ||
            document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
        var pX = this.pointX - scrollLeft;
        var pY = this.pointY - scrollTop;
        var autoEndDistance = this.options.autoEndDistance;
        if (pX > document.documentElement.clientWidth - autoEndDistance ||
            pY > document.documentElement.clientHeight - autoEndDistance ||
            pX < autoEndDistance ||
            pY < autoEndDistance) {
            this.end(e);
        }
    };
    ActionsHandler.prototype.end = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.setInitiated();
        this.beforeHandler(e, 'end');
        this.hooks.trigger(this.hooks.eventTypes.end, e);
    };
    ActionsHandler.prototype.click = function (e) {
        this.hooks.trigger(this.hooks.eventTypes.click, e);
    };
    ActionsHandler.prototype.setContent = function (content) {
        if (content !== this.wrapper) {
            this.wrapper = content;
            this.rebindDOMEvents();
        }
    };
    ActionsHandler.prototype.rebindDOMEvents = function () {
        this.wrapperEventRegister.destroy();
        this.targetEventRegister.destroy();
        this.handleDOMEvents();
    };
    ActionsHandler.prototype.destroy = function () {
        this.wrapperEventRegister.destroy();
        this.targetEventRegister.destroy();
        this.hooks.destroy();
    };
    return ActionsHandler;
}());

var translaterMetaData = {
    x: ['translateX', 'px'],
    y: ['translateY', 'px'],
};
var Translater = /** @class */ (function () {
    function Translater(content) {
        this.setContent(content);
        this.hooks = new EventEmitter(['beforeTranslate', 'translate']);
    }
    Translater.prototype.getComputedPosition = function () {
        var cssStyle = window.getComputedStyle(this.content, null);
        var matrix = cssStyle[style.transform].split(')')[0].split(', ');
        var x = +(matrix[12] || matrix[4]) || 0;
        var y = +(matrix[13] || matrix[5]) || 0;
        return {
            x: x,
            y: y,
        };
    };
    Translater.prototype.translate = function (point) {
        var transformStyle = [];
        Object.keys(point).forEach(function (key) {
            if (!translaterMetaData[key]) {
                return;
            }
            var transformFnName = translaterMetaData[key][0];
            if (transformFnName) {
                var transformFnArgUnit = translaterMetaData[key][1];
                var transformFnArg = point[key];
                transformStyle.push(transformFnName + "(" + transformFnArg + transformFnArgUnit + ")");
            }
        });
        this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, transformStyle, point);
        this.style[style.transform] = transformStyle.join(' ');
        this.hooks.trigger(this.hooks.eventTypes.translate, point);
    };
    Translater.prototype.setContent = function (content) {
        if (this.content !== content) {
            this.content = content;
            this.style = content.style;
        }
    };
    Translater.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Translater;
}());

var Base = /** @class */ (function () {
    function Base(content, translater, options) {
        this.translater = translater;
        this.options = options;
        this.timer = 0;
        this.hooks = new EventEmitter([
            'move',
            'end',
            'beforeForceStop',
            'forceStop',
            'callStop',
            'time',
            'timeFunction',
        ]);
        this.setContent(content);
    }
    Base.prototype.translate = function (endPoint) {
        this.translater.translate(endPoint);
    };
    Base.prototype.setPending = function (pending) {
        this.pending = pending;
    };
    Base.prototype.setForceStopped = function (forceStopped) {
        this.forceStopped = forceStopped;
    };
    Base.prototype.setCallStop = function (called) {
        this.callStopWhenPending = called;
    };
    Base.prototype.setContent = function (content) {
        if (this.content !== content) {
            this.content = content;
            this.style = content.style;
            this.stop();
        }
    };
    Base.prototype.clearTimer = function () {
        if (this.timer) {
            cancelAnimationFrame(this.timer);
            this.timer = 0;
        }
    };
    Base.prototype.destroy = function () {
        this.hooks.destroy();
        cancelAnimationFrame(this.timer);
    };
    return Base;
}());

// iOS 13.6 - 14.x, window.getComputedStyle sometimes will get wrong transform value
// when bs use transition mode
// eg: translateY -100px -> -200px, when the last frame which is about to scroll to -200px
// window.getComputedStyle(this.content) will calculate transformY to be -100px(startPoint)
// it is weird
// so we should validate position caculated by 'window.getComputedStyle'
var isValidPostion = function (startPoint, endPoint, currentPos, prePos) {
    var computeDirection = function (endValue, startValue) {
        var delta = endValue - startValue;
        var direction = delta > 0
            ? -1 /* Negative */
            : delta < 0
                ? 1 /* Positive */
                : 0 /* Default */;
        return direction;
    };
    var directionX = computeDirection(endPoint.x, startPoint.x);
    var directionY = computeDirection(endPoint.y, startPoint.y);
    var deltaX = currentPos.x - prePos.x;
    var deltaY = currentPos.y - prePos.y;
    return directionX * deltaX <= 0 && directionY * deltaY <= 0;
};

var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transition.prototype.startProbe = function (startPoint, endPoint) {
        var _this = this;
        var prePos = startPoint;
        var probe = function () {
            var pos = _this.translater.getComputedPosition();
            if (isValidPostion(startPoint, endPoint, pos, prePos)) {
                _this.hooks.trigger(_this.hooks.eventTypes.move, pos);
            }
            // call bs.stop() should not dispatch end hook again.
            // forceStop hook will do this.
            /* istanbul ignore if  */
            if (!_this.pending) {
                if (_this.callStopWhenPending) {
                    _this.callStopWhenPending = false;
                }
                else {
                    // transition ends should dispatch end hook.
                    _this.hooks.trigger(_this.hooks.eventTypes.end, pos);
                }
            }
            prePos = pos;
            if (_this.pending) {
                _this.timer = requestAnimationFrame(probe);
            }
        };
        // when manually call bs.stop(), then bs.scrollTo()
        // we should reset callStopWhenPending to dispatch end hook
        if (this.callStopWhenPending) {
            this.setCallStop(false);
        }
        cancelAnimationFrame(this.timer);
        probe();
    };
    Transition.prototype.transitionTime = function (time) {
        if (time === void 0) { time = 0; }
        this.style[style.transitionDuration] = time + 'ms';
        this.hooks.trigger(this.hooks.eventTypes.time, time);
    };
    Transition.prototype.transitionTimingFunction = function (easing) {
        this.style[style.transitionTimingFunction] = easing;
        this.hooks.trigger(this.hooks.eventTypes.timeFunction, easing);
    };
    Transition.prototype.transitionProperty = function () {
        this.style[style.transitionProperty] = style.transform;
    };
    Transition.prototype.move = function (startPoint, endPoint, time, easingFn) {
        this.setPending(time > 0);
        this.transitionTimingFunction(easingFn);
        this.transitionProperty();
        this.transitionTime(time);
        this.translate(endPoint);
        var isRealtimeProbeType = this.options.probeType === 3 /* Realtime */;
        if (time && isRealtimeProbeType) {
            this.startProbe(startPoint, endPoint);
        }
        // if we change content's transformY in a tick
        // such as: 0 -> 50px -> 0
        // transitionend will not be triggered
        // so we forceupdate by reflow
        if (!time) {
            this._reflow = this.content.offsetHeight;
            if (isRealtimeProbeType) {
                this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            }
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
        }
    };
    Transition.prototype.doStop = function () {
        var pending = this.pending;
        this.setForceStopped(false);
        this.setCallStop(false);
        // still in transition
        if (pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var _a = this.translater.getComputedPosition(), x = _a.x, y = _a.y;
            this.transitionTime();
            this.translate({ x: x, y: y });
            this.setForceStopped(true);
            this.setCallStop(true);
            this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: x, y: y });
        }
        return pending;
    };
    Transition.prototype.stop = function () {
        var stopFromTransition = this.doStop();
        if (stopFromTransition) {
            this.hooks.trigger(this.hooks.eventTypes.callStop);
        }
    };
    return Transition;
}(Base));

var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animation.prototype.move = function (startPoint, endPoint, time, easingFn) {
        // time is 0
        if (!time) {
            this.translate(endPoint);
            if (this.options.probeType === 3 /* Realtime */) {
                this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            }
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
            return;
        }
        this.animate(startPoint, endPoint, time, easingFn);
    };
    Animation.prototype.animate = function (startPoint, endPoint, duration, easingFn) {
        var _this = this;
        var startTime = getNow();
        var destTime = startTime + duration;
        var isRealtimeProbeType = this.options.probeType === 3 /* Realtime */;
        var step = function () {
            var now = getNow();
            // js animation end
            if (now >= destTime) {
                _this.translate(endPoint);
                if (isRealtimeProbeType) {
                    _this.hooks.trigger(_this.hooks.eventTypes.move, endPoint);
                }
                _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
                return;
            }
            now = (now - startTime) / duration;
            var easing = easingFn(now);
            var newPoint = {};
            Object.keys(endPoint).forEach(function (key) {
                var startValue = startPoint[key];
                var endValue = endPoint[key];
                newPoint[key] = (endValue - startValue) * easing + startValue;
            });
            _this.translate(newPoint);
            if (isRealtimeProbeType) {
                _this.hooks.trigger(_this.hooks.eventTypes.move, newPoint);
            }
            if (_this.pending) {
                _this.timer = requestAnimationFrame(step);
            }
            // call bs.stop() should not dispatch end hook again.
            // forceStop hook will do this.
            /* istanbul ignore if  */
            if (!_this.pending) {
                if (_this.callStopWhenPending) {
                    _this.callStopWhenPending = false;
                }
                else {
                    // raf ends should dispatch end hook.
                    _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
                }
            }
        };
        this.setPending(true);
        // when manually call bs.stop(), then bs.scrollTo()
        // we should reset callStopWhenPending to dispatch end hook
        if (this.callStopWhenPending) {
            this.setCallStop(false);
        }
        cancelAnimationFrame(this.timer);
        step();
    };
    Animation.prototype.doStop = function () {
        var pending = this.pending;
        this.setForceStopped(false);
        this.setCallStop(false);
        // still in requestFrameAnimation
        if (pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var pos = this.translater.getComputedPosition();
            this.setForceStopped(true);
            this.setCallStop(true);
            this.hooks.trigger(this.hooks.eventTypes.forceStop, pos);
        }
        return pending;
    };
    Animation.prototype.stop = function () {
        var stopFromAnimation = this.doStop();
        if (stopFromAnimation) {
            this.hooks.trigger(this.hooks.eventTypes.callStop);
        }
    };
    return Animation;
}(Base));

function createAnimater(element, translater, options) {
    var useTransition = options.useTransition;
    var animaterOptions = {};
    Object.defineProperty(animaterOptions, 'probeType', {
        enumerable: true,
        configurable: false,
        get: function () {
            return options.probeType;
        },
    });
    if (useTransition) {
        return new Transition(element, translater, animaterOptions);
    }
    else {
        return new Animation(element, translater, animaterOptions);
    }
}

var Behavior = /** @class */ (function () {
    function Behavior(wrapper, content, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter([
            'beforeComputeBoundary',
            'computeBoundary',
            'momentum',
            'end',
            'ignoreHasScroll'
        ]);
        this.refresh(content);
    }
    Behavior.prototype.start = function () {
        this.dist = 0;
        this.setMovingDirection(0 /* Default */);
        this.setDirection(0 /* Default */);
    };
    Behavior.prototype.move = function (delta) {
        delta = this.hasScroll ? delta : 0;
        this.setMovingDirection(delta);
        return this.performDampingAlgorithm(delta, this.options.outOfBoundaryDampingFactor);
    };
    Behavior.prototype.setMovingDirection = function (delta) {
        this.movingDirection =
            delta > 0
                ? -1 /* Negative */
                : delta < 0
                    ? 1 /* Positive */
                    : 0 /* Default */;
    };
    Behavior.prototype.setDirection = function (delta) {
        this.direction =
            delta > 0
                ? -1 /* Negative */
                : delta < 0
                    ? 1 /* Positive */
                    : 0 /* Default */;
    };
    Behavior.prototype.performDampingAlgorithm = function (delta, dampingFactor) {
        var newPos = this.currentPos + delta;
        // Slow down or stop if outside of the boundaries
        if (newPos > this.minScrollPos || newPos < this.maxScrollPos) {
            if ((newPos > this.minScrollPos && this.options.bounces[0]) ||
                (newPos < this.maxScrollPos && this.options.bounces[1])) {
                newPos = this.currentPos + delta * dampingFactor;
            }
            else {
                newPos =
                    newPos > this.minScrollPos ? this.minScrollPos : this.maxScrollPos;
            }
        }
        return newPos;
    };
    Behavior.prototype.end = function (duration) {
        var momentumInfo = {
            duration: 0
        };
        var absDist = Math.abs(this.currentPos - this.startPos);
        // start momentum animation if needed
        if (this.options.momentum &&
            duration < this.options.momentumLimitTime &&
            absDist > this.options.momentumLimitDistance) {
            var wrapperSize = (this.direction === -1 /* Negative */ && this.options.bounces[0]) ||
                (this.direction === 1 /* Positive */ && this.options.bounces[1])
                ? this.wrapperSize
                : 0;
            momentumInfo = this.hasScroll
                ? this.momentum(this.currentPos, this.startPos, duration, this.maxScrollPos, this.minScrollPos, wrapperSize, this.options)
                : { destination: this.currentPos, duration: 0 };
        }
        else {
            this.hooks.trigger(this.hooks.eventTypes.end, momentumInfo);
        }
        return momentumInfo;
    };
    Behavior.prototype.momentum = function (current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
        if (options === void 0) { options = this.options; }
        var distance = current - start;
        var speed = Math.abs(distance) / time;
        var deceleration = options.deceleration, swipeBounceTime = options.swipeBounceTime, swipeTime = options.swipeTime;
        var duration = Math.min(swipeTime, (speed * 2) / deceleration);
        var momentumData = {
            destination: current + ((speed * speed) / deceleration) * (distance < 0 ? -1 : 1),
            duration: duration,
            rate: 15
        };
        this.hooks.trigger(this.hooks.eventTypes.momentum, momentumData, distance);
        if (momentumData.destination < lowerMargin) {
            momentumData.destination = wrapperSize
                ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - (wrapperSize / momentumData.rate) * speed)
                : lowerMargin;
            momentumData.duration = swipeBounceTime;
        }
        else if (momentumData.destination > upperMargin) {
            momentumData.destination = wrapperSize
                ? Math.min(upperMargin + wrapperSize / 4, upperMargin + (wrapperSize / momentumData.rate) * speed)
                : upperMargin;
            momentumData.duration = swipeBounceTime;
        }
        momentumData.destination = Math.round(momentumData.destination);
        return momentumData;
    };
    Behavior.prototype.updateDirection = function () {
        var absDist = this.currentPos - this.absStartPos;
        this.setDirection(absDist);
    };
    Behavior.prototype.refresh = function (content) {
        var _a = this.options.rect, size = _a.size, position = _a.position;
        var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
        // Force reflow
        var wrapperRect = getRect(this.wrapper);
        // use client is more fair than offset
        this.wrapperSize = this.wrapper[size === 'width' ? 'clientWidth' : 'clientHeight'];
        this.setContent(content);
        var contentRect = getRect(this.content);
        this.contentSize = contentRect[size];
        this.relativeOffset = contentRect[position];
        /* istanbul ignore if  */
        if (isWrapperStatic) {
            this.relativeOffset -= wrapperRect[position];
        }
        this.computeBoundary();
        this.setDirection(0 /* Default */);
    };
    Behavior.prototype.setContent = function (content) {
        if (content !== this.content) {
            this.content = content;
            this.resetState();
        }
    };
    Behavior.prototype.resetState = function () {
        this.currentPos = 0;
        this.startPos = 0;
        this.dist = 0;
        this.setDirection(0 /* Default */);
        this.setMovingDirection(0 /* Default */);
        this.resetStartPos();
    };
    Behavior.prototype.computeBoundary = function () {
        this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
        var boundary = {
            minScrollPos: 0,
            maxScrollPos: this.wrapperSize - this.contentSize
        };
        if (boundary.maxScrollPos < 0) {
            boundary.maxScrollPos -= this.relativeOffset;
            if (this.options.specifiedIndexAsContent === 0) {
                boundary.minScrollPos = -this.relativeOffset;
            }
        }
        this.hooks.trigger(this.hooks.eventTypes.computeBoundary, boundary);
        this.minScrollPos = boundary.minScrollPos;
        this.maxScrollPos = boundary.maxScrollPos;
        this.hasScroll =
            this.options.scrollable && this.maxScrollPos < this.minScrollPos;
        if (!this.hasScroll && this.minScrollPos < this.maxScrollPos) {
            this.maxScrollPos = this.minScrollPos;
            this.contentSize = this.wrapperSize;
        }
    };
    Behavior.prototype.updatePosition = function (pos) {
        this.currentPos = pos;
    };
    Behavior.prototype.getCurrentPos = function () {
        return this.currentPos;
    };
    Behavior.prototype.checkInBoundary = function () {
        var position = this.adjustPosition(this.currentPos);
        var inBoundary = position === this.getCurrentPos();
        return {
            position: position,
            inBoundary: inBoundary
        };
    };
    // adjust position when out of boundary
    Behavior.prototype.adjustPosition = function (pos) {
        if (!this.hasScroll &&
            !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll)) {
            pos = this.minScrollPos;
        }
        else if (pos > this.minScrollPos) {
            pos = this.minScrollPos;
        }
        else if (pos < this.maxScrollPos) {
            pos = this.maxScrollPos;
        }
        return pos;
    };
    Behavior.prototype.updateStartPos = function () {
        this.startPos = this.currentPos;
    };
    Behavior.prototype.updateAbsStartPos = function () {
        this.absStartPos = this.currentPos;
    };
    Behavior.prototype.resetStartPos = function () {
        this.updateStartPos();
        this.updateAbsStartPos();
    };
    Behavior.prototype.getAbsDist = function (delta) {
        this.dist += delta;
        return Math.abs(this.dist);
    };
    Behavior.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Behavior;
}());

var _a, _b, _c, _d;
var PassthroughHandlers = (_a = {},
    _a["yes" /* Yes */] = function (e) {
        return true;
    },
    _a["no" /* No */] = function (e) {
        e.preventDefault();
        return false;
    },
    _a);
var DirectionMap = (_b = {},
    _b["horizontal" /* Horizontal */] = (_c = {},
        _c["yes" /* Yes */] = "horizontal" /* Horizontal */,
        _c["no" /* No */] = "vertical" /* Vertical */,
        _c),
    _b["vertical" /* Vertical */] = (_d = {},
        _d["yes" /* Yes */] = "vertical" /* Vertical */,
        _d["no" /* No */] = "horizontal" /* Horizontal */,
        _d),
    _b);
var DirectionLockAction = /** @class */ (function () {
    function DirectionLockAction(directionLockThreshold, freeScroll, eventPassthrough) {
        this.directionLockThreshold = directionLockThreshold;
        this.freeScroll = freeScroll;
        this.eventPassthrough = eventPassthrough;
        this.reset();
    }
    DirectionLockAction.prototype.reset = function () {
        this.directionLocked = "" /* Default */;
    };
    DirectionLockAction.prototype.checkMovingDirection = function (absDistX, absDistY, e) {
        this.computeDirectionLock(absDistX, absDistY);
        return this.handleEventPassthrough(e);
    };
    DirectionLockAction.prototype.adjustDelta = function (deltaX, deltaY) {
        if (this.directionLocked === "horizontal" /* Horizontal */) {
            deltaY = 0;
        }
        else if (this.directionLocked === "vertical" /* Vertical */) {
            deltaX = 0;
        }
        return {
            deltaX: deltaX,
            deltaY: deltaY
        };
    };
    DirectionLockAction.prototype.computeDirectionLock = function (absDistX, absDistY) {
        // If you are scrolling in one direction, lock it
        if (this.directionLocked === "" /* Default */ && !this.freeScroll) {
            if (absDistX > absDistY + this.directionLockThreshold) {
                this.directionLocked = "horizontal" /* Horizontal */; // lock horizontally
            }
            else if (absDistY >= absDistX + this.directionLockThreshold) {
                this.directionLocked = "vertical" /* Vertical */; // lock vertically
            }
            else {
                this.directionLocked = "none" /* None */; // no lock
            }
        }
    };
    DirectionLockAction.prototype.handleEventPassthrough = function (e) {
        var handleMap = DirectionMap[this.directionLocked];
        if (handleMap) {
            if (this.eventPassthrough === handleMap["yes" /* Yes */]) {
                return PassthroughHandlers["yes" /* Yes */](e);
            }
            else if (this.eventPassthrough === handleMap["no" /* No */]) {
                return PassthroughHandlers["no" /* No */](e);
            }
        }
        return false;
    };
    return DirectionLockAction;
}());

var applyQuadrantTransformation = function (deltaX, deltaY, quadrant) {
    if (quadrant === 2 /* Second */) {
        return [deltaY, -deltaX];
    }
    else if (quadrant === 3 /* Third */) {
        return [-deltaX, -deltaY];
    }
    else if (quadrant === 4 /* Forth */) {
        return [-deltaY, deltaX];
    }
    else {
        return [deltaX, deltaY];
    }
};
var ScrollerActions = /** @class */ (function () {
    function ScrollerActions(scrollBehaviorX, scrollBehaviorY, actionsHandler, animater, options) {
        this.hooks = new EventEmitter([
            'start',
            'beforeMove',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'end',
            'scrollEnd',
            'contentNotMoved',
            'detectMovingDirection',
            'coordinateTransformation',
        ]);
        this.scrollBehaviorX = scrollBehaviorX;
        this.scrollBehaviorY = scrollBehaviorY;
        this.actionsHandler = actionsHandler;
        this.animater = animater;
        this.options = options;
        this.directionLockAction = new DirectionLockAction(options.directionLockThreshold, options.freeScroll, options.eventPassthrough);
        this.enabled = true;
        this.bindActionsHandler();
    }
    ScrollerActions.prototype.bindActionsHandler = function () {
        var _this = this;
        // [mouse|touch]start event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleStart(e);
        });
        // [mouse|touch]move event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (_a) {
            var deltaX = _a.deltaX, deltaY = _a.deltaY, e = _a.e;
            if (!_this.enabled)
                return true;
            var _b = applyQuadrantTransformation(deltaX, deltaY, _this.options.quadrant), transformateDeltaX = _b[0], transformateDeltaY = _b[1];
            var transformateDeltaData = {
                deltaX: transformateDeltaX,
                deltaY: transformateDeltaY,
            };
            _this.hooks.trigger(_this.hooks.eventTypes.coordinateTransformation, transformateDeltaData);
            return _this.handleMove(transformateDeltaData.deltaX, transformateDeltaData.deltaY, e);
        });
        // [mouse|touch]end event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleEnd(e);
        });
        // click
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (e) {
            // handle native click event
            if (_this.enabled && !e._constructed) {
                _this.handleClick(e);
            }
        });
    };
    ScrollerActions.prototype.handleStart = function (e) {
        var timestamp = getNow();
        this.fingerMoved = false;
        this.contentMoved = false;
        this.startTime = timestamp;
        this.directionLockAction.reset();
        this.scrollBehaviorX.start();
        this.scrollBehaviorY.start();
        // force stopping last transition or animation
        this.animater.doStop();
        this.scrollBehaviorX.resetStartPos();
        this.scrollBehaviorY.resetStartPos();
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ScrollerActions.prototype.handleMove = function (deltaX, deltaY, e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeMove, e)) {
            return;
        }
        var absDistX = this.scrollBehaviorX.getAbsDist(deltaX);
        var absDistY = this.scrollBehaviorY.getAbsDist(deltaY);
        var timestamp = getNow();
        // We need to move at least momentumLimitDistance pixels
        // for the scrolling to initiate
        if (this.checkMomentum(absDistX, absDistY, timestamp)) {
            return true;
        }
        if (this.directionLockAction.checkMovingDirection(absDistX, absDistY, e)) {
            this.actionsHandler.setInitiated();
            return true;
        }
        var delta = this.directionLockAction.adjustDelta(deltaX, deltaY);
        var prevX = this.scrollBehaviorX.getCurrentPos();
        var newX = this.scrollBehaviorX.move(delta.deltaX);
        var prevY = this.scrollBehaviorY.getCurrentPos();
        var newY = this.scrollBehaviorY.move(delta.deltaY);
        if (this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
            return;
        }
        if (!this.fingerMoved) {
            this.fingerMoved = true;
        }
        var positionChanged = newX !== prevX || newY !== prevY;
        if (!this.contentMoved && !positionChanged) {
            this.hooks.trigger(this.hooks.eventTypes.contentNotMoved);
        }
        if (!this.contentMoved && positionChanged) {
            this.contentMoved = true;
            this.hooks.trigger(this.hooks.eventTypes.scrollStart);
        }
        if (this.contentMoved && positionChanged) {
            this.animater.translate({
                x: newX,
                y: newY,
            });
            this.dispatchScroll(timestamp);
        }
    };
    ScrollerActions.prototype.dispatchScroll = function (timestamp) {
        // dispatch scroll in interval time
        if (timestamp - this.startTime > this.options.momentumLimitTime) {
            // refresh time and starting position to initiate a momentum
            this.startTime = timestamp;
            this.scrollBehaviorX.updateStartPos();
            this.scrollBehaviorY.updateStartPos();
            if (this.options.probeType === 1 /* Throttle */) {
                this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
            }
        }
        // dispatch scroll all the time
        if (this.options.probeType > 1 /* Throttle */) {
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
        }
    };
    ScrollerActions.prototype.checkMomentum = function (absDistX, absDistY, timestamp) {
        return (timestamp - this.endTime > this.options.momentumLimitTime &&
            absDistY < this.options.momentumLimitDistance &&
            absDistX < this.options.momentumLimitDistance);
    };
    ScrollerActions.prototype.handleEnd = function (e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
            return;
        }
        var currentPos = this.getCurrentPos();
        this.scrollBehaviorX.updateDirection();
        this.scrollBehaviorY.updateDirection();
        if (this.hooks.trigger(this.hooks.eventTypes.end, e, currentPos)) {
            return true;
        }
        currentPos = this.ensureIntegerPos(currentPos);
        this.animater.translate(currentPos);
        this.endTime = getNow();
        var duration = this.endTime - this.startTime;
        this.hooks.trigger(this.hooks.eventTypes.scrollEnd, currentPos, duration);
    };
    ScrollerActions.prototype.ensureIntegerPos = function (currentPos) {
        this.ensuringInteger = true;
        var x = currentPos.x, y = currentPos.y;
        var _a = this.scrollBehaviorX, minScrollPosX = _a.minScrollPos, maxScrollPosX = _a.maxScrollPos;
        var _b = this.scrollBehaviorY, minScrollPosY = _b.minScrollPos, maxScrollPosY = _b.maxScrollPos;
        x = x > 0 ? Math.ceil(x) : Math.floor(x);
        y = y > 0 ? Math.ceil(y) : Math.floor(y);
        x = between(x, maxScrollPosX, minScrollPosX);
        y = between(y, maxScrollPosY, minScrollPosY);
        return { x: x, y: y };
    };
    ScrollerActions.prototype.handleClick = function (e) {
        if (!preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    ScrollerActions.prototype.getCurrentPos = function () {
        return {
            x: this.scrollBehaviorX.getCurrentPos(),
            y: this.scrollBehaviorY.getCurrentPos(),
        };
    };
    ScrollerActions.prototype.refresh = function () {
        this.endTime = 0;
    };
    ScrollerActions.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return ScrollerActions;
}());

function createActionsHandlerOptions(bsOptions) {
    var options = [
        'click',
        'bindToWrapper',
        'disableMouse',
        'disableTouch',
        'preventDefault',
        'stopPropagation',
        'tagException',
        'preventDefaultException',
        'autoEndDistance',
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    return options;
}
function createBehaviorOptions(bsOptions, extraProp, bounces, rect) {
    var options = [
        'momentum',
        'momentumLimitTime',
        'momentumLimitDistance',
        'deceleration',
        'swipeBounceTime',
        'swipeTime',
        'outOfBoundaryDampingFactor',
        'specifiedIndexAsContent',
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    // add extra property
    options.scrollable = !!bsOptions[extraProp];
    options.bounces = bounces;
    options.rect = rect;
    return options;
}

function bubbling(source, target, events) {
    events.forEach(function (event) {
        var sourceEvent;
        var targetEvent;
        if (typeof event === 'string') {
            sourceEvent = targetEvent = event;
        }
        else {
            sourceEvent = event.source;
            targetEvent = event.target;
        }
        source.on(sourceEvent, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return target.trigger.apply(target, __spreadArrays([targetEvent], args));
        });
    });
}

function isSamePoint(startPoint, endPoint) {
    // keys of startPoint and endPoint should be equal
    var keys = Object.keys(startPoint);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (startPoint[key] !== endPoint[key])
            return false;
    }
    return true;
}

var MIN_SCROLL_DISTANCE = 1;
var Scroller = /** @class */ (function () {
    function Scroller(wrapper, content, options) {
        this.wrapper = wrapper;
        this.content = content;
        this.resizeTimeout = 0;
        this.hooks = new EventEmitter([
            'beforeStart',
            'beforeMove',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'scrollEnd',
            'resize',
            'touchEnd',
            'end',
            'flick',
            'scrollCancel',
            'momentum',
            'scrollTo',
            'minDistanceScroll',
            'scrollToElement',
            'beforeRefresh',
        ]);
        this.options = options;
        var _a = this.options.bounce, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
        // direction X
        this.scrollBehaviorX = new Behavior(wrapper, content, createBehaviorOptions(options, 'scrollX', [left, right], {
            size: 'width',
            position: 'left',
        }));
        // direction Y
        this.scrollBehaviorY = new Behavior(wrapper, content, createBehaviorOptions(options, 'scrollY', [top, bottom], {
            size: 'height',
            position: 'top',
        }));
        this.translater = new Translater(this.content);
        this.animater = createAnimater(this.content, this.translater, this.options);
        this.actionsHandler = new ActionsHandler(this.options.bindToTarget ? this.content : wrapper, createActionsHandlerOptions(this.options));
        this.actions = new ScrollerActions(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
        var resizeHandler = this.resize.bind(this);
        this.resizeRegister = new EventRegister(window, [
            {
                name: 'orientationchange',
                handler: resizeHandler,
            },
            {
                name: 'resize',
                handler: resizeHandler,
            },
        ]);
        this.registerTransitionEnd();
        this.init();
    }
    Scroller.prototype.init = function () {
        var _this = this;
        this.bindTranslater();
        this.bindAnimater();
        this.bindActions();
        // enable pointer events when scrolling ends
        this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
            _this.togglePointerEvents(true);
        });
    };
    Scroller.prototype.registerTransitionEnd = function () {
        this.transitionEndRegister = new EventRegister(this.content, [
            {
                name: style.transitionEnd,
                handler: this.transitionEnd.bind(this),
            },
        ]);
    };
    Scroller.prototype.bindTranslater = function () {
        var _this = this;
        var hooks = this.translater.hooks;
        hooks.on(hooks.eventTypes.beforeTranslate, function (transformStyle) {
            if (_this.options.translateZ) {
                transformStyle.push(_this.options.translateZ);
            }
        });
        // disable pointer events when scrolling
        hooks.on(hooks.eventTypes.translate, function (pos) {
            var prevPos = _this.getCurrentPos();
            _this.updatePositions(pos);
            // scrollEnd will dispatch when scroll is force stopping in touchstart handler
            // so in touchend handler, don't toggle pointer-events
            if (_this.actions.ensuringInteger === true) {
                _this.actions.ensuringInteger = false;
                return;
            }
            // a valid translate
            if (pos.x !== prevPos.x || pos.y !== prevPos.y) {
                _this.togglePointerEvents(false);
            }
        });
    };
    Scroller.prototype.bindAnimater = function () {
        var _this = this;
        // reset position
        this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (pos) {
            if (!_this.resetPosition(_this.options.bounceTime)) {
                _this.animater.setPending(false);
                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
            }
        });
        bubbling(this.animater.hooks, this.hooks, [
            {
                source: this.animater.hooks.eventTypes.move,
                target: this.hooks.eventTypes.scroll,
            },
            {
                source: this.animater.hooks.eventTypes.forceStop,
                target: this.hooks.eventTypes.scrollEnd,
            },
        ]);
    };
    Scroller.prototype.bindActions = function () {
        var _this = this;
        var actions = this.actions;
        bubbling(actions.hooks, this.hooks, [
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeStart,
            },
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeScrollStart,
            },
            {
                source: actions.hooks.eventTypes.beforeMove,
                target: this.hooks.eventTypes.beforeMove,
            },
            {
                source: actions.hooks.eventTypes.scrollStart,
                target: this.hooks.eventTypes.scrollStart,
            },
            {
                source: actions.hooks.eventTypes.scroll,
                target: this.hooks.eventTypes.scroll,
            },
            {
                source: actions.hooks.eventTypes.beforeEnd,
                target: this.hooks.eventTypes.beforeEnd,
            },
        ]);
        actions.hooks.on(actions.hooks.eventTypes.end, function (e, pos) {
            _this.hooks.trigger(_this.hooks.eventTypes.touchEnd, pos);
            if (_this.hooks.trigger(_this.hooks.eventTypes.end, pos)) {
                return true;
            }
            // check if it is a click operation
            if (!actions.fingerMoved) {
                _this.hooks.trigger(_this.hooks.eventTypes.scrollCancel);
                if (_this.checkClick(e)) {
                    return true;
                }
            }
            // reset if we are outside of the boundaries
            if (_this.resetPosition(_this.options.bounceTime, ease.bounce)) {
                _this.animater.setForceStopped(false);
                return true;
            }
        });
        actions.hooks.on(actions.hooks.eventTypes.scrollEnd, function (pos, duration) {
            var deltaX = Math.abs(pos.x - _this.scrollBehaviorX.startPos);
            var deltaY = Math.abs(pos.y - _this.scrollBehaviorY.startPos);
            if (_this.checkFlick(duration, deltaX, deltaY)) {
                _this.animater.setForceStopped(false);
                _this.hooks.trigger(_this.hooks.eventTypes.flick);
                return;
            }
            if (_this.momentum(pos, duration)) {
                _this.animater.setForceStopped(false);
                return;
            }
            if (actions.contentMoved) {
                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
            }
            if (_this.animater.forceStopped) {
                _this.animater.setForceStopped(false);
            }
        });
    };
    Scroller.prototype.checkFlick = function (duration, deltaX, deltaY) {
        var flickMinMovingDistance = 1; // distinguish flick from click
        if (this.hooks.events.flick.length > 1 &&
            duration < this.options.flickLimitTime &&
            deltaX < this.options.flickLimitDistance &&
            deltaY < this.options.flickLimitDistance &&
            (deltaY > flickMinMovingDistance || deltaX > flickMinMovingDistance)) {
            return true;
        }
    };
    Scroller.prototype.momentum = function (pos, duration) {
        var meta = {
            time: 0,
            easing: ease.swiper,
            newX: pos.x,
            newY: pos.y,
        };
        // start momentum animation if needed
        var momentumX = this.scrollBehaviorX.end(duration);
        var momentumY = this.scrollBehaviorY.end(duration);
        meta.newX = isUndef(momentumX.destination)
            ? meta.newX
            : momentumX.destination;
        meta.newY = isUndef(momentumY.destination)
            ? meta.newY
            : momentumY.destination;
        meta.time = Math.max(momentumX.duration, momentumY.duration);
        this.hooks.trigger(this.hooks.eventTypes.momentum, meta, this);
        // when x or y changed, do momentum animation now!
        if (meta.newX !== pos.x || meta.newY !== pos.y) {
            // change easing function when scroller goes out of the boundaries
            if (meta.newX > this.scrollBehaviorX.minScrollPos ||
                meta.newX < this.scrollBehaviorX.maxScrollPos ||
                meta.newY > this.scrollBehaviorY.minScrollPos ||
                meta.newY < this.scrollBehaviorY.maxScrollPos) {
                meta.easing = ease.swipeBounce;
            }
            this.scrollTo(meta.newX, meta.newY, meta.time, meta.easing);
            return true;
        }
    };
    Scroller.prototype.checkClick = function (e) {
        var cancelable = {
            preventClick: this.animater.forceStopped,
        };
        // we scrolled less than momentumLimitDistance pixels
        if (this.hooks.trigger(this.hooks.eventTypes.checkClick)) {
            this.animater.setForceStopped(false);
            return true;
        }
        if (!cancelable.preventClick) {
            var _dblclick = this.options.dblclick;
            var dblclickTrigged = false;
            if (_dblclick && this.lastClickTime) {
                var _a = _dblclick.delay, delay = _a === void 0 ? 300 : _a;
                if (getNow() - this.lastClickTime < delay) {
                    dblclickTrigged = true;
                    dblclick(e);
                }
            }
            if (this.options.tap) {
                tap(e, this.options.tap);
            }
            if (this.options.click &&
                !preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
                click(e);
            }
            this.lastClickTime = dblclickTrigged ? null : getNow();
            return true;
        }
        return false;
    };
    Scroller.prototype.resize = function () {
        var _this = this;
        if (!this.actions.enabled) {
            return;
        }
        // fix a scroll problem under Android condition
        /* istanbul ignore if  */
        if (isAndroid) {
            this.wrapper.scrollTop = 0;
        }
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(function () {
            _this.hooks.trigger(_this.hooks.eventTypes.resize);
        }, this.options.resizePolling);
    };
    /* istanbul ignore next */
    Scroller.prototype.transitionEnd = function (e) {
        if (e.target !== this.content || !this.animater.pending) {
            return;
        }
        var animater = this.animater;
        animater.transitionTime();
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
            this.animater.setPending(false);
            if (this.options.probeType !== 3 /* Realtime */) {
                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos());
            }
        }
    };
    Scroller.prototype.togglePointerEvents = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        var el = this.content.children.length
            ? this.content.children
            : [this.content];
        var pointerEvents = enabled ? 'auto' : 'none';
        for (var i = 0; i < el.length; i++) {
            var node = el[i];
            // ignore BetterScroll instance's wrapper DOM
            /* istanbul ignore if  */
            if (node.isBScrollContainer) {
                continue;
            }
            node.style.pointerEvents = pointerEvents;
        }
    };
    Scroller.prototype.refresh = function (content) {
        var contentChanged = this.setContent(content);
        this.hooks.trigger(this.hooks.eventTypes.beforeRefresh);
        this.scrollBehaviorX.refresh(content);
        this.scrollBehaviorY.refresh(content);
        if (contentChanged) {
            this.translater.setContent(content);
            this.animater.setContent(content);
            this.transitionEndRegister.destroy();
            this.registerTransitionEnd();
            if (this.options.bindToTarget) {
                this.actionsHandler.setContent(content);
            }
        }
        this.actions.refresh();
        this.wrapperOffset = offset(this.wrapper);
    };
    Scroller.prototype.setContent = function (content) {
        var contentChanged = content !== this.content;
        if (contentChanged) {
            this.content = content;
        }
        return contentChanged;
    };
    Scroller.prototype.scrollBy = function (deltaX, deltaY, time, easing) {
        if (time === void 0) { time = 0; }
        var _a = this.getCurrentPos(), x = _a.x, y = _a.y;
        easing = !easing ? ease.bounce : easing;
        deltaX += x;
        deltaY += y;
        this.scrollTo(deltaX, deltaY, time, easing);
    };
    Scroller.prototype.scrollTo = function (x, y, time, easing, extraTransform) {
        if (time === void 0) { time = 0; }
        if (easing === void 0) { easing = ease.bounce; }
        if (extraTransform === void 0) { extraTransform = {
            start: {},
            end: {},
        }; }
        var easingFn = this.options.useTransition ? easing.style : easing.fn;
        var currentPos = this.getCurrentPos();
        var startPoint = __assign({ x: currentPos.x, y: currentPos.y }, extraTransform.start);
        var endPoint = __assign({ x: x,
            y: y }, extraTransform.end);
        this.hooks.trigger(this.hooks.eventTypes.scrollTo, endPoint);
        // it is an useless move
        if (isSamePoint(startPoint, endPoint))
            return;
        var deltaX = Math.abs(endPoint.x - startPoint.x);
        var deltaY = Math.abs(endPoint.y - startPoint.y);
        // considering of browser compatibility for decimal transform value
        // force translating immediately
        if (deltaX < MIN_SCROLL_DISTANCE && deltaY < MIN_SCROLL_DISTANCE) {
            time = 0;
            this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll);
        }
        this.animater.move(startPoint, endPoint, time, easingFn);
    };
    Scroller.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
        var targetEle = getElement(el);
        var pos = offset(targetEle);
        var getOffset = function (offset, size, wrapperSize) {
            if (typeof offset === 'number') {
                return offset;
            }
            // if offsetX/Y are true we center the element to the screen
            return offset ? Math.round(size / 2 - wrapperSize / 2) : 0;
        };
        offsetX = getOffset(offsetX, targetEle.offsetWidth, this.wrapper.offsetWidth);
        offsetY = getOffset(offsetY, targetEle.offsetHeight, this.wrapper.offsetHeight);
        var getPos = function (pos, wrapperPos, offset, scrollBehavior) {
            pos -= wrapperPos;
            pos = scrollBehavior.adjustPosition(pos - offset);
            return pos;
        };
        pos.left = getPos(pos.left, this.wrapperOffset.left, offsetX, this.scrollBehaviorX);
        pos.top = getPos(pos.top, this.wrapperOffset.top, offsetY, this.scrollBehaviorY);
        if (this.hooks.trigger(this.hooks.eventTypes.scrollToElement, targetEle, pos)) {
            return;
        }
        this.scrollTo(pos.left, pos.top, time, easing);
    };
    Scroller.prototype.resetPosition = function (time, easing) {
        if (time === void 0) { time = 0; }
        if (easing === void 0) { easing = ease.bounce; }
        var _a = this.scrollBehaviorX.checkInBoundary(), x = _a.position, xInBoundary = _a.inBoundary;
        var _b = this.scrollBehaviorY.checkInBoundary(), y = _b.position, yInBoundary = _b.inBoundary;
        if (xInBoundary && yInBoundary) {
            return false;
        }
        /* istanbul ignore if  */
        if (isIOSBadVersion) {
            // fix ios 13.4 bouncing
            // see it in issues 982
            this.reflow();
        }
        // out of boundary
        this.scrollTo(x, y, time, easing);
        return true;
    };
    /* istanbul ignore next */
    Scroller.prototype.reflow = function () {
        this._reflow = this.content.offsetHeight;
    };
    Scroller.prototype.updatePositions = function (pos) {
        this.scrollBehaviorX.updatePosition(pos.x);
        this.scrollBehaviorY.updatePosition(pos.y);
    };
    Scroller.prototype.getCurrentPos = function () {
        return this.actions.getCurrentPos();
    };
    Scroller.prototype.enable = function () {
        this.actions.enabled = true;
    };
    Scroller.prototype.disable = function () {
        cancelAnimationFrame(this.animater.timer);
        this.actions.enabled = false;
    };
    Scroller.prototype.destroy = function () {
        var _this = this;
        var keys = [
            'resizeRegister',
            'transitionEndRegister',
            'actionsHandler',
            'actions',
            'hooks',
            'animater',
            'translater',
            'scrollBehaviorX',
            'scrollBehaviorY',
        ];
        keys.forEach(function (key) { return _this[key].destroy(); });
    };
    return Scroller;
}());

var BScrollConstructor = /** @class */ (function (_super) {
    __extends(BScrollConstructor, _super);
    function BScrollConstructor(el, options) {
        var _this = _super.call(this, [
            'refresh',
            'contentChanged',
            'enable',
            'disable',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick',
            'destroy'
        ]) || this;
        var wrapper = getElement(el);
        if (!wrapper) {
            warn('Can not resolve the wrapper DOM.');
            return _this;
        }
        _this.plugins = {};
        _this.options = new OptionsConstructor().merge(options).process();
        if (!_this.setContent(wrapper).valid) {
            return _this;
        }
        _this.hooks = new EventEmitter([
            'refresh',
            'enable',
            'disable',
            'destroy',
            'beforeInitialScrollTo',
            'contentChanged'
        ]);
        _this.init(wrapper);
        return _this;
    }
    BScrollConstructor.use = function (ctor) {
        var name = ctor.pluginName;
        var installed = BScrollConstructor.plugins.some(function (plugin) { return ctor === plugin.ctor; });
        if (installed)
            return BScrollConstructor;
        if (isUndef(name)) {
            warn("Plugin Class must specify plugin's name in static property by 'pluginName' field.");
            return BScrollConstructor;
        }
        BScrollConstructor.pluginsMap[name] = true;
        BScrollConstructor.plugins.push({
            name: name,
            applyOrder: ctor.applyOrder,
            ctor: ctor
        });
        return BScrollConstructor;
    };
    BScrollConstructor.prototype.setContent = function (wrapper) {
        var contentChanged = false;
        var valid = true;
        var content = wrapper.children[this.options.specifiedIndexAsContent];
        if (!content) {
            warn('The wrapper need at least one child element to be content element to scroll.');
            valid = false;
        }
        else {
            contentChanged = this.content !== content;
            if (contentChanged) {
                this.content = content;
            }
        }
        return {
            valid: valid,
            contentChanged: contentChanged
        };
    };
    BScrollConstructor.prototype.init = function (wrapper) {
        var _this = this;
        this.wrapper = wrapper;
        // mark wrapper to recognize bs instance by DOM attribute
        wrapper.isBScrollContainer = true;
        this.scroller = new Scroller(wrapper, this.content, this.options);
        this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, function () {
            _this.refresh();
        });
        this.eventBubbling();
        this.handleAutoBlur();
        this.enable();
        this.proxy(propertiesConfig);
        this.applyPlugins();
        // maybe boundary has changed, should refresh
        this.refreshWithoutReset(this.content);
        var _a = this.options, startX = _a.startX, startY = _a.startY;
        var position = {
            x: startX,
            y: startY
        };
        // maybe plugins want to control scroll position
        if (this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, position)) {
            return;
        }
        this.scroller.scrollTo(position.x, position.y);
    };
    BScrollConstructor.prototype.applyPlugins = function () {
        var _this = this;
        var options = this.options;
        BScrollConstructor.plugins
            .sort(function (a, b) {
            var _a;
            var applyOrderMap = (_a = {},
                _a["pre" /* Pre */] = -1,
                _a["post" /* Post */] = 1,
                _a);
            var aOrder = a.applyOrder ? applyOrderMap[a.applyOrder] : 0;
            var bOrder = b.applyOrder ? applyOrderMap[b.applyOrder] : 0;
            return aOrder - bOrder;
        })
            .forEach(function (item) {
            var ctor = item.ctor;
            if (options[item.name] && typeof ctor === 'function') {
                _this.plugins[item.name] = new ctor(_this);
            }
        });
    };
    BScrollConstructor.prototype.handleAutoBlur = function () {
        /* istanbul ignore if  */
        if (this.options.autoBlur) {
            this.on(this.eventTypes.beforeScrollStart, function () {
                var activeElement = document.activeElement;
                if (activeElement &&
                    (activeElement.tagName === 'INPUT' ||
                        activeElement.tagName === 'TEXTAREA')) {
                    activeElement.blur();
                }
            });
        }
    };
    BScrollConstructor.prototype.eventBubbling = function () {
        bubbling(this.scroller.hooks, this, [
            this.eventTypes.beforeScrollStart,
            this.eventTypes.scrollStart,
            this.eventTypes.scroll,
            this.eventTypes.scrollEnd,
            this.eventTypes.scrollCancel,
            this.eventTypes.touchEnd,
            this.eventTypes.flick
        ]);
    };
    BScrollConstructor.prototype.refreshWithoutReset = function (content) {
        this.scroller.refresh(content);
        this.hooks.trigger(this.hooks.eventTypes.refresh, content);
        this.trigger(this.eventTypes.refresh, content);
    };
    BScrollConstructor.prototype.proxy = function (propertiesConfig) {
        var _this = this;
        propertiesConfig.forEach(function (_a) {
            var key = _a.key, sourceKey = _a.sourceKey;
            propertiesProxy(_this, sourceKey, key);
        });
    };
    BScrollConstructor.prototype.refresh = function () {
        var _a = this.setContent(this.wrapper), contentChanged = _a.contentChanged, valid = _a.valid;
        if (valid) {
            var content = this.content;
            this.refreshWithoutReset(content);
            if (contentChanged) {
                this.hooks.trigger(this.hooks.eventTypes.contentChanged, content);
                this.trigger(this.eventTypes.contentChanged, content);
            }
            this.scroller.resetPosition();
        }
    };
    BScrollConstructor.prototype.enable = function () {
        this.scroller.enable();
        this.hooks.trigger(this.hooks.eventTypes.enable);
        this.trigger(this.eventTypes.enable);
    };
    BScrollConstructor.prototype.disable = function () {
        this.scroller.disable();
        this.hooks.trigger(this.hooks.eventTypes.disable);
        this.trigger(this.eventTypes.disable);
    };
    BScrollConstructor.prototype.destroy = function () {
        this.hooks.trigger(this.hooks.eventTypes.destroy);
        this.trigger(this.eventTypes.destroy);
        this.scroller.destroy();
    };
    BScrollConstructor.prototype.eventRegister = function (names) {
        this.registerType(names);
    };
    BScrollConstructor.plugins = [];
    BScrollConstructor.pluginsMap = {};
    return BScrollConstructor;
}(EventEmitter));
function createBScroll(el, options) {
    var bs = new BScrollConstructor(el, options);
    return bs;
}
createBScroll.use = BScrollConstructor.use;
createBScroll.plugins = BScrollConstructor.plugins;
createBScroll.pluginsMap = BScrollConstructor.pluginsMap;
var BScroll = createBScroll;

/* harmony default export */ var core_esm = (BScroll);


// CONCATENATED MODULE: ./node_modules/@better-scroll/slide/dist/slide.esm.js
/*!
 * better-scroll / slide
 * (c) 2016-2021 ustbhuangyi
 * Released under the MIT License.
 */
function slide_esm_warn(msg) {
    console.error("[BScroll warn]: " + msg);
}

// ssr support
var slide_esm_inBrowser = typeof window !== 'undefined';
var slide_esm_ua = slide_esm_inBrowser && navigator.userAgent.toLowerCase();
!!(slide_esm_ua && /wechatdevtools/.test(slide_esm_ua));
slide_esm_ua && slide_esm_ua.indexOf('android') > 0;
/* istanbul ignore next */
((function () {
    if (typeof slide_esm_ua === 'string') {
        var regex = /os (\d\d?_\d(_\d)?)/;
        var matches = regex.exec(slide_esm_ua);
        if (!matches)
            return false;
        var parts = matches[1].split('_').map(function (item) {
            return parseInt(item, 10);
        });
        // ios version >= 13.4 issue 982
        return !!(parts[0] === 13 && parts[1] >= 4);
    }
    return false;
}))();
/* istanbul ignore next */
var slide_esm_supportsPassive = false;
/* istanbul ignore next */
if (slide_esm_inBrowser) {
    var slide_esm_EventName = 'test-passive';
    try {
        var slide_esm_opts = {};
        Object.defineProperty(slide_esm_opts, 'passive', {
            get: function () {
                slide_esm_supportsPassive = true;
            },
        }); // https://github.com/facebook/flow/issues/285
        window.addEventListener(slide_esm_EventName, function () { }, slide_esm_opts);
    }
    catch (e) { }
}

var slide_esm_extend = function (target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
    return target;
};
function slide_esm_between(x, min, max) {
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}

var slide_esm_elementStyle = (slide_esm_inBrowser &&
    document.createElement('div').style);
var slide_esm_vendor = (function () {
    /* istanbul ignore if  */
    if (!slide_esm_inBrowser) {
        return false;
    }
    var transformNames = [
        {
            key: 'standard',
            value: 'transform',
        },
        {
            key: 'webkit',
            value: 'webkitTransform',
        },
        {
            key: 'Moz',
            value: 'MozTransform',
        },
        {
            key: 'O',
            value: 'OTransform',
        },
        {
            key: 'ms',
            value: 'msTransform',
        },
    ];
    for (var _i = 0, transformNames_1 = transformNames; _i < transformNames_1.length; _i++) {
        var obj = transformNames_1[_i];
        if (slide_esm_elementStyle[obj.value] !== undefined) {
            return obj.key;
        }
    }
    /* istanbul ignore next  */
    return false;
})();
/* istanbul ignore next  */
function slide_esm_prefixStyle(style) {
    if (slide_esm_vendor === false) {
        return style;
    }
    if (slide_esm_vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return slide_esm_vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
slide_esm_vendor && slide_esm_vendor !== 'standard' ? '-' + slide_esm_vendor.toLowerCase() + '-' : '';
var slide_esm_transform = slide_esm_prefixStyle('transform');
var slide_esm_transition = slide_esm_prefixStyle('transition');
slide_esm_inBrowser && slide_esm_prefixStyle('perspective') in slide_esm_elementStyle;
({
    transform: slide_esm_transform,
    transition: slide_esm_transition,
    transitionTimingFunction: slide_esm_prefixStyle('transitionTimingFunction'),
    transitionDuration: slide_esm_prefixStyle('transitionDuration'),
    transitionDelay: slide_esm_prefixStyle('transitionDelay'),
    transformOrigin: slide_esm_prefixStyle('transformOrigin'),
    transitionEnd: slide_esm_prefixStyle('transitionEnd'),
    transitionProperty: slide_esm_prefixStyle('transitionProperty'),
});
function prepend(el, target) {
    var firstChild = target.firstChild;
    if (firstChild) {
        before(el, firstChild);
    }
    else {
        target.appendChild(el);
    }
}
function before(el, target) {
    var parentNode = target.parentNode;
    parentNode.insertBefore(el, target);
}
function removeChild(el, child) {
    el.removeChild(child);
}

var slide_esm_ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var PagesMatrix = /** @class */ (function () {
    function PagesMatrix(scroll) {
        this.scroll = scroll;
        this.init();
    }
    PagesMatrix.prototype.init = function () {
        var scroller = this.scroll.scroller;
        var scrollBehaviorX = scroller.scrollBehaviorX, scrollBehaviorY = scroller.scrollBehaviorY;
        this.wrapperWidth = scrollBehaviorX.wrapperSize;
        this.wrapperHeight = scrollBehaviorY.wrapperSize;
        this.scrollerHeight = scrollBehaviorY.contentSize;
        this.scrollerWidth = scrollBehaviorX.contentSize;
        this.pages = this.buildPagesMatrix(this.wrapperWidth, this.wrapperHeight);
        this.pageLengthOfX = this.pages ? this.pages.length : 0;
        this.pageLengthOfY = this.pages && this.pages[0] ? this.pages[0].length : 0;
    };
    PagesMatrix.prototype.getPageStats = function (pageX, pageY) {
        return this.pages[pageX][pageY];
    };
    PagesMatrix.prototype.getNearestPageIndex = function (x, y) {
        var pageX = 0;
        var pageY = 0;
        var l = this.pages.length;
        for (; pageX < l - 1; pageX++) {
            if (x >= this.pages[pageX][0].cx) {
                break;
            }
        }
        l = this.pages[pageX].length;
        for (; pageY < l - 1; pageY++) {
            if (y >= this.pages[0][pageY].cy) {
                break;
            }
        }
        return {
            pageX: pageX,
            pageY: pageY,
        };
    };
    // (n x 1) matrix for horizontal scroll or
    // (1 * n) matrix for vertical scroll
    PagesMatrix.prototype.buildPagesMatrix = function (stepX, stepY) {
        var pages = [];
        var x = 0;
        var y;
        var cx;
        var cy;
        var i = 0;
        var l;
        var maxScrollPosX = this.scroll.scroller.scrollBehaviorX.maxScrollPos;
        var maxScrollPosY = this.scroll.scroller.scrollBehaviorY.maxScrollPos;
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);
        while (x > -this.scrollerWidth) {
            pages[i] = [];
            l = 0;
            y = 0;
            while (y > -this.scrollerHeight) {
                pages[i][l] = {
                    x: Math.max(x, maxScrollPosX),
                    y: Math.max(y, maxScrollPosY),
                    width: stepX,
                    height: stepY,
                    cx: x - cx,
                    cy: y - cy,
                };
                y -= stepY;
                l++;
            }
            x -= stepX;
            i++;
        }
        return pages;
    };
    return PagesMatrix;
}());

var BASE_PAGE = {
    pageX: 0,
    pageY: 0,
    x: 0,
    y: 0,
};

var SlidePages = /** @class */ (function () {
    function SlidePages(scroll, slideOptions) {
        this.scroll = scroll;
        this.slideOptions = slideOptions;
        this.slideX = false;
        this.slideY = false;
        this.currentPage = slide_esm_extend({}, BASE_PAGE);
    }
    SlidePages.prototype.refresh = function () {
        this.pagesMatrix = new PagesMatrix(this.scroll);
        this.checkSlideLoop();
        this.currentPage = this.getAdjustedCurrentPage();
    };
    SlidePages.prototype.getAdjustedCurrentPage = function () {
        var _a = this.currentPage, pageX = _a.pageX, pageY = _a.pageY;
        // page index should be handled
        // because page counts may reduce
        pageX = Math.min(pageX, this.pagesMatrix.pageLengthOfX - 1);
        pageY = Math.min(pageY, this.pagesMatrix.pageLengthOfY - 1);
        // loop scene should also be respected
        // because clonedNode will cause pageLength increasing
        if (this.loopX) {
            pageX = Math.min(pageX, this.pagesMatrix.pageLengthOfX - 2);
        }
        if (this.loopY) {
            pageY = Math.min(pageY, this.pagesMatrix.pageLengthOfY - 2);
        }
        var _b = this.pagesMatrix.getPageStats(pageX, pageY), x = _b.x, y = _b.y;
        return { pageX: pageX, pageY: pageY, x: x, y: y };
    };
    SlidePages.prototype.setCurrentPage = function (newPage) {
        this.currentPage = newPage;
    };
    SlidePages.prototype.getInternalPage = function (pageX, pageY) {
        if (pageX >= this.pagesMatrix.pageLengthOfX) {
            pageX = this.pagesMatrix.pageLengthOfX - 1;
        }
        else if (pageX < 0) {
            pageX = 0;
        }
        if (pageY >= this.pagesMatrix.pageLengthOfY) {
            pageY = this.pagesMatrix.pageLengthOfY - 1;
        }
        else if (pageY < 0) {
            pageY = 0;
        }
        var _a = this.pagesMatrix.getPageStats(pageX, pageY), x = _a.x, y = _a.y;
        return {
            pageX: pageX,
            pageY: pageY,
            x: x,
            y: y,
        };
    };
    SlidePages.prototype.getInitialPage = function (showFirstPage, firstInitialised) {
        if (showFirstPage === void 0) { showFirstPage = false; }
        if (firstInitialised === void 0) { firstInitialised = false; }
        var _a = this.slideOptions, startPageXIndex = _a.startPageXIndex, startPageYIndex = _a.startPageYIndex;
        var firstPageX = this.loopX ? 1 : 0;
        var firstPageY = this.loopY ? 1 : 0;
        var pageX = showFirstPage ? firstPageX : this.currentPage.pageX;
        var pageY = showFirstPage ? firstPageY : this.currentPage.pageY;
        if (firstInitialised) {
            pageX = this.loopX ? startPageXIndex + 1 : startPageXIndex;
            pageY = this.loopY ? startPageYIndex + 1 : startPageYIndex;
        }
        else {
            pageX = showFirstPage ? firstPageX : this.currentPage.pageX;
            pageY = showFirstPage ? firstPageY : this.currentPage.pageY;
        }
        var _b = this.pagesMatrix.getPageStats(pageX, pageY), x = _b.x, y = _b.y;
        return {
            pageX: pageX,
            pageY: pageY,
            x: x,
            y: y,
        };
    };
    SlidePages.prototype.getExposedPage = function (page) {
        var exposedPage = slide_esm_extend({}, page);
        // only pageX or pageY need fix
        if (this.loopX) {
            exposedPage.pageX = this.fixedPage(exposedPage.pageX, this.pagesMatrix.pageLengthOfX - 2);
        }
        if (this.loopY) {
            exposedPage.pageY = this.fixedPage(exposedPage.pageY, this.pagesMatrix.pageLengthOfY - 2);
        }
        return exposedPage;
    };
    SlidePages.prototype.getExposedPageByPageIndex = function (pageIndexX, pageIndexY) {
        var page = {
            pageX: pageIndexX,
            pageY: pageIndexY,
        };
        if (this.loopX) {
            page.pageX = pageIndexX + 1;
        }
        if (this.loopY) {
            page.pageY = pageIndexY + 1;
        }
        var _a = this.pagesMatrix.getPageStats(page.pageX, page.pageY), x = _a.x, y = _a.y;
        return {
            x: x,
            y: y,
            pageX: pageIndexX,
            pageY: pageIndexY,
        };
    };
    SlidePages.prototype.getWillChangedPage = function (page) {
        page = slide_esm_extend({}, page);
        // Page need fix
        if (this.loopX) {
            page.pageX = this.fixedPage(page.pageX, this.pagesMatrix.pageLengthOfX - 2);
            page.x = this.pagesMatrix.getPageStats(page.pageX + 1, 0).x;
        }
        if (this.loopY) {
            page.pageY = this.fixedPage(page.pageY, this.pagesMatrix.pageLengthOfY - 2);
            page.y = this.pagesMatrix.getPageStats(0, page.pageY + 1).y;
        }
        return page;
    };
    SlidePages.prototype.fixedPage = function (page, realPageLen) {
        var pageIndex = [];
        for (var i = 0; i < realPageLen; i++) {
            pageIndex.push(i);
        }
        pageIndex.unshift(realPageLen - 1);
        pageIndex.push(0);
        return pageIndex[page];
    };
    SlidePages.prototype.getPageStats = function () {
        return this.pagesMatrix.getPageStats(this.currentPage.pageX, this.currentPage.pageY);
    };
    SlidePages.prototype.getValidPageIndex = function (x, y) {
        var lastX = this.pagesMatrix.pageLengthOfX - 1;
        var lastY = this.pagesMatrix.pageLengthOfY - 1;
        var firstX = 0;
        var firstY = 0;
        if (this.loopX) {
            x += 1;
            firstX = firstX + 1;
            lastX = lastX - 1;
        }
        if (this.loopY) {
            y += 1;
            firstY = firstY + 1;
            lastY = lastY - 1;
        }
        x = slide_esm_between(x, firstX, lastX);
        y = slide_esm_between(y, firstY, lastY);
        return {
            pageX: x,
            pageY: y,
        };
    };
    SlidePages.prototype.nextPageIndex = function () {
        return this.getPageIndexByDirection("positive" /* Positive */);
    };
    SlidePages.prototype.prevPageIndex = function () {
        return this.getPageIndexByDirection("negative" /* Negative */);
    };
    SlidePages.prototype.getNearestPage = function (x, y) {
        var pageIndex = this.pagesMatrix.getNearestPageIndex(x, y);
        var pageX = pageIndex.pageX, pageY = pageIndex.pageY;
        var newX = this.pagesMatrix.getPageStats(pageX, 0).x;
        var newY = this.pagesMatrix.getPageStats(0, pageY).y;
        return {
            x: newX,
            y: newY,
            pageX: pageX,
            pageY: pageY,
        };
    };
    SlidePages.prototype.getPageByDirection = function (page, directionX, directionY) {
        var pageX = page.pageX, pageY = page.pageY;
        if (pageX === this.currentPage.pageX) {
            pageX = slide_esm_between(pageX + directionX, 0, this.pagesMatrix.pageLengthOfX - 1);
        }
        if (pageY === this.currentPage.pageY) {
            pageY = slide_esm_between(pageY + directionY, 0, this.pagesMatrix.pageLengthOfY - 1);
        }
        var x = this.pagesMatrix.getPageStats(pageX, 0).x;
        var y = this.pagesMatrix.getPageStats(0, pageY).y;
        return {
            x: x,
            y: y,
            pageX: pageX,
            pageY: pageY,
        };
    };
    SlidePages.prototype.resetLoopPage = function () {
        if (this.loopX) {
            if (this.currentPage.pageX === 0) {
                return {
                    pageX: this.pagesMatrix.pageLengthOfX - 2,
                    pageY: this.currentPage.pageY,
                };
            }
            if (this.currentPage.pageX === this.pagesMatrix.pageLengthOfX - 1) {
                return {
                    pageX: 1,
                    pageY: this.currentPage.pageY,
                };
            }
        }
        if (this.loopY) {
            if (this.currentPage.pageY === 0) {
                return {
                    pageX: this.currentPage.pageX,
                    pageY: this.pagesMatrix.pageLengthOfY - 2,
                };
            }
            if (this.currentPage.pageY === this.pagesMatrix.pageLengthOfY - 1) {
                return {
                    pageX: this.currentPage.pageX,
                    pageY: 1,
                };
            }
        }
    };
    SlidePages.prototype.getPageIndexByDirection = function (direction) {
        var x = this.currentPage.pageX;
        var y = this.currentPage.pageY;
        if (this.slideX) {
            x = direction === "negative" /* Negative */ ? x - 1 : x + 1;
        }
        if (this.slideY) {
            y = direction === "negative" /* Negative */ ? y - 1 : y + 1;
        }
        return {
            pageX: x,
            pageY: y,
        };
    };
    SlidePages.prototype.checkSlideLoop = function () {
        this.wannaLoop = this.slideOptions.loop;
        if (this.pagesMatrix.pageLengthOfX > 1) {
            this.slideX = true;
        }
        else {
            this.slideX = false;
        }
        if (this.pagesMatrix.pages[0] && this.pagesMatrix.pageLengthOfY > 1) {
            this.slideY = true;
        }
        else {
            this.slideY = false;
        }
        this.loopX = this.wannaLoop && this.slideX;
        this.loopY = this.wannaLoop && this.slideY;
        if (this.slideX && this.slideY) {
            slide_esm_warn('slide does not support two direction at the same time.');
        }
    };
    return SlidePages;
}());

var sourcePrefix = 'plugins.slide';
var propertiesMap = [
    {
        key: 'next',
        name: 'next',
    },
    {
        key: 'prev',
        name: 'prev',
    },
    {
        key: 'goToPage',
        name: 'goToPage',
    },
    {
        key: 'getCurrentPage',
        name: 'getCurrentPage',
    },
    {
        key: 'startPlay',
        name: 'startPlay',
    },
    {
        key: 'pausePlay',
        name: 'pausePlay',
    },
];
var slide_esm_propertiesConfig = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name,
    };
});

var samePage = function (p1, p2) {
    return p1.pageX === p2.pageX && p1.pageY === p2.pageY;
};
var Slide = /** @class */ (function () {
    function Slide(scroll) {
        this.scroll = scroll;
        this.cachedClonedPageDOM = [];
        this.resetLooping = false;
        this.autoplayTimer = 0;
        if (!this.satisfyInitialization()) {
            return;
        }
        this.init();
    }
    Slide.prototype.satisfyInitialization = function () {
        if (this.scroll.scroller.content.children.length <= 0) {
            slide_esm_warn("slide need at least one slide page to be initialised." +
                "please check your DOM layout.");
            return false;
        }
        return true;
    };
    Slide.prototype.init = function () {
        this.willChangeToPage = slide_esm_extend({}, BASE_PAGE);
        this.handleBScroll();
        this.handleOptions();
        this.handleHooks();
        this.createPages();
    };
    Slide.prototype.createPages = function () {
        this.pages = new SlidePages(this.scroll, this.options);
    };
    Slide.prototype.handleBScroll = function () {
        this.scroll.registerType(['slideWillChange', 'slidePageChanged']);
        this.scroll.proxy(slide_esm_propertiesConfig);
    };
    Slide.prototype.handleOptions = function () {
        var userOptions = (this.scroll.options.slide === true
            ? {}
            : this.scroll.options.slide);
        var defaultOptions = {
            loop: true,
            threshold: 0.1,
            speed: 400,
            easing: slide_esm_ease.bounce,
            listenFlick: true,
            autoplay: true,
            interval: 3000,
            startPageXIndex: 0,
            startPageYIndex: 0,
        };
        this.options = slide_esm_extend(defaultOptions, userOptions);
    };
    Slide.prototype.handleLoop = function (prevSlideContent) {
        var loop = this.options.loop;
        var slideContent = this.scroll.scroller.content;
        var currentSlidePagesLength = slideContent.children.length;
        // only should respect loop scene
        if (loop) {
            if (slideContent !== prevSlideContent) {
                this.resetLoopChangedStatus();
                this.removeClonedSlidePage(prevSlideContent);
                currentSlidePagesLength > 1 &&
                    this.cloneFirstAndLastSlidePage(slideContent);
            }
            else {
                // many pages reduce to one page
                if (currentSlidePagesLength === 3 && this.initialised) {
                    this.removeClonedSlidePage(slideContent);
                    this.moreToOnePageInLoop = true;
                    this.oneToMorePagesInLoop = false;
                }
                else if (currentSlidePagesLength > 1) {
                    // one page increases to many page
                    if (this.initialised && this.cachedClonedPageDOM.length === 0) {
                        this.oneToMorePagesInLoop = true;
                        this.moreToOnePageInLoop = false;
                    }
                    else {
                        this.removeClonedSlidePage(slideContent);
                        this.resetLoopChangedStatus();
                    }
                    this.cloneFirstAndLastSlidePage(slideContent);
                }
                else {
                    this.resetLoopChangedStatus();
                }
            }
        }
    };
    Slide.prototype.resetLoopChangedStatus = function () {
        this.moreToOnePageInLoop = false;
        this.oneToMorePagesInLoop = false;
    };
    Slide.prototype.handleHooks = function () {
        var _this = this;
        var scrollHooks = this.scroll.hooks;
        var scrollerHooks = this.scroll.scroller.hooks;
        var listenFlick = this.options.listenFlick;
        this.prevContent = this.scroll.scroller.content;
        this.hooksFn = [];
        // scroll
        this.registerHooks(this.scroll, this.scroll.eventTypes.beforeScrollStart, this.pausePlay);
        this.registerHooks(this.scroll, this.scroll.eventTypes.scrollEnd, this.modifyCurrentPage);
        this.registerHooks(this.scroll, this.scroll.eventTypes.scrollEnd, this.startPlay);
        // for mousewheel event
        if (this.scroll.eventTypes.mousewheelMove) {
            this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelMove, function () {
                // prevent default action of mousewheelMove
                return true;
            });
            this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelEnd, function (delta) {
                if (delta.directionX === 1 /* Positive */ ||
                    delta.directionY === 1 /* Positive */) {
                    _this.next();
                }
                if (delta.directionX === -1 /* Negative */ ||
                    delta.directionY === -1 /* Negative */) {
                    _this.prev();
                }
            });
        }
        // scrollHooks
        this.registerHooks(scrollHooks, scrollHooks.eventTypes.refresh, this.refreshHandler);
        this.registerHooks(scrollHooks, scrollHooks.eventTypes.destroy, this.destroy);
        // scroller
        this.registerHooks(scrollerHooks, scrollerHooks.eventTypes.beforeRefresh, function () {
            _this.handleLoop(_this.prevContent);
            _this.setSlideInlineStyle();
        });
        this.registerHooks(scrollerHooks, scrollerHooks.eventTypes.momentum, this.modifyScrollMetaHandler);
        this.registerHooks(scrollerHooks, scrollerHooks.eventTypes.scroll, this.scrollHandler);
        // a click operation will clearTimer, so restart a new one
        this.registerHooks(scrollerHooks, scrollerHooks.eventTypes.checkClick, this.startPlay);
        if (listenFlick) {
            this.registerHooks(scrollerHooks, scrollerHooks.eventTypes.flick, this.flickHandler);
        }
    };
    Slide.prototype.startPlay = function () {
        var _this = this;
        var _a = this.options, interval = _a.interval, autoplay = _a.autoplay;
        if (autoplay) {
            clearTimeout(this.autoplayTimer);
            this.autoplayTimer = window.setTimeout(function () {
                _this.next();
            }, interval);
        }
    };
    Slide.prototype.pausePlay = function () {
        if (this.options.autoplay) {
            clearTimeout(this.autoplayTimer);
        }
    };
    Slide.prototype.setSlideInlineStyle = function () {
        var styleConfigurations = [
            {
                direction: 'scrollX',
                sizeType: 'offsetWidth',
                styleType: 'width',
            },
            {
                direction: 'scrollY',
                sizeType: 'offsetHeight',
                styleType: 'height',
            },
        ];
        var _a = this.scroll.scroller, slideContent = _a.content, slideWrapper = _a.wrapper;
        var scrollOptions = this.scroll.options;
        styleConfigurations.forEach(function (_a) {
            var direction = _a.direction, sizeType = _a.sizeType, styleType = _a.styleType;
            // wanna scroll in this direction
            if (scrollOptions[direction]) {
                var size = slideWrapper[sizeType];
                var children = slideContent.children;
                var length_1 = children.length;
                for (var i = 0; i < length_1; i++) {
                    var slidePageDOM = children[i];
                    slidePageDOM.style[styleType] = size + 'px';
                }
                slideContent.style[styleType] = size * length_1 + 'px';
            }
        });
    };
    Slide.prototype.next = function (time, easing) {
        var _a = this.pages.nextPageIndex(), pageX = _a.pageX, pageY = _a.pageY;
        this.goTo(pageX, pageY, time, easing);
    };
    Slide.prototype.prev = function (time, easing) {
        var _a = this.pages.prevPageIndex(), pageX = _a.pageX, pageY = _a.pageY;
        this.goTo(pageX, pageY, time, easing);
    };
    Slide.prototype.goToPage = function (pageX, pageY, time, easing) {
        var pageIndex = this.pages.getValidPageIndex(pageX, pageY);
        this.goTo(pageIndex.pageX, pageIndex.pageY, time, easing);
    };
    Slide.prototype.getCurrentPage = function () {
        return this.exposedPage || this.pages.getInitialPage(false, true);
    };
    Slide.prototype.setCurrentPage = function (page) {
        this.pages.setCurrentPage(page);
        this.exposedPage = this.pages.getExposedPage(page);
    };
    Slide.prototype.nearestPage = function (x, y) {
        var _a = this.scroll.scroller, scrollBehaviorX = _a.scrollBehaviorX, scrollBehaviorY = _a.scrollBehaviorY;
        var maxScrollPosX = scrollBehaviorX.maxScrollPos, minScrollPosX = scrollBehaviorX.minScrollPos;
        var maxScrollPosY = scrollBehaviorY.maxScrollPos, minScrollPosY = scrollBehaviorY.minScrollPos;
        return this.pages.getNearestPage(slide_esm_between(x, maxScrollPosX, minScrollPosX), slide_esm_between(y, maxScrollPosY, minScrollPosY));
    };
    Slide.prototype.satisfyThreshold = function (x, y) {
        var _a = this.scroll.scroller, scrollBehaviorX = _a.scrollBehaviorX, scrollBehaviorY = _a.scrollBehaviorY;
        var satisfied = true;
        if (Math.abs(x - scrollBehaviorX.absStartPos) <= this.thresholdX &&
            Math.abs(y - scrollBehaviorY.absStartPos) <= this.thresholdY) {
            satisfied = false;
        }
        return satisfied;
    };
    Slide.prototype.refreshHandler = function (content) {
        var _this = this;
        if (!this.satisfyInitialization()) {
            return;
        }
        this.pages.refresh();
        this.computeThreshold();
        var contentChanged = (this.contentChanged = this.prevContent !== content);
        if (contentChanged) {
            this.prevContent = content;
        }
        var initPage = this.pages.getInitialPage(this.oneToMorePagesInLoop || this.moreToOnePageInLoop, contentChanged || !this.initialised);
        if (this.initialised) {
            this.goTo(initPage.pageX, initPage.pageY, 0);
        }
        else {
            this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.beforeInitialScrollTo, function (position) {
                _this.initialised = true;
                position.x = initPage.x;
                position.y = initPage.y;
            });
        }
        this.startPlay();
    };
    Slide.prototype.computeThreshold = function () {
        var threshold = this.options.threshold;
        // Integer
        if (threshold % 1 === 0) {
            this.thresholdX = threshold;
            this.thresholdY = threshold;
        }
        else {
            // decimal
            var _a = this.pages.getPageStats(), width = _a.width, height = _a.height;
            this.thresholdX = Math.round(width * threshold);
            this.thresholdY = Math.round(height * threshold);
        }
    };
    Slide.prototype.cloneFirstAndLastSlidePage = function (slideContent) {
        var children = slideContent.children;
        var preprendDOM = children[children.length - 1].cloneNode(true);
        var appendDOM = children[0].cloneNode(true);
        prepend(preprendDOM, slideContent);
        slideContent.appendChild(appendDOM);
        this.cachedClonedPageDOM = [preprendDOM, appendDOM];
    };
    Slide.prototype.removeClonedSlidePage = function (slideContent) {
        // maybe slideContent has removed from DOM Tree
        var slidePages = (slideContent && slideContent.children) || [];
        if (slidePages.length) {
            this.cachedClonedPageDOM.forEach(function (el) {
                removeChild(slideContent, el);
            });
        }
        this.cachedClonedPageDOM = [];
    };
    Slide.prototype.modifyCurrentPage = function (point) {
        var _a = this.getCurrentPage(), prevExposedPageX = _a.pageX, prevExposedPageY = _a.pageY;
        var newPage = this.nearestPage(point.x, point.y);
        this.setCurrentPage(newPage);
        /* istanbul ignore if */
        if (this.contentChanged) {
            this.contentChanged = false;
            return true;
        }
        var _b = this.getCurrentPage(), currentExposedPageX = _b.pageX, currentExposedPageY = _b.pageY;
        this.pageWillChangeTo(newPage);
        // loop is true, and one page becomes many pages when call bs.refresh
        if (this.oneToMorePagesInLoop) {
            this.oneToMorePagesInLoop = false;
            return true;
        }
        // loop is true, and many page becomes one page when call bs.refresh
        // if prevPage > 0, dispatch slidePageChanged and scrollEnd events
        /* istanbul ignore if */
        if (this.moreToOnePageInLoop &&
            prevExposedPageX === 0 &&
            prevExposedPageY === 0) {
            this.moreToOnePageInLoop = false;
            return true;
        }
        if (prevExposedPageX !== currentExposedPageX ||
            prevExposedPageY !== currentExposedPageY) {
            // only trust pageX & pageY when loop is true
            var page = this.pages.getExposedPageByPageIndex(currentExposedPageX, currentExposedPageY);
            this.scroll.trigger(this.scroll.eventTypes.slidePageChanged, page);
        }
        // triggered by resetLoop
        if (this.resetLooping) {
            this.resetLooping = false;
            return;
        }
        var changePage = this.pages.resetLoopPage();
        if (changePage) {
            this.resetLooping = true;
            this.goTo(changePage.pageX, changePage.pageY, 0);
            // stop user's scrollEnd
            // since it is a seamless scroll
            return true;
        }
    };
    Slide.prototype.goTo = function (pageX, pageY, time, easing) {
        var newPage = this.pages.getInternalPage(pageX, pageY);
        var scrollEasing = easing || this.options.easing || slide_esm_ease.bounce;
        var x = newPage.x, y = newPage.y;
        var deltaX = x - this.scroll.scroller.scrollBehaviorX.currentPos;
        var deltaY = y - this.scroll.scroller.scrollBehaviorY.currentPos;
        /* istanbul ignore if */
        if (!deltaX && !deltaY) {
            this.scroll.scroller.togglePointerEvents(true);
            return;
        }
        time = time === undefined ? this.getEaseTime(deltaX, deltaY) : time;
        this.scroll.scroller.scrollTo(x, y, time, scrollEasing);
    };
    Slide.prototype.flickHandler = function () {
        var _a = this.scroll.scroller, scrollBehaviorX = _a.scrollBehaviorX, scrollBehaviorY = _a.scrollBehaviorY;
        var currentPosX = scrollBehaviorX.currentPos, startPosX = scrollBehaviorX.startPos, directionX = scrollBehaviorX.direction;
        var currentPosY = scrollBehaviorY.currentPos, startPosY = scrollBehaviorY.startPos, directionY = scrollBehaviorY.direction;
        var _b = this.pages.currentPage, pageX = _b.pageX, pageY = _b.pageY;
        var time = this.getEaseTime(currentPosX - startPosX, currentPosY - startPosY);
        this.goTo(pageX + directionX, pageY + directionY, time);
    };
    Slide.prototype.getEaseTime = function (deltaX, deltaY) {
        return (this.options.speed ||
            Math.max(Math.max(Math.min(Math.abs(deltaX), 1000), Math.min(Math.abs(deltaY), 1000)), 300));
    };
    Slide.prototype.modifyScrollMetaHandler = function (scrollMeta) {
        var _a = this.scroll.scroller, scrollBehaviorX = _a.scrollBehaviorX, scrollBehaviorY = _a.scrollBehaviorY, animater = _a.animater;
        var newX = scrollMeta.newX;
        var newY = scrollMeta.newY;
        var newPage = this.satisfyThreshold(newX, newY) || animater.forceStopped
            ? this.pages.getPageByDirection(this.nearestPage(newX, newY), scrollBehaviorX.direction, scrollBehaviorY.direction)
            : this.pages.currentPage;
        scrollMeta.time = this.getEaseTime(scrollMeta.newX - newPage.x, scrollMeta.newY - newPage.y);
        scrollMeta.newX = newPage.x;
        scrollMeta.newY = newPage.y;
        scrollMeta.easing = this.options.easing || slide_esm_ease.bounce;
    };
    Slide.prototype.scrollHandler = function (_a) {
        var x = _a.x, y = _a.y;
        if (this.satisfyThreshold(x, y)) {
            var newPage = this.nearestPage(x, y);
            this.pageWillChangeTo(newPage);
        }
    };
    Slide.prototype.pageWillChangeTo = function (newPage) {
        var changeToPage = this.pages.getWillChangedPage(newPage);
        if (!samePage(this.willChangeToPage, changeToPage)) {
            this.willChangeToPage = changeToPage;
            this.scroll.trigger(this.scroll.eventTypes.slideWillChange, this.willChangeToPage);
        }
    };
    Slide.prototype.registerHooks = function (hooks, name, handler) {
        hooks.on(name, handler, this);
        this.hooksFn.push([hooks, name, handler]);
    };
    Slide.prototype.destroy = function () {
        var slideContent = this.scroll.scroller.content;
        var _a = this.options, loop = _a.loop, autoplay = _a.autoplay;
        if (loop) {
            this.removeClonedSlidePage(slideContent);
        }
        if (autoplay) {
            clearTimeout(this.autoplayTimer);
        }
        this.hooksFn.forEach(function (item) {
            var hooks = item[0];
            var hooksName = item[1];
            var handlerFn = item[2];
            if (hooks.eventTypes[hooksName]) {
                hooks.off(hooksName, handlerFn);
            }
        });
        this.hooksFn.length = 0;
    };
    Slide.pluginName = 'slide';
    return Slide;
}());

/* harmony default export */ var slide_esm = (Slide);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/slider/slider.vue?vue&type=script&lang=js




core_esm.use(slide_esm)
const slidervue_type_script_lang_js_COMPONENT_NAME = 'lity-slider'
/* harmony default export */ var slidervue_type_script_lang_js = ({
  name: slidervue_type_script_lang_js_COMPONENT_NAME,
  emits: ['change'],
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 400
    },
    interval: {
      type: Number,
      default: 3000
    },
    showDot: {
      type: Boolean,
      default: true
    },
    direction: {
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1
      },
      default: 'horizontal'
    }
  },
  setup (props, context) {
    const rootRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null)
    const slider = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null)
    const currentPageIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0)
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(async () => {
      await Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])()
      const sliderVal = slider.value = new core_esm(rootRef.value, {
        click: true,
        scrollX: !!(props.direction === 'horizontal'),
        scrollY: !!(props.direction === 'vertical'),
        momentum: false,
        bounce: false,
        probeType: 2,
        slide: true,
        loop: props.direction,
        speed: props.speed,
        autoplay: props.autoplay,
        interval: props.interval
      })

      sliderVal.on('slideWillChange', (page) => {
        currentPageIndex.value = props.direction === 'horizontal' ? page.pageX : page.pageY
        context.emit('change', currentPageIndex.value)
      })
    })

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onUnmounted"])(() => {
      slider.value.destroy()
    })

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onActivated"])(() => {
      slider.value.enable()
      slider.value.refresh()
    })

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onDeactivated"])(() => {
      slider.value.disable()
    })

    return {
      slider,
      rootRef,
      currentPageIndex
    }
  }
});

// CONCATENATED MODULE: ./packages/slider/slider.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/slider/slider.vue?vue&type=style&index=0&id=f004cc76&lang=scss
var slidervue_type_style_index_0_id_f004cc76_lang_scss = __webpack_require__("6716");

// CONCATENATED MODULE: ./packages/slider/slider.vue





slidervue_type_script_lang_js.render = slidervue_type_template_id_f004cc76_render

/* harmony default export */ var slider_slider = (slidervue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/slider/slider-item.vue?vue&type=template&id=1f62f882


const slider_itemvue_type_template_id_1f62f882_hoisted_1 = { class: "lity-slider-item" }

function slider_itemvue_type_template_id_1f62f882_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", slider_itemvue_type_template_id_1f62f882_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
  ]))
}
// CONCATENATED MODULE: ./packages/slider/slider-item.vue?vue&type=template&id=1f62f882

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/slider/slider-item.vue?vue&type=script&lang=js

const slider_itemvue_type_script_lang_js_COMPONENT_NAME = 'lity-slider-item'
/* harmony default export */ var slider_itemvue_type_script_lang_js = ({
  name: slider_itemvue_type_script_lang_js_COMPONENT_NAME
});

// CONCATENATED MODULE: ./packages/slider/slider-item.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/slider/slider-item.vue?vue&type=style&index=0&id=1f62f882&lang=scss
var slider_itemvue_type_style_index_0_id_1f62f882_lang_scss = __webpack_require__("0b8c");

// CONCATENATED MODULE: ./packages/slider/slider-item.vue





slider_itemvue_type_script_lang_js.render = slider_itemvue_type_template_id_1f62f882_render

/* harmony default export */ var slider_item = (slider_itemvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/switch/switch.vue?vue&type=template&id=f57ddda0


function switchvue_type_template_id_f57ddda0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("input", {
    type: "checkbox",
    class: ["lity-switch", `lity-switch-${$props.size}`],
    disabled: $props.disabled,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($setup.checked = $event)),
    onChange: _cache[2] || (_cache[2] = (...args) => ($setup.changeHalder && $setup.changeHalder(...args))),
    style: {color: $props.color}
  }, null, 46, ["disabled"])), [
    [external_commonjs_vue_commonjs2_vue_root_Vue_["vModelCheckbox"], $setup.checked]
  ])
}
// CONCATENATED MODULE: ./packages/switch/switch.vue?vue&type=template&id=f57ddda0

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/switch/switch.vue?vue&type=script&lang=js



const switchvue_type_script_lang_js_COMPONENT_NAME = 'lity-switch'
/* harmony default export */ var switchvue_type_script_lang_js = ({
  name: switchvue_type_script_lang_js_COMPONENT_NAME,
  emits: ['change', 'update:modelValue'],
  props: {
    modelValue: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#07c160'
    },
    size: {
      validator (val) {
        return ['small', 'normal', 'large'].indexOf(val) > -1
      },
      default: 'normal'
    },
    val: {
      type: [Boolean, String, Number]
    }
  },
  setup (props, context) {
    const checked = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])({
      get () {
        return props.modelValue
      },
      set (value) {
        context.emit('update:modelValue', value)
      }
    })
    function changeHalder () {
      if (props.disabled) return
      context.emit('change', checked.value)
    }
    return {
      checked,
      changeHalder
    }
  }
});

// CONCATENATED MODULE: ./packages/switch/switch.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/switch/switch.vue?vue&type=style&index=0&id=f57ddda0&lang=scss
var switchvue_type_style_index_0_id_f57ddda0_lang_scss = __webpack_require__("b735");

// CONCATENATED MODULE: ./packages/switch/switch.vue





switchvue_type_script_lang_js.render = switchvue_type_template_id_f57ddda0_render

/* harmony default export */ var switch_switch = (switchvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/tab/tab.vue?vue&type=template&id=3d912c5c


const tabvue_type_template_id_3d912c5c_hoisted_1 = {
  class: "lity-tab",
  ref: "tabRef"
}
const tabvue_type_template_id_3d912c5c_hoisted_2 = {
  key: 0,
  ref: "sliderRef",
  class: "lity-tab-slider"
}
const tabvue_type_template_id_3d912c5c_hoisted_3 = { class: "lity-tab-panels" }
const tabvue_type_template_id_3d912c5c_hoisted_4 = {
  class: "lity-tab-panels-group",
  ref: "panelGroupRef"
}

function tabvue_type_template_id_3d912c5c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", tabvue_type_template_id_3d912c5c_hoisted_1, [
      (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.data, (item, index) => {
        return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
          key: index,
          class: ["lity-tab-item", item.label === $setup.isActive ?'lity-tab_active':''],
          onClick: $event => ($setup.handleClick(item.label))
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.label), 1)
        ], 10, ["onClick"]))
      }), 128)),
      ($props.showSlider)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", tabvue_type_template_id_3d912c5c_hoisted_2, null, 512))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
    ], 512),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", tabvue_type_template_id_3d912c5c_hoisted_3, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", tabvue_type_template_id_3d912c5c_hoisted_4, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
      ], 512)
    ])
  ], 64))
}
// CONCATENATED MODULE: ./packages/tab/tab.vue?vue&type=template&id=3d912c5c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/tab/tab.vue?vue&type=script&lang=js


const tabvue_type_script_lang_js_COMPONENT_NAME = 'lity-tab'
/* harmony default export */ var tabvue_type_script_lang_js = ({
  name: tabvue_type_script_lang_js_COMPONENT_NAME,
  emits: ['click', 'update:modelValue'],
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    modelValue: {
      type: [String, Number]
    },
    showSlider: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const sliderRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null)
    const tabRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null)
    const panelGroupRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null)
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
      _updateSliderStyle()
    })
    const isActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])({
      get () {
        return props.modelValue
      },
      set (value) {
        context.emit('update:modelValue', value)
      }
    })
    function _updateSliderStyle () {
      if (!props.showSlider) return
      const slider = sliderRef.value
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        const { width, index } = _getSliderWidthCurrentIndex()
        slider.style.width = `${width}px`
        setSliderTransform(_getOffsetLeft(index))
      })
    }
    function setSliderTransform (offsetObj) {
      const slider = sliderRef.value
      const panelGroup = panelGroupRef.value
      if (typeof offsetObj.offsetLeft === 'number') {
        offsetObj.offsetLeft = `${offsetObj.offsetLeft}px`
        offsetObj.panelOffsetLeft = `${offsetObj.panelOffsetLeft}px`
      }
      if (slider) {
        const linear = 'all 0.3s linear'
        slider.style.transition = linear
        slider.style.transform = `translateX(${offsetObj.offsetLeft}) translateZ(0)`
        panelGroup.style.transition = linear
        panelGroup.style.transform = `translate(-${offsetObj.panelOffsetLeft}, 0) scale(1) translateZ(0)`
      }
    }
    function _getSliderWidthCurrentIndex () {
      let width = 0
      let index = 0
      const child = tabRef.value.children
      if (props.data.length > 0) {
        index = props.data.findIndex((tab) => tab.label === isActive.value)
        width = child[index].clientWidth
      }
      return {
        width,
        index
      }
    }
    function _getOffsetLeft (index) {
      let offsetLeft = 0
      let panelOffsetLeft = 0
      const child = tabRef.value.children
      const panelChild = panelGroupRef.value.children
      props.data.forEach((tab, i) => {
        if (i < index) {
          offsetLeft += child[i].clientWidth
          panelOffsetLeft += panelChild[i].clientWidth
        }
      })
      return {
        offsetLeft,
        panelOffsetLeft
      }
    }
    function handleClick (value) {
      isActive.value = value
      _updateSliderStyle()
      context.emit('click', isActive.value)
    }
    return {
      handleClick,
      isActive,
      sliderRef,
      tabRef,
      panelGroupRef
    }
  }
});


// CONCATENATED MODULE: ./packages/tab/tab.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/tab/tab.vue?vue&type=style&index=0&id=3d912c5c&lang=scss
var tabvue_type_style_index_0_id_3d912c5c_lang_scss = __webpack_require__("70fe");

// CONCATENATED MODULE: ./packages/tab/tab.vue





tabvue_type_script_lang_js.render = tabvue_type_template_id_3d912c5c_render

/* harmony default export */ var tab = (tabvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/tab/tab-panel.vue?vue&type=template&id=5efbbf17


const tab_panelvue_type_template_id_5efbbf17_hoisted_1 = { class: "lity-tab-panels-item" }

function tab_panelvue_type_template_id_5efbbf17_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", tab_panelvue_type_template_id_5efbbf17_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
  ]))
}
// CONCATENATED MODULE: ./packages/tab/tab-panel.vue?vue&type=template&id=5efbbf17

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/tab/tab-panel.vue?vue&type=script&lang=js

const tab_panelvue_type_script_lang_js_COMPONENT_NAME = 'lity-panel'
/* harmony default export */ var tab_panelvue_type_script_lang_js = ({
  name: tab_panelvue_type_script_lang_js_COMPONENT_NAME
});


// CONCATENATED MODULE: ./packages/tab/tab-panel.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/tab/tab-panel.vue?vue&type=style&index=0&id=5efbbf17&lang=scss
var tab_panelvue_type_style_index_0_id_5efbbf17_lang_scss = __webpack_require__("6077");

// CONCATENATED MODULE: ./packages/tab/tab-panel.vue





tab_panelvue_type_script_lang_js.render = tab_panelvue_type_template_id_5efbbf17_render

/* harmony default export */ var tab_panel = (tab_panelvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/tag/tag.vue?vue&type=template&id=5c056d6c


function tagvue_type_template_id_5c056d6c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
    class: ["lity-tag", $setup.TagTypeClass],
    style: {backgroundColor: $props.bgcolor, color: $props.color, transform: 'scale('+$props.scale+')'}
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
  ], 6))
}
// CONCATENATED MODULE: ./packages/tag/tag.vue?vue&type=template&id=5c056d6c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/tag/tag.vue?vue&type=script&lang=js



const tagvue_type_script_lang_js_COMPONENT_NAME = 'lity-tag'
/* harmony default export */ var tagvue_type_script_lang_js = ({
  name: tagvue_type_script_lang_js_COMPONENT_NAME,
  props: {
    type: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String
    },
    shape: {
      type: String,
      default: 'circle'
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#fff'
    },
    scale: {
      type: Number,
      default: 1
    }
  },
  setup (props) {
    const TagTypeClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(() => {
      if (props.bgcolor) {
        if (props.shape === 'square') {
          return ' lity-tag-radius'
        }
        return ''
      }
      return (props.type ? 'lity-tag-' + props.type : '') + (props.shape === 'square' ? ' lity-tag-radius' : '')
    })
    return {
      TagTypeClass
    }
  }
});


// CONCATENATED MODULE: ./packages/tag/tag.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/tag/tag.vue?vue&type=style&index=0&id=5c056d6c&lang=scss
var tagvue_type_style_index_0_id_5c056d6c_lang_scss = __webpack_require__("adba");

// CONCATENATED MODULE: ./packages/tag/tag.vue





tagvue_type_script_lang_js.render = tagvue_type_template_id_5c056d6c_render

/* harmony default export */ var tag = (tagvue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/textarea/textarea.vue?vue&type=template&id=707d1bb8


const textareavue_type_template_id_707d1bb8_hoisted_1 = {
  key: 0,
  class: "lity-textarea-counter"
}

function textareavue_type_template_id_707d1bb8_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["lity-textarea", $props.readonly ? 'lity-textarea-readonly' : '']
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("textarea", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($setup.textStr = $event)),
      disabled: $props.disabled,
      style: $props.height?`height:${$props.height}px`:'height:120px',
      placeholder: $props.placeholder,
      maxlength: $props.maxlength,
      readonly: $props.readonly,
      onInput: _cache[2] || (_cache[2] = (...args) => ($setup.changeHalder && $setup.changeHalder(...args)))
    }, null, 44, ["disabled", "placeholder", "maxlength", "readonly"]), [
      [external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], $setup.textStr]
    ]),
    ($props.showCounter && $props.maxlength)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", textareavue_type_template_id_707d1bb8_hoisted_1, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($setup.num), 1),
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("/" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.maxlength), 1)
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
  ], 2))
}
// CONCATENATED MODULE: ./packages/textarea/textarea.vue?vue&type=template&id=707d1bb8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/textarea/textarea.vue?vue&type=script&lang=js


const textareavue_type_script_lang_js_COMPONENT_NAME = 'lity-textarea'
/* harmony default export */ var textareavue_type_script_lang_js = ({
  name: textareavue_type_script_lang_js_COMPONENT_NAME,
  emits: ['input', 'update:modelValue'],
  props: {
    maxlength: {
      validator (val) {
        if (!val) return true
        return /^(([1-9]\d*)|0)$/.test(val)
      }
    },
    placeholder: {
      type: String
    },
    height: {
      type: Number
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String
    },
    showCounter: {
      type: Boolean,
      default: true
    },
    change: {
      type: Function
    }
  },
  setup (props, context) {
    const num = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0)
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(() => {
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
        const v = props.modelValue
        if (!v) return
        textStr.value = v.length > props.maxlength ? v.substr(v, props.maxlength) : v
      })
    })
    const textStr = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])({
      get () {
        return props.modelValue
      },
      set (value) {
        num.value = value.length
        context.emit('update:modelValue', value)
      }
    })
    function changeHalder () {
      context.emit('input', textStr.value)
    }
    return {
      textStr,
      changeHalder,
      num
    }
  }
});

// CONCATENATED MODULE: ./packages/textarea/textarea.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/textarea/textarea.vue?vue&type=style&index=0&id=707d1bb8&lang=scss
var textareavue_type_style_index_0_id_707d1bb8_lang_scss = __webpack_require__("2b31");

// CONCATENATED MODULE: ./packages/textarea/textarea.vue





textareavue_type_script_lang_js.render = textareavue_type_template_id_707d1bb8_render

/* harmony default export */ var textarea_textarea = (textareavue_type_script_lang_js);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/toast/toast.vue?vue&type=template&id=48b8e553


const toastvue_type_template_id_48b8e553_hoisted_1 = { class: "lity-toast" }
const toastvue_type_template_id_48b8e553_hoisted_2 = { class: "lity-toast_wrap" }
const toastvue_type_template_id_48b8e553_hoisted_3 = { class: "lity-toast_msg" }

function toastvue_type_template_id_48b8e553_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", toastvue_type_template_id_48b8e553_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", toastvue_type_template_id_48b8e553_hoisted_2, [
      ($data.imgurl)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("img", {
            key: 0,
            class: "lity-toast_img",
            src: $data.imgurl,
            alt: "图标"
          }, null, 8, ["src"]))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("p", toastvue_type_template_id_48b8e553_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.msg), 1)
    ])
  ]))
}
// CONCATENATED MODULE: ./packages/toast/toast.vue?vue&type=template&id=48b8e553

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/toast/toast.vue?vue&type=script&lang=js

const toastvue_type_script_lang_js_COMPONENT_NAME = 'lity-toast'
/* harmony default export */ var toastvue_type_script_lang_js = ({
  name: toastvue_type_script_lang_js_COMPONENT_NAME,
  data () {
    return {
      imgurl: '',
      msg: '',
      time: 3000
    }
  }
});


// CONCATENATED MODULE: ./packages/toast/toast.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/toast/toast.vue?vue&type=style&index=0&id=48b8e553&lang=scss
var toastvue_type_style_index_0_id_48b8e553_lang_scss = __webpack_require__("1cd2");

// CONCATENATED MODULE: ./packages/toast/toast.vue





toastvue_type_script_lang_js.render = toastvue_type_template_id_48b8e553_render

/* harmony default export */ var toast = (toastvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/toast/index.js
// 导入Toast组件


let toast_isLock = false
let toastTimer = null
const Toast = (options = {}) => {
  if (toast_isLock) return
  toast_isLock = true
  const el = document.createElement('div')
  const app = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createApp"])(toast)
  const instance = app.mount(document.body.appendChild(el))
  instance.msg = options.msg
  instance.icon = options.icon
  instance.imgurl = options.imgurl
  instance.time = options.time || 3000

  if (toastTimer) clearTimeout(toastTimer)
  // 定时器，持续时长之后隐藏
  toastTimer = setTimeout(() => {
    toast_isLock = false
    document.body.removeChild(el)
    clearTimeout(toastTimer)
  }, options.time || 3000)
}

/* harmony default export */ var packages_toast = (Toast);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/dialog/dialog.vue?vue&type=template&id=99f5b8de


const dialogvue_type_template_id_99f5b8de_hoisted_1 = { class: "lity-dialog" }
const dialogvue_type_template_id_99f5b8de_hoisted_2 = { class: "lity-dialog-popups" }
const dialogvue_type_template_id_99f5b8de_hoisted_3 = {
  key: 0,
  class: "lity-dialog-footer"
}
const dialogvue_type_template_id_99f5b8de_hoisted_4 = {
  key: 1,
  class: "lity-dialog-footer"
}

function dialogvue_type_template_id_99f5b8de_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", dialogvue_type_template_id_99f5b8de_hoisted_1, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", dialogvue_type_template_id_99f5b8de_hoisted_2, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: "lity-dialog-title",
        innerHTML: $setup.title
      }, null, 8, ["innerHTML"]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        class: "lity-dialog-content",
        innerHTML: $setup.content
      }, null, 8, ["innerHTML"]),
      ($setup.type==='confirm')
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", dialogvue_type_template_id_99f5b8de_hoisted_3, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
              class: "lity-dialog-btn",
              onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($setup.closeConfirm($setup.status)), ["stop"]))
            }, "取消"),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
              class: "lity-dialog-btn",
              onClick: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($setup.closeConfirm($setup.status, $setup.confirm)), ["stop"]))
            }, "确认")
          ]))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
      ($setup.type==='alert')
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", dialogvue_type_template_id_99f5b8de_hoisted_4, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
              class: "lity-dialog-btn",
              onClick: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($setup.closeConfirm($setup.status, $setup.confirm)), ["stop"]))
            }, "确认")
          ]))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
    ])
  ]))
}
// CONCATENATED MODULE: ./packages/dialog/dialog.vue?vue&type=template&id=99f5b8de

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/dialog/dialog.vue?vue&type=script&lang=js


const dialogvue_type_script_lang_js_COMPONENT_NAME = 'lity-dialog'
/* harmony default export */ var dialogvue_type_script_lang_js = ({
  name: dialogvue_type_script_lang_js_COMPONENT_NAME,
  setup (props) {
    const status = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false)
    const type = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('confirm')
    const title = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('温馨提示')
    const content = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])('')
    const confirm = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(() => {})
    function closeConfirm (state, opts) {

    }
    return {
      closeConfirm,
      status,
      type,
      title,
      content,
      confirm
    }
  }
});

// CONCATENATED MODULE: ./packages/dialog/dialog.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/dialog/dialog.vue?vue&type=style&index=0&id=99f5b8de&lang=scss
var dialogvue_type_style_index_0_id_99f5b8de_lang_scss = __webpack_require__("d504");

// CONCATENATED MODULE: ./packages/dialog/dialog.vue





dialogvue_type_script_lang_js.render = dialogvue_type_template_id_99f5b8de_render

/* harmony default export */ var dialog = (dialogvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/dialog/index.js



const Dialog = (options = {}) => {
  const el = document.createElement('div')
  const app = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createApp"])(dialog)
  const instance = app.mount(document.body.appendChild(el))
  instance.title = options.title || '温馨提示'
  instance.type = options.type || 'confirm'
  instance.content = options.content
  instance.confirm = options.confirm
  isLock.lock()
  instance.closeConfirm = function (stay, callback) {
    remove(el, callback, stay)
  }
}

function remove (el, callback, stay) {
  let stopClose = true
  if (typeof callback === 'function') {
    stopClose = callback()
    if (stopClose === undefined) stopClose = true
  }
  if (!stopClose || stay) return
  isLock.unlock()
  document.body.removeChild(el)
}

/* harmony default export */ var packages_dialog = (Dialog);

// CONCATENATED MODULE: ./packages/index.js























const Button = {}
const CheckboxGroup = {}
const Checkbox = {}
const GridItem = {}
const Icon = {}
const Input = {}
const Loading = {}
const Radio = {}
const RadioGroup = {}
const Rate = {}
const Slider = {}
const SliderItem = {}
const Switch = {}
const Tab = {}
const TabPanel = {}
const Tag = {}
const Textarea = {}

Button.install = Vue => { Vue.component(button_button.name, button_button) }
CheckboxGroup.install = Vue => { Vue.component(checkbox_group.name, checkbox_group) }
Checkbox.install = Vue => { Vue.component(checkbox_checkbox.name, checkbox_checkbox) }
GridItem.install = Vue => { Vue.component(grid_item.name, grid_item) }
Icon.install = Vue => { Vue.component(icon.name, icon) }
Input.install = Vue => { Vue.component(input.name, input) }
Loading.install = Vue => { Vue.component(loading.name, loading) }
Radio.install = Vue => { Vue.component(radio_radio.name, radio_radio) }
RadioGroup.install = Vue => { Vue.component(radio_group.name, radio_group) }
Rate.install = Vue => { Vue.component(rate.name, rate) }
Slider.install = Vue => { Vue.component(slider_slider.name, slider_slider) }
SliderItem.install = Vue => { Vue.component(slider_item.name, slider_item) }
Switch.install = Vue => { Vue.component(switch_switch.name, switch_switch) }
Tab.install = Vue => { Vue.component(tab.name, tab) }
TabPanel.install = Vue => { Vue.component(tab_panel.name, tab_panel) }
Tag.install = Vue => { Vue.component(tag.name, tag) }
Textarea.install = Vue => { Vue.component(textarea_textarea.name, textarea_textarea) }



const components = [
  button_button,
  checkbox_group,
  checkbox_checkbox,
  grid,
  grid_item,
  icon,
  input,
  loading,
  radio_radio,
  radio_group,
  rate,
  slider_slider,
  slider_item,
  switch_switch,
  tab,
  tab_panel,
  tag,
  textarea_textarea
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  install
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fbf6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=lity-ui.umd.js.map