export function placeOrderWatcher(params) {
    return track => {
        let cart = params().cart;

        if (cart == null) {
            return;
        }

        let placeOrderButton = document.getElementById('place_order');

        if (placeOrderButton == null) {
            return;
        }

        placeOrderButton.addEventListener('click', () => {
            track('initiatePurchase', {
                currency: params().currency,
                ...cart
            });
        });
    }
}
