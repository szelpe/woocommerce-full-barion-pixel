export function variationWatcher(params) {
    return track => {
        let { currency, product } = params();

        jQuery('.variations_form').each((i, form) => {
            let $form = jQuery(form);
            
            $form.on('woocommerce_variation_has_changed', () => {
                let variant = $form.find('select').val();

                track('customizeProduct', {
                    contentType: 'Product',
                    currency,
                    ...product,
                    variant
                });
            });
        });
    };
}
