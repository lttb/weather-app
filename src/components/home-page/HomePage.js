import React from "react";
import cc from "classcat"
import * as s from "./homePage.css"
import * as typography from "../typography/typography.css"
import {HomePageLayout} from "./HomePageLayout";
import {TitleWithInputGrid} from "./TitleWithInputGrid";
import {Input} from "../input/Input";
import {SearchButton} from "../input/SearchButton";
import {SearchRelativelyWrapper} from "../search/SearchRelativelyWrapper";
import {SearchAbsoluteContainer} from "../search/SearchAbsoluteContainer";
import {SearchList} from "../search/SearchList";
import {SearchOption} from "../search/SearchOption";
import {NotFoundStub} from "../search/NotFoundStub";
import {LoadingStub} from "../search/LoadingStub";
import {CityCardLayout} from "../city-card/CityCardLayout";
import {CitiesGrid} from "../cities-grid/CitiesGrid";
import {RemoveButton} from "../remove-button/RemoveButton";
import {TemperatureLabel} from "../city-card/TemperatureLabel";
import {CityLabel} from "../city-card/CityLabel";
import {DescriptionLabel} from "../city-card/DescriptionLabel";

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
            {false && <SearchList>
                <SearchOption title="London, GB" coords="37.129, -84.0833" />
                <SearchOption title="London, US" coords="37.129, -84.0833" />
                <SearchOption title="London, RU" coords="37.129, -84.0833" />
            </SearchList>}
            {false && <NotFoundStub />}
            {false && <LoadingStub />}
        </SearchAbsoluteContainer>
    </SearchRelativelyWrapper>;

    const cards = <CitiesGrid>
        <CityCardLayout city={<CityLabel>London</CityLabel>}
                        temperature={<TemperatureLabel>32°C</TemperatureLabel>}
                        description={<DescriptionLabel>Broken clouds</DescriptionLabel>}
                        icon={<RemoveButton />} />
    </CitiesGrid>;

    return <HomePageLayout titleWithInput={<TitleWithInputGrid title={title} subtitle={subtitle} input={input} />} cards={cards} />;
};
