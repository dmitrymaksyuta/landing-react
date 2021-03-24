import React from "react";
import {BulletsWrapper} from "./style";
import Bullet from "./bullet/Bullet";
import bullets from '../../constants/bullets';

const Bullets = () => {

    return (
        <BulletsWrapper>
            <BulletsWrapper.Title>What we offer</BulletsWrapper.Title>
            <BulletsWrapper.Content>
                {bullets.map((item) => (
                    <Bullet content={item} key={item.id}/>
                ))}
            </BulletsWrapper.Content>
        </BulletsWrapper>
    );
};

export default Bullets;
