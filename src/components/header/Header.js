import {h} from 'preact';
import * as s from "./header.css"
import cc from "classcat"
import {Logo} from "../logo/Logo";

export const Header = () => {
    return <header className={s.container}>
        <div className={cc([s.container__line, s.line])} />
        <div className={s.container__logo}>
            <Logo />
        </div>

        <div className={cc([s.container__line, s.line])} />
    </header>
};
