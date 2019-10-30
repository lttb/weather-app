import React from "react";
import cc from "classcat";
import * as s from "./input.css"
import * as typography from "../styleguide/typography.css"

export const Input = (props) => {
    const {children, ...otherProps} = props;
    return <div className={s.container}>
        <div className={s.container__input}>
            <input {...otherProps} className={cc([s.input, typography.body])} />
        </div>
        {children}
    </div>
};
