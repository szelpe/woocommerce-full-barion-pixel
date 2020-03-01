export function purchasedOrderWatcher() {
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
