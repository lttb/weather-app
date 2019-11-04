import React from "react"
import * as typography from "../typography/typography.css"
import * as s from "./citiesStub.css"

export const CitiesStub = () => {
    return <div className={s.container}>
        <p className={s.text}>No cities added</p>
        <div className={s.container__hint}>
            <p className={typography.body}>Add the first city using the input above</p>
        </div>
    </div>
};
