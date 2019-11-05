import {h} from 'preact';
import * as s from "./stubContainer.css"

export const StubContainer = (props) => {
    const {children} = props;
    return <div className={s.container}>
        {children}
    </div>
}
