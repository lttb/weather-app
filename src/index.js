import {h, render} from 'preact';
import {App} from "./App";
import StoreContext from "storeon/preact/context";
import { store } from "./store";

render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    document.getElementById("root")
);
