import React from "react";
import * as s from "./removeButton.css"

export const RemoveButton = (props) => {
    return <button aria-label="Remove city" className={s.button} {...props} />
};
