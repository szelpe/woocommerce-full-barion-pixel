export function placeOrderWatcher(params, trackSetUserProperties, trackAccountRegister) {
    return track => {
        let cart = params().cart;

        if (cart == null) {
            return;
        }

        let checkoutForm = document.querySelector('form[name="checkout"]');

        if (checkoutForm == null) {
            return;
        }

        checkoutForm.addEventListener('submit', () => {
            trackSetUserProperties(getUserProperties());
            trackAccountRegister('checkout');
            track('initiatePurchase', {
                currency: params().currency,
                ...cart
            });
        });

        function getUserProperties() {
            if (!isAccountCreating()) {
                return null;
            }

            let usernameField = document.getElementById('account_username');
            let emailField = document.getElementById('billing_email');

            if (usernameField != null && usernameField.value) {
                return {
                    userId: usernameField.value
                };
            }

            return {
                userId: emailField.value
            };
        }

        function isAccountCreating() {
            let createAccountCheckbox = document.getElementById('createaccount');

            return createAccountCheckbox != null && createAccountCheckbox.checked;
        }
    }
}
