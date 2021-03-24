import React from "react";
import {InfoWrapper, Content} from "./style";

const Info = () => {
    return (
        <InfoWrapper>
            <InfoWrapper.Title>We teach you. We fund you.</InfoWrapper.Title>
            <InfoWrapper.SubTitle>You keep most of the profits</InfoWrapper.SubTitle>
            <InfoWrapper.Content>
                <Content.TextOne>We have educated more than</Content.TextOne>
                <Content.TextTwo>16,000 traders worldwide</Content.TextTwo>
                <Content.TextThree>since 2004 & completely funded their trading accounts. You can be next</Content.TextThree>
            </InfoWrapper.Content>
            <InfoWrapper.Block></InfoWrapper.Block>
        </InfoWrapper>
    );
};

export default Info;
