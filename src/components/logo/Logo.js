import {h} from 'preact';
import logoImg from "./logo.svg";
import * as s from "./logo.css"

export const Logo = () => {
    return <img src={logoImg} alt={"Weather App Logo"} className={s.logo} />
}
