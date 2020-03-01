export const setUserProperties = (track) => async (userProperties) => {
    if (userProperties == null) {
        return;
    }

    await track('setUserProperties', userProperties);
};
