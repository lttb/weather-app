import React from "react";
import cc from "classcat";
import * as typography from "../typography/typography.css";
import * as s from "./infoLabel.css";

export const InfoLabel = (props) => {
    const {type, title} = props;
    return <div className={s.container}>
        <div className={cc({
            [s.icon]: true,
            [s["icon--humidity"]]: type === "humidity",
            [s["icon--pressure"]]: type === "pressure",
            [s["icon--wind"]]: type === "wind",
        })} />
        <div className={s.container__title}>
            <p className={cc([s.title, typography.body])}>{title}</p>
        </div>
    </div>
}
