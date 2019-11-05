import {h} from 'preact';
import cc from "classcat"
import * as s from "./searchOption.css"
import * as typography from "../typography/typography.css";

export const SearchOption = (props) => {
    const {title, coords, ...otherProps} = props;
    return <li className={s.container} tabIndex="0" aria-label={title} role="menuitemradio" {...otherProps}>
        <div className={s.container__text}>
            <p className={cc([s.title, typography["body-bold"]])}>{title}</p>
            <p className={cc([s.coords, typography.caption])}>{coords}</p>
        </div>
        <div className={s.container__icon}>
            <div aria-hidden="true" className={s.icon} />
        </div>
    </li>
};
