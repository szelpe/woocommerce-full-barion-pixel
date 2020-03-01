export function productWatcher() {
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
