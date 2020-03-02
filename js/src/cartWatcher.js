export function cartWatcher(params) {
    return track => {
        let { currency, cart } = params();

        jQuery(document.body).on('adding_to_cart',
            (event, button, data) => {
                let productId = data.product_id;
                let paramsEl = document.querySelector('[data-productid="' + productId + '"]');

                let productParams = JSON.parse(atob(paramsEl.value));

                track('addToCart', {
                    contentType: "Product",
                    currency,
                    id: String(productId),
                    quantity: data.quantity,
                    totalItemPrice: productParams.unitPrice * data.quantity,
                    ...productParams
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
