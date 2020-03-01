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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/cartWatcher.js":
/*!*******************************!*\
  !*** ./js/src/cartWatcher.js ***!
  \*******************************/
/*! exports provided: cartWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartWatcher", function() { return cartWatcher; });
function cartWatcher(params) {
    return track => {
        jQuery(document.body).on(
            'adding_to_cart',
            (event, button, data) => {
                console.log(data);
                track('contentView', {
                    contentType: "Product",
                    currency: params().currency,
                    id: data.product_id,
                    name: '', // TODO
                    quantity: data.quantity,
                    totalItemPrice: '', // TODO
                    unit: 'piece',
                    unitPrice: '' // TODO
                });
            }
        );
    }
}


/***/ }),

/***/ "./js/src/consentWatcher.js":
/*!**********************************!*\
  !*** ./js/src/consentWatcher.js ***!
  \**********************************/
/*! exports provided: consentWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consentWatcher", function() { return consentWatcher; });
function consentWatcher(consent) {
    document.addEventListener('setCookieNotice', (event) => {
        if (event.detail.value) {
            consent('grantConsent');
        } else {
            consent('rejectConsent');
        }
    });
}


/***/ }),

/***/ "./js/src/index.js":
/*!*************************!*\
  !*** ./js/src/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consentWatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consentWatcher */ "./js/src/consentWatcher.js");
/* harmony import */ var _cartWatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartWatcher */ "./js/src/cartWatcher.js");
/* harmony import */ var _productWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productWatcher */ "./js/src/productWatcher.js");
/* harmony import */ var _purchasedOrderWatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchasedOrderWatcher */ "./js/src/purchasedOrderWatcher.js");





window.addEventListener('load', init);

function init() {
    if (bp == null) {
        console.warn('bp object is not present: Barion Pixel is not loaded.');
        return;
    }

    Object(_consentWatcher__WEBPACK_IMPORTED_MODULE_0__["consentWatcher"])(consent);
    Object(_cartWatcher__WEBPACK_IMPORTED_MODULE_1__["cartWatcher"])()(track);
    Object(_productWatcher__WEBPACK_IMPORTED_MODULE_2__["productWatcher"])()(track);
    Object(_purchasedOrderWatcher__WEBPACK_IMPORTED_MODULE_3__["purchasedOrderWatcher"])()(track);
}

function track(eventName, properties) {
    bp('track', eventName, properties);
}

function consent(grant) {
    bp('consent', grant);
}


/***/ }),

/***/ "./js/src/productWatcher.js":
/*!**********************************!*\
  !*** ./js/src/productWatcher.js ***!
  \**********************************/
/*! exports provided: productWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productWatcher", function() { return productWatcher; });
function productWatcher() {
    return track => {
        if (typeof barionPixelParams === 'undefined') {
            return;
        }

        if (barionPixelParams.product == null) {
            return;
        }

        track('contentView', {
            contentType: 'Product',
            currency: barionPixelParams.currency,
            ...barionPixelParams.product
        });
    };
}


/***/ }),

/***/ "./js/src/purchasedOrderWatcher.js":
/*!*****************************************!*\
  !*** ./js/src/purchasedOrderWatcher.js ***!
  \*****************************************/
/*! exports provided: purchasedOrderWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purchasedOrderWatcher", function() { return purchasedOrderWatcher; });
function purchasedOrderWatcher() {
    return track => {
        if (typeof barionPixelParams === 'undefined') {
            return;
        }

        if (barionPixelParams.purchasedOrder == null) {
            return;
        }

        track('purchase', {
            currency: barionPixelParams.currency,
            ...barionPixelParams.purchasedOrder
        });
    };
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map