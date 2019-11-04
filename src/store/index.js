import createStore from "storeon";

import search from './search'
import cities from "./cities";

export const store = createStore([search, cities]);
