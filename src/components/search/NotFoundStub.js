import React from "react";
import cc from "classcat";
import * as s from "./notFoundStub.css";
import * as typography from "../styleguide/typography.css"

export const NotFoundStub = () => {
    return <div className={s.container}>
        <p className={cc([s.title, typography["body-bold"]])}>City called “London” was not found</p>
        <p className={cc([s.hint, typography.caption])}>Try different city name</p>
    </div>
};
