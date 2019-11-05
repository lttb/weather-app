import {h} from 'preact';
import * as s from "./searchAbsoluteContainer.css"

export const SearchAbsoluteContainer = (props) => {
    const {children} = props;
    return <div className={s.container}>
        {children}
    </div>
}
