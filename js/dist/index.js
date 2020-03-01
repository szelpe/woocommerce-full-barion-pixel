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
        jQuery(document.body).on('adding_to_cart',
            (event, button, data) => {

                track('contentView', {
                    contentType: "Product",
                    currency: params().currency,
                    id: String(data.product_id),
                    name: '', // TODO
                    quantity: data.quantity,
                    // totalItemPrice: '', // TODO
                    unit: 'piece',
                    unitPrice: 0 // TODO
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
/* harmony import */ var _initCheckoutWatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initCheckoutWatcher */ "./js/src/initCheckoutWatcher.js");
/* harmony import */ var _placeOrderWatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeOrderWatcher */ "./js/src/placeOrderWatcher.js");
/* harmony import */ var _setUserProperties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setUserProperties */ "./js/src/setUserProperties.js");
/* harmony import */ var _myAccountWatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myAccountWatcher */ "./js/src/myAccountWatcher.js");









window.addEventListener('load', init);

function init() {
    if (bp == null) {
        console.warn('bp object is not present: Barion Pixel is not loaded.');
        return;
    }

    let trackSetUserProperties = Object(_setUserProperties__WEBPACK_IMPORTED_MODULE_6__["setUserProperties"])(track);
    let trackAccountRegister = Object(_myAccountWatcher__WEBPACK_IMPORTED_MODULE_7__["accountRegister"])(track);

    Object(_consentWatcher__WEBPACK_IMPORTED_MODULE_0__["consentWatcher"])(consent);
    Object(_cartWatcher__WEBPACK_IMPORTED_MODULE_1__["cartWatcher"])(params)(track);
    Object(_productWatcher__WEBPACK_IMPORTED_MODULE_2__["productWatcher"])()(track);
    Object(_purchasedOrderWatcher__WEBPACK_IMPORTED_MODULE_3__["purchasedOrderWatcher"])()(track);
    Object(_initCheckoutWatcher__WEBPACK_IMPORTED_MODULE_4__["initCheckoutWatcher"])(params)(track);
    Object(_placeOrderWatcher__WEBPACK_IMPORTED_MODULE_5__["placeOrderWatcher"])(params, trackSetUserProperties, trackAccountRegister)(track);
    Object(_myAccountWatcher__WEBPACK_IMPORTED_MODULE_7__["myAccountWatcher"])(params, trackSetUserProperties)(track);
}


function track(eventName, properties) {
    try {
        bp('track', eventName, properties);
    } catch (e) {
        console.error(e);
    }

    return new Promise((resolve) => {
        setTimeout(resolve, 400);
    });
}

function consent(grant) {
    bp('consent', grant);
}

function params() {
    return barionPixelParams;
}


/***/ }),

/***/ "./js/src/initCheckoutWatcher.js":
/*!***************************************!*\
  !*** ./js/src/initCheckoutWatcher.js ***!
  \***************************************/
/*! exports provided: initCheckoutWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCheckoutWatcher", function() { return initCheckoutWatcher; });
function initCheckoutWatcher(params) {
    return (track) => {
        let cart = params().cart;

        if (cart == null) {
            return;
        }

        document.querySelectorAll('.checkout-button')
            .forEach(el => el.addEventListener('click', async (e) => {
                e.preventDefault();

                await track('initiateCheckout', {
                    currency: params().currency,
                    ...cart
                });

                window.location = e.target.href;
            }));
    };
}


/***/ }),

/***/ "./js/src/myAccountWatcher.js":
/*!************************************!*\
  !*** ./js/src/myAccountWatcher.js ***!
  \************************************/
/*! exports provided: myAccountWatcher, accountRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAccountWatcher", function() { return myAccountWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountRegister", function() { return accountRegister; });
function myAccountWatcher(params, trackSetUserProperties) {
    return track => {
        watchRegister();
        watchLogin();

        function watchRegister() {
            let registerForm = document.querySelector('form.woocommerce-form-register');

            if (registerForm == null) {
                return;
            }

            trackFormSubmit(registerForm, 'form.woocommerce-form-register', 'Register');
        }

        function watchLogin() {
            let loginForm = document.querySelector('form.woocommerce-form-login');

            if (loginForm == null) {
                return;
            }

            trackFormSubmit(loginForm, 'form.woocommerce-form-login', 'Sign In');
        }

        function trackFormSubmit(form, id, name) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                await trackSetUserProperties(getUserProperties(form));
                await trackSignUp(track, id, name);

                form.submit();
            });
        }

        function getUserProperties(form) {
            let usernameField = form.querySelector('input[name="username"]');
            let emailField = form.querySelector('input[name="email"]');

            if (usernameField != null && usernameField.value) {
                return {
                    userId: usernameField.value
                };
            }

            return {
                userId: emailField.value
            };
        }
    };
}

const accountRegister = track => id => {
    return trackSignUp(track, id, 'Register');
};

function trackSignUp(track, id, name) {
    return track('signUp', {
        contentType: 'Page',
        id,
        name
    });
}


/***/ }),

/***/ "./js/src/placeOrderWatcher.js":
/*!*************************************!*\
  !*** ./js/src/placeOrderWatcher.js ***!
  \*************************************/
/*! exports provided: placeOrderWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeOrderWatcher", function() { return placeOrderWatcher; });
function placeOrderWatcher(params, trackSetUserProperties, trackAccountRegister) {
    return track => {
        let cart = params().cart;

        if (cart == null) {
            return;
        }

        let checkoutForm = document.querySelector('form[name="checkout"]');

        if (checkoutForm == null) {
            return;
        }

        watchPaymentMethod();

        checkoutForm.addEventListener('submit', () => {
            trackPaymentMethod(getPaymentMethod(checkoutForm));
            trackSetUserProperties(getUserProperties());
            trackAccountRegisterOnCreating();
            track('initiatePurchase', {
                currency: params().currency,
                ...cart
            });
        });

        function watchPaymentMethod() {
            jQuery(document.body).on('payment_method_selected', () => {
                trackPaymentMethod(getPaymentMethod(checkoutForm));
            });
        }

        function trackPaymentMethod(paymentMethod) {
            return track('addPaymentInfo', {
                contents: cart.contents,
                paymentMethod,
                step: 1
            });
        }

        function getUserProperties() {
            if (!isAccountCreating()) {
                return null;
            }

            let usernameField = document.getElementById('account_username');
            let emailField = document.getElementById('billing_email');

            if (usernameField != null && usernameField.value) {
                return {
                    userId: usernameField.value
                };
            }

            return {
                userId: emailField.value
            };
        }

        function trackAccountRegisterOnCreating() {
            if (!isAccountCreating()) {
                return Promise.resolve();
            }

            return trackAccountRegister('checkout');
        }

        function isAccountCreating() {
            let createAccountCheckbox = document.getElementById('createaccount');

            return createAccountCheckbox != null && createAccountCheckbox.checked;
        }

        function getPaymentMethod(form) {
            return form.querySelector('input[name="payment_method"]:checked').value;
        }
    }
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


/***/ }),

/***/ "./js/src/setUserProperties.js":
/*!*************************************!*\
  !*** ./js/src/setUserProperties.js ***!
  \*************************************/
/*! exports provided: setUserProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserProperties", function() { return setUserProperties; });
const setUserProperties = (track) => async (userProperties) => {
    if (userProperties == null) {
        return;
    }

    await track('setUserProperties', userProperties);
};


/***/ })

/******/ });
//# sourceMappingURL=index.js.map