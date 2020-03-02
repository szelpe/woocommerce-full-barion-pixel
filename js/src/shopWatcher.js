export function shopWatcher(params) {
    return track => {
        let { currency } = params();

        // There is no real way to find product links => this is a naive implementation: if it's not add to cart, then it's a product link
        document.querySelectorAll('.products .product')
            .forEach(productContainer => {

                let paramsEl = productContainer.querySelector('input[type="hidden"].barion-pixel-tracking-data');
                let productParams = JSON.parse(atob(paramsEl.value));

                productContainer.querySelectorAll('a').forEach(link => {
                    if (!isAddToCartLink(link)) {
                        link.addEventListener('click', () => {
                            track('clickProduct', {
                                contentType: 'Product',
                                currency,
                                ...productParams
                            });
                        });
                    }
                });
            });

        function isAddToCartLink(link) {
            return /\?add-to-cart=(\d+)/.test(link.href);
        }
    };
}
