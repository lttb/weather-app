import {getWeatherByCityId} from "../api";

export default store => {
    store.on("@init", () => ({
        citiesIds: [],
        citiesCache: {}
    }));

    store.on("@changed", (payload) => {
        const withoutCache = payload.citiesIds.filter((id) => !store.get().citiesCache[id]);
        if (withoutCache.length > 0) {
            store.dispatch("cities/loadCache", withoutCache);
        }
    });

    store.on("cities/addCity", (state, city) => {
        if (state.citiesIds.indexOf(city.id) >= 0) {
            return;
        }
        return {
            citiesIds: [...state.citiesIds, city.id],
            citiesCache: {...state.citiesCache, [city.id]: city}
        }
    });

    store.on("cities/removeCity", (state, _id) => ({
        citiesIds: state.citiesIds.filter((id) => id !== _id)
    }));

    store.on("cities/loadCache", async (state, ids) => {
        const results = await Promise.all(ids.map((id) => getWeatherByCityId(id)));
        const newCache = {};
        results.forEach((result) => {
            if (result.id) {
                newCache[result.id] = result;
            }
        });
        store.dispatch("cities/updateCache", newCache);
    });

    store.on("cities/updateCache", (state, newCache) => {
        return ({
            citiesCache: {...state.citiesCache, ...newCache}
        })
    });
}
