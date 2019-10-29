import React from "react"
import * as s from "./titleWithInputGrid.css";

export const TitleWithInputGrid = (props) => {
    const {title, subtitle, input} = props;
    return <div className={s.container}>
        <div className={s.title}>
            {title}
        </div>
        <div className={s.subtitle}>
            {subtitle}
        </div>
        <div className={s.input}>
            {input}
        </div>
    </div>
};
