import {h} from 'preact';
import * as s from "./cityCardLayout.css";

export const CityCardLayout = (props) => {
    const {city, temperature, description, actionIcon, details, weatherIcon} = props;
    return <div className={s.container}>
        <div className={s.container__top}>
            {city}
            <div className={s.temperature}>
                {temperature}
                <div className={s.weather_icon}>{weatherIcon}</div>
            </div>
            <div className={s.description}>{description}</div>
            <div className={s.action_icon}>{actionIcon}</div>
        </div>
        <div className={s.separator} />
        <div className={s.container__bottom}>
            {details}
        </div>
    </div>
}
