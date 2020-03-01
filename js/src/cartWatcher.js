export function cartWatcher(params) {
    return track => {
        let { currency, cart } = params();

        jQuery(document.body).on('adding_to_cart',
            (event, button, data) => {
                track('addToCart', {
                    contentType: "Product",
                    currency,
                    id: String(data.product_id),
                    name: '', // TODO
                    quantity: data.quantity,
                    totalItemPrice: 0, // TODO
                    unit: 'piece',
                    unitPrice: 0 // TODO
                });
            }
        );

        jQuery(document).on('click', '.woocommerce-cart-form .product-remove > a', (e) => {
            let { product_sku, product_id } = jQuery(e.target).data();
            let product = findProductInCart(product_id);

            track('removeFromCart', {
                contentType: "Product",
                currency: currency,
                id: String(product_id),
                name: product.name,
                quantity: product.quantity,
                totalItemPrice: product.totalItemPrice,
                unit: 'piece',
                unitPrice: product.unitPrice
            });
        });

        function findProductInCart(productId) {
            if (cart == null) return null;

            return cart.contents.find(p => p.id == productId);
        }
    }
}
