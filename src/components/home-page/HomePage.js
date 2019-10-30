import React from "react";
import cc from "classcat"
import * as s from "./homePage.css"
import * as typography from "../styleguide/typography.css"
import {HomePageLayout} from "./HomePageLayout";
import {TitleWithInputGrid} from "./TitleWithInputGrid";
import {Input} from "../input/Input";
import {SearchButton} from "../input/SearchButton";
import {SearchRelativelyWrapper} from "../search/SearchRelativelyWrapper";
import {SearchAbsoluteContainer} from "../search/SearchAbsoluteContainer";

export const HomePage = () => {
    const title = <h1 className={cc([typography.title, s.title])}>
        Weather forecast
    </h1>;

    const subtitle = <p className={cc([typography.subtitle, s.subtitle])}>
        Simple but powerful weather forcasting service based on OpenWeatherMap API
    </p>;

    const input = <SearchRelativelyWrapper>
        <Input placeholder="Search">
            <SearchButton />
        </Input>
        <SearchAbsoluteContainer>
            <div style={{height:"84px", width: "100%"}} />
        </SearchAbsoluteContainer>
    </SearchRelativelyWrapper>;

    return <HomePageLayout titleWithInput={<TitleWithInputGrid title={title} subtitle={subtitle} input={input} />} />;
};
