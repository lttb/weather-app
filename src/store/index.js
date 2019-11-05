import createStore from "storeon";

import search from './search'
import cities from "./cities";
import persistState from "@storeon/localstorage";

export const store = createStore([search, cities, persistState(['citiesIds'])]);
