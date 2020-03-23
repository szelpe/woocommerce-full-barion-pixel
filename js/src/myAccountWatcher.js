export function myAccountWatcher(params, trackSetUserProperties) {
    return track => {
        watchRegister();
        watchLogin();

        function watchRegister() {
            let registerForm = document.querySelector('form.woocommerce-form-register');

            if (registerForm == null) {
                return;
            }

            trackFormSubmit(registerForm, 'form.woocommerce-form-register', 'Register');
        }

        function watchLogin() {
            let loginForm = document.querySelector('form.woocommerce-form-login');

            if (loginForm == null) {
                return;
            }

            trackFormSubmit(loginForm, 'form.woocommerce-form-login', 'Sign In');
        }

        function trackFormSubmit(form, id, name) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                await trackSetUserProperties(getUserProperties(form));
                await trackSignUp(track, id, name);

                let submitButton = form.querySelector('button[type="submit"]');
                let hiddenInput = document.createElement('input');

                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('name', submitButton.name);
                hiddenInput.setAttribute('value', submitButton.value);

                form.append(hiddenInput);

                form.submit();
            });
        }

        function getUserProperties(form) {
            let usernameField = form.querySelector('input[name="username"]');
            let emailField = form.querySelector('input[name="email"]');

            if (usernameField != null && usernameField.value) {
                return {
                    userId: usernameField.value
                };
            }

            return {
                userId: emailField.value
            };
        }
    };
}

export const accountRegister = track => id => {
    return trackSignUp(track, id, 'Register');
};

function trackSignUp(track, id, name) {
    return track('signUp', {
        contentType: 'Page',
        id,
        name
    });
}
