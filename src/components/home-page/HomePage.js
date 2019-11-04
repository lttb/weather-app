import React from "react";
import cc from "classcat"
import * as s from "./homePage.css"
import * as typography from "../typography/typography.css"
import {HomePageLayout} from "./HomePageLayout";
import {TitleWithInputGrid} from "./TitleWithInputGrid";
import {CityCardLayout} from "../city-card/CityCardLayout";
import {CitiesGrid} from "../cities-grid/CitiesGrid";
import {RemoveButton} from "../remove-button/RemoveButton";
import {TemperatureLabel} from "../city-card/TemperatureLabel";
import {CityLabel} from "../city-card/CityLabel";
import {DescriptionLabel} from "../city-card/DescriptionLabel";
import {InfoLabel} from "../city-card/InfoLabel";
import {Search} from "./Search";
import {CitiesStub} from "./CitiesStub";

export const HomePage = () => {
    const [cities, setCities] = React.useState([]);

    const title = <h1 className={cc([typography.title, s.title])}>
        Weather forecast
    </h1>;

    const subtitle = <p className={cc([typography.subtitle, s.subtitle])}>
        Simple but powerful weather forcasting service based on OpenWeatherMap API
    </p>;

    const input = <Search onSelectCity={(city) => setCities(cities => [...cities, city])} />;

    const cards = cities && cities.length > 0 && <CitiesGrid>
        {cities.map((city, id) => <CityCardLayout key={id}
                                                  city={<CityLabel>{city.name}</CityLabel>}
                                                  temperature={<TemperatureLabel>{city.main.temp}°C</TemperatureLabel>}
                                                  description={<DescriptionLabel>{city.weather[0].description}</DescriptionLabel>}
                                                  details={<>
                                                        <InfoLabel type="wind" title={`${city.wind.speed} m/s`} />
                                                        <InfoLabel type="humidity" title={`${city.main.humidity}%`} />
                                                        <InfoLabel type="pressure" title={`${city.main.pressure} hPa`} />
                                                  </>}
                                                  icon={<RemoveButton onClick={() => setCities(cities => cities.filter((item) => item.id !== city.id))} />} />)}
    </CitiesGrid> || <CitiesStub />;

    return <HomePageLayout titleWithInput={<TitleWithInputGrid title={title} subtitle={subtitle} input={input} />} cards={cards} />;
};
