import {h} from 'preact';
import cc from "classcat";
import * as s from "./cityLabel.css";
import * as typography from "../typography/typography.css"

export const CityLabel = (props) => {
    const {children} = props;
    return <p className={cc([s.label, typography.caps])}>{children}</p>
}

