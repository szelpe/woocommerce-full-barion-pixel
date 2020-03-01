export function cartWatcher(params) {
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
