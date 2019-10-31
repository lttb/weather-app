import React from "react";
import cc from "classcat";
import * as s from "./notFoundStub.css";
import * as typography from "../typography/typography.css"
import {StubContainer} from "./StubContainer";

export const NotFoundStub = () => {
    return <StubContainer>
        <p className={cc([s.title, typography["body-bold"]])}>City called “London” was not found</p>
        <p className={cc([s.hint, typography.caption])}>Try different city name</p>
    </StubContainer>
};
