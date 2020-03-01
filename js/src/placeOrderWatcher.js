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

        watchPaymentMethod();

        checkoutForm.addEventListener('submit', () => {
            trackPaymentMethod(getPaymentMethod(checkoutForm));
            trackSetUserProperties(getUserProperties());
            trackAccountRegisterOnCreating();
            track('initiatePurchase', {
                currency: params().currency,
                ...cart
            });
        });

        function watchPaymentMethod() {
            jQuery(document.body).on('payment_method_selected', () => {
                trackPaymentMethod(getPaymentMethod(checkoutForm));
            });
        }

        function trackPaymentMethod(paymentMethod) {
            return track('addPaymentInfo', {
                contents: cart.contents,
                paymentMethod,
                step: 1
            });
        }

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

        function trackAccountRegisterOnCreating() {
            if (!isAccountCreating()) {
                return Promise.resolve();
            }

            return trackAccountRegister('checkout');
        }

        function isAccountCreating() {
            let createAccountCheckbox = document.getElementById('createaccount');

            return createAccountCheckbox != null && createAccountCheckbox.checked;
        }

        function getPaymentMethod(form) {
            return form.querySelector('input[name="payment_method"]:checked').value;
        }
    }
}
