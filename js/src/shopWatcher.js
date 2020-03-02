export function shopWatcher(params) {
    return track => {
        let { currency } = params();

        // get the tracking input field hidden inside the product link
        document.querySelectorAll('input[type="hidden"].barion-pixel-tracking-data')
            .forEach(el => {

                let productParams = JSON.parse(atob(el.value));

                jQuery(el).closest('a').on('click', e => {
                    track('clickProduct', {
                        contentType: 'Product',
                        currency,
                        ...productParams
                    });
                });
            })
    };
}
