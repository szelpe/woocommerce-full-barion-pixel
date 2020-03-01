import { consentWatcher } from './consentWatcher'
import { cartWatcher } from './cartWatcher'
import { productWatcher } from "./productWatcher";
import { purchasedOrderWatcher } from "./purchasedOrderWatcher";

window.addEventListener('load', init);

function init() {
    if (bp == null) {
        console.warn('bp object is not present: Barion Pixel is not loaded.');
        return;
    }

    consentWatcher(consent);
    cartWatcher()(track);
    productWatcher()(track);
    purchasedOrderWatcher()(track);
}

function track(eventName, properties) {
    bp('track', eventName, properties);
}

function consent(grant) {
    bp('consent', grant);
}
