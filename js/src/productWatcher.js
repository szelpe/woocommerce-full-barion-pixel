export function productWatcher(params) {
    return track => {
        let { currency, product } = params();

        if (product == null) {
            return;
        }

        track('contentView', {
            contentType: 'Product',
            currency,
            ...product
        });
    };
}
