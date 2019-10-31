import React from "react";
import cc from "classcat";
import * as s from "./descriptionLabel.css";
import * as typography from "../typography/typography.css";

export const DescriptionLabel = (props) => {
    const {children} = props;
    return <p className={cc([s.description, typography.caption])}>{children}</p>
}
