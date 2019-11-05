import {h} from 'preact';
import * as s from './mainLayout.css'

export const MainLayout = (props) => {
    const {main, header} = props;
    return <div className={s.container}>
        <div className={s.inner}>
            <div className={s.header}>
                {header}
            </div>
            <div className={s.main}>
                {main}
            </div>
        </div>
    </div>
};
