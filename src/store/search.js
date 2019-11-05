import {getWeatherByCityName} from "../api";

export default store => {
    store.on("@init", () => ({}));

    store.on("search/find", async (state, searchValue) => {
        try {
            store.dispatch("search/request");
            const city = await getWeatherByCityName(searchValue);
            store.dispatch("search/success", city);
        } catch (e) {
            store.dispatch('search/error', searchValue)
        }
    });

    store.on("search/request", () => ({
        foundCity: null,
        searchError: null,
        isLoading: true
    }));

    store.on("search/success", (state, city) => ({
        foundCity: city,
        searchError: null,
        isLoading: false
    }));

    store.on("search/error", (state, city) => ({
        foundCity: null,
        searchError: {city},
        isLoading: false
    }));
};
