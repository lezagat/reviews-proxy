/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React from 'react';\n// import ReactDOM from 'react-dom';\n// // import ZagatReviews from ...\n// // import PhotoServices from ...\n// // import GoogleReviews from ...\n// // import RestaurantInfo from ...\n\n// ReactDOM.render(<App />, document.getElementById('app'));\n\n// {/* // ReactDOM.render(<ZagatReviews>, document.getElementById('zagat-reviews'));\n// // ReactDOM.render(<PhotoServices>, document.getElementById('photos'));\n// // ReactDOM.render(<GoogleReviews>, document.getElementById('google-reviews'));\n// // ReactDOM.render(<RestaurantInfo>, document.getElementById('info')); */}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9pbmRleC5qcz9mNWYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vIC8vIGltcG9ydCBaYWdhdFJldmlld3MgZnJvbSAuLi5cbi8vIC8vIGltcG9ydCBQaG90b1NlcnZpY2VzIGZyb20gLi4uXG4vLyAvLyBpbXBvcnQgR29vZ2xlUmV2aWV3cyBmcm9tIC4uLlxuLy8gLy8gaW1wb3J0IFJlc3RhdXJhbnRJbmZvIGZyb20gLi4uXG5cbi8vIFJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4vLyB7LyogLy8gUmVhY3RET00ucmVuZGVyKDxaYWdhdFJldmlld3M+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemFnYXQtcmV2aWV3cycpKTtcbi8vIC8vIFJlYWN0RE9NLnJlbmRlcig8UGhvdG9TZXJ2aWNlcz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG90b3MnKSk7XG4vLyAvLyBSZWFjdERPTS5yZW5kZXIoPEdvb2dsZVJldmlld3M+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZ2xlLXJldmlld3MnKSk7XG4vLyAvLyBSZWFjdERPTS5yZW5kZXIoPFJlc3RhdXJhbnRJbmZvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8nKSk7ICovfVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.js\n");

/***/ })

/******/ });