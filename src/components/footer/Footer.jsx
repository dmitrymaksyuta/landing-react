import React from "react";
import {FooterWrapper, Content} from "./style";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterWrapper.Content>
                <Content.Text>
                    Tradenet is a Day Trading Training school that offers day and swing trading courses in
                    stocks, CFDs, options, futures and Forex. At Tradenet we specialize in day trading courses that are
                    suitable for those familiar with day trading, or beginners with no prior knowledge or experience
                    with day trading.
                </Content.Text>
                <Content.Br />
                <Content.Text>
                    We offer three different learning options; Self-Study online course, online courses in the comfort
                    of your own home or an exclusive course, one-on-one with an experienced day trading mentor at your
                    own pace. We also offer online live day Trading Room and the potential for funded sub-accounts for
                    our students. Most of our services are offered in several languages, including: Spanish, German,
                    French, Russian, Hungarian, Italian, Arabic and more.
                </Content.Text>
            </FooterWrapper.Content>
        </FooterWrapper>
    );
};

export default Footer;
