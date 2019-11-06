import {h} from 'preact';
import cc from "classcat";
import * as s from "./input.css"
import * as typography from "../typography/typography.css"

export const Input = (props) => {
    const {children, id, label, ...otherProps} = props;
    return <div className={s.container}>
        <div className={s.container__input}>
            <label htmlFor={id} className={s.label}>{label}</label>
            <input {...otherProps} type="text" name={id} id={id} className={cc([s.input, typography.body])} />
        </div>
        {children}
    </div>
};
