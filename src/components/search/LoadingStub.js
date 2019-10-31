import React from "react";
import {StubContainer} from "./StubContainer";
import {Spinner} from "../spinner/Spinner";

export const LoadingStub = () => {
    return <StubContainer>
        <Spinner />
    </StubContainer>
}
