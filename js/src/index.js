import { consentWatcher } from './consentWatcher'
import { cartWatcher } from './cartWatcher'
import { productWatcher } from "./productWatcher";
import { purchasedOrderWatcher } from "./purchasedOrderWatcher";
import { initCheckoutWatcher } from "./initCheckoutWatcher";
import { placeOrderWatcher } from "./placeOrderWatcher";
import { setUserProperties } from "./setUserProperties";
import { accountRegister, myAccountWatcher } from "./myAccountWatcher";
import { variationWatcher } from "./variationWatcher";
import { shopWatcher } from "./shopWatcher";
import { productPageCartWatcher } from "./productPageCartWatcher";

window.addEventListener('load', init);

function init() {
    if (bp == null) {
        console.warn('bp object is not present: Barion Pixel is not loaded.');
        return;
    }

    let trackSetUserProperties = setUserProperties(track);
    let trackAccountRegister = accountRegister(track);

    consentWatcher(consent);
    cartWatcher(params)(track);
    productWatcher(params)(track);
    purchasedOrderWatcher(params)(track);
    initCheckoutWatcher(params)(track);
    placeOrderWatcher(params, trackSetUserProperties, trackAccountRegister)(track);
    myAccountWatcher(params, trackSetUserProperties)(track);
    variationWatcher(params)(track);
    shopWatcher(params)(track);
    productPageCartWatcher(params)(track);
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
