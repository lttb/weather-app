import {h} from 'preact';
import {useEffect, useState} from "preact/hooks"
import {Input} from "../input/Input";
import {SearchButton} from "../input/SearchButton";
import {SearchAbsoluteContainer} from "../search/SearchAbsoluteContainer";
import {SearchList} from "../search/SearchList";
import {SearchOption} from "../search/SearchOption";
import {NotFoundStub} from "../search/NotFoundStub";
import {LoadingStub} from "../search/LoadingStub";
import {SearchRelativelyWrapper} from "../search/SearchRelativelyWrapper";
import useStoreon from "storeon/preact";

export const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isWindowShowed, setIsWindowShowed] = useState(false);

    const { dispatch, foundCity: city, isLoading, searchError } = useStoreon("foundCity", "isLoading", "searchError");

    useEffect(() => {
        setIsWindowShowed(true);
    }, [isLoading, city, searchError]);

    useEffect(() => {
        const listener = () => setIsWindowShowed(false);
        window.addEventListener("click", listener);
        return () => window.removeEventListener("click", listener);
    });

    const onSearchSubmit = e => {
        e.preventDefault();
        dispatch("search/find", searchValue)
    };

    return <div onClick={(e) => e.stopPropagation()}>
        <SearchRelativelyWrapper>
            <form onSubmit={onSearchSubmit}>
                <Input id={"search"} label={"Search:"} value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search">
                    <SearchButton />
                </Input>
            </form>
            {isWindowShowed && <SearchAbsoluteContainer>
                {!isLoading && city && <SearchList>
                    {city && <SearchOption title={city.name}
                                           onClick={() => {
                                               dispatch("cities/addCity", city);
                                               setIsWindowShowed(false);
                                           }}
                                           coords={city.coord && `${city.coord.lat}, ${city.coord.lon}`} />}
                </SearchList>}
                {!isLoading && searchError && searchError.city && <NotFoundStub city={searchError.city} />}
                {isLoading && <LoadingStub />}
            </SearchAbsoluteContainer>}
        </SearchRelativelyWrapper>
    </div>
}
