export function consentWatcher(consent) {
    document.addEventListener('setCookieNotice', (event) => {
        if (event.detail.value) {
            consent('grantConsent');
        } else {
            consent('rejectConsent');
        }
    });
}
