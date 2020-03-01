export const setUserProperties = (track) => (userProperties) => {
    if (userProperties == null) {
        return;
    }

    track('setUserProperties', userProperties);
};
