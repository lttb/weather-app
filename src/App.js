import {h} from 'preact';
import {MainLayout} from "./components/main-layout/MainLayout";
import {Header} from "./components/header/Header";
import {HomePage} from "./components/home-page/HomePage";

export const App = () => {
    const header = <Header />;

    const homePage = <HomePage/>;

    return <MainLayout header={header} main={homePage} />
};
