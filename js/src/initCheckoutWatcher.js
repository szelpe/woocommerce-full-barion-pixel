export function initCheckoutWatcher(params) {
    return (track) => {
        let cart = params().cart;

        if (cart == null) {
            return;
        }

        document.querySelectorAll('.checkout-button')
            .forEach(el => el.addEventListener('click', async (e) => {
                e.preventDefault();

                await track('initiateCheckout', {
                    currency: barionPixelParams.currency,
                    ...cart
                });

                window.location = e.target.href;
            }));
    };
}
