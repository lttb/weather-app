import {h} from 'preact';
import * as s from "./weatherIcon.css"

export const WeatherIcon = (props) => {
    const {iconCode, description} = props;
    const img = `https://openweathermap.org/img/wn/${iconCode}.png`;
    const img2x = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return <div className={s.container}>
        <img
            alt={description}
            src={img2x}
            srcSet={`${img}, ${img2x} 2x`}
            className={s.image}
        />
    </div>
};
