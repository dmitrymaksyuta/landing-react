import React from "react";
import {MainWrapper} from "./style";
import Info from "./info/Info";
import Form from "./form/Form";

const Main = () => {
    return (
        <MainWrapper>
            <MainWrapper.Content>
                <Info/>
                <Form/>
            </MainWrapper.Content>
            <MainWrapper.Background></MainWrapper.Background>
        </MainWrapper>
    );
};

export default Main;
