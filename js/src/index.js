import { consentWatcher } from './consentWatcher'
import { cartWatcher } from './cartWatcher'
import { productWatcher } from "./productWatcher";
import { purchasedOrderWatcher } from "./purchasedOrderWatcher";
import { initCheckoutWatcher } from "./initCheckoutWatcher";
import { placeOrderWatcher } from "./placeOrderWatcher";

window.addEventListener('load', init);

function init() {
    if (bp == null) {
        console.warn('bp object is not present: Barion Pixel is not loaded.');
        return;
    }

    consentWatcher(consent);
    cartWatcher(params)(track);
    productWatcher()(track);
    purchasedOrderWatcher()(track);
    initCheckoutWatcher(params)(track);
    placeOrderWatcher(params)(track);
}

function track(eventName, properties) {
    bp('track', eventName, properties);

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
