export function productPageCartWatcher(params) {
    return track => {
        let { currency, product } = params();

        if (product == null) {
            return;
        }

        let form = document.querySelector('form.cart');

        if (form == null) {
            return;
        }

        form.addEventListener('submit', () => {
            let quantity = 1;

            let quantityInput = form.querySelector('[name="quantity"]');
            if(quantityInput != null) {
                quantity = Number(quantityInput.value);
            }

            track('addToCart', {
                contentType: "Product",
                currency,
                id: String(product.id),
                name: product.name,
                quantity,
                totalItemPrice: product.totalItemPrice,
                unit: 'piece',
                unitPrice: product.unitPrice
            });
        });
    };
}
