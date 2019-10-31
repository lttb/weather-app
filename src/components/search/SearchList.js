import React from "react";
import * as s from "./searchList.css"

export const SearchList = (props) => {
    const {children} = props;
    return <ul role="menu" className={s.container}>
        {children}
    </ul>
}
