
export default store => {
    store.on("@init", () => ({
        cities: []
    }));

    store.on("cities/addCity", (state, city) => ({
        cities: [...state.cities, city]
    }));

    store.on("cities/removeCity", (state, id) => ({
        cities: state.cities.filter((item) => item.id !== id)
    }));
}
