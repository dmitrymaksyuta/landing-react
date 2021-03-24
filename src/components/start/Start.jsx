import React from "react";
import {StartWrapper, Button} from "./style";

const Start = () => {
    return (
        <StartWrapper>
            <StartWrapper.Title>Allow us to fund you</StartWrapper.Title>
            <StartWrapper.Button>
                <Button.Text>Start now</Button.Text>
                <Button.Arrow></Button.Arrow>
            </StartWrapper.Button>
        </StartWrapper>
    );
};

export default Start;
