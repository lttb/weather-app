import React from "react";
import * as s from './mainLayout.css'

export const MainLayout = (props) => {
    const {children} = props;
    return <div className={s.container}>
        <div className={s.inner}>
            {children}
        </div>
    </div>
};
