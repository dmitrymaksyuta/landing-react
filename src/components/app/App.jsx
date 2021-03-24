import React from "react";
import GlobalStyle from "../../globalStyle";
import {Wrapper} from "./style";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Bullets from "../bullets/Bullets";
import Start from "../start/Start";

const App = () => {
    return (
        <Wrapper>
            <Wrapper.Content>
                <Main/>
                <Bullets/>
                <Start/>
            </Wrapper.Content>
            <Wrapper.Footer>
                <Footer/>
            </Wrapper.Footer>
            <GlobalStyle/>
        </Wrapper>
    );
};

export default App;
