import React from "react";
import cc from "classcat";
import * as s from "./temperatureLabel.css";
import * as typography from "../typography/typography.css"

export const TemperatureLabel = (props) => {
    const {children} = props;
    return <p className={cc([s.temperature, typography.display])}>{children}</p>
}

