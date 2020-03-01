export function purchasedOrderWatcher(params) {
    return track => {
        let { currency, purchasedOrder } = params();

        if (purchasedOrder == null) {
            return;
        }

        track('purchase', {
            currency,
            ...purchasedOrder
        });
    };
}
