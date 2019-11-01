import React from "react";
import {Input} from "../input/Input";
import {SearchButton} from "../input/SearchButton";
import {SearchAbsoluteContainer} from "../search/SearchAbsoluteContainer";
import {SearchList} from "../search/SearchList";
import {SearchOption} from "../search/SearchOption";
import {NotFoundStub} from "../search/NotFoundStub";
import {LoadingStub} from "../search/LoadingStub";
import {SearchRelativelyWrapper} from "../search/SearchRelativelyWrapper";
import useFetch from "react-fetch-hook";
import {getWeatherByCityName} from "../../api";

export const Search = (props) => {
    const {onSelectCity} = props;
    const [searchValue, setSearchValue] = React.useState("");
    const [isSearchNeeded, setIsSearchNeeded] = React.useState(false);
    const [isWindowShowed, setIsWindowShowed] = React.useState(false);
    const [errorCityName, setErrorCityName] = React.useState("");

    const { isLoading, data, error } = useFetch(getWeatherByCityName(searchValue), {
        depends: [searchValue && searchValue.length > 0, isSearchNeeded]
    });

    React.useEffect(() => {
        if (isLoading) {
            setIsSearchNeeded(false);
        }
    }, [isLoading]);

    React.useEffect(() => {
        setIsWindowShowed(true);
    }, [isLoading, data, error]);

    React.useEffect(() => {
        const listener = () => setIsWindowShowed(false);
        window.addEventListener("click", listener);
        return () => window.removeEventListener("click", listener);
    });

    React.useEffect(() => {
        if (error) {
            setErrorCityName(searchValue);
        }
    }, [error]);

    const city = data;

    return <div onClick={(e) => e.stopPropagation()}>
        <SearchRelativelyWrapper>
            <Input value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search">
                <SearchButton onClick={() => setIsSearchNeeded(true)} />
            </Input>
            {isWindowShowed && <SearchAbsoluteContainer>
                {!isLoading && city && <SearchList>
                    {city && <SearchOption title={city.name}
                                           onClick={() => {
                                               onSelectCity && onSelectCity(city);
                                               setIsWindowShowed(false);
                                           }}
                                           coords={city.coord && `${city.coord.lat}, ${city.coord.lon}`} />}
                </SearchList>}
                {!isLoading && error && <NotFoundStub city={errorCityName} />}
                {isLoading && <LoadingStub />}
            </SearchAbsoluteContainer>}
        </SearchRelativelyWrapper>
    </div>
}
