import React from "react";
import * as s from "./cityCardLayout.css";

export const CityCardLayout = (props) => {
    const {city, temperature, description, icon, details} = props;
    return <div className={s.container}>
        <div className={s.container__top}>
            {city}
            <div className={s.temperature}>{temperature}</div>
            <div className={s.description}>{description}</div>
            <div className={s.icon}>{icon}</div>
        </div>
        <div className={s.separator} />
        <div className={s.container__bottom}>
            {details}
        </div>
    </div>
}
